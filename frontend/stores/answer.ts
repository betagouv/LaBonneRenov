import { action, makeObservable, observable, runInAction } from 'mobx';
import { NextRouter } from 'next/router';
import { Answer } from '../../types/answer';
import QuestionGroupId from '../../types/enum/QuestionGroupId';
import QuestionId from '../../types/enum/QuestionId';
import { Question } from '../../types/question';
import { steps } from '../data/questions';
import agent from '../services/agent';

const answered = (answers: Answer[], question: Question) =>
  answers.some((answer) => answer.id === question.id && answer.value !== null);

export default class AnswerStore {
  getCurrentQuestion = () =>
    steps
      .filter((step) => !this.skippedGroup.includes(step.id))
      .flatMap((step) => step.questions)
      .filter((question) => !question.disabled)
      .filter(
        (question) =>
          !question.dependsOn ||
          question.dependsOn.every((previous) => {
            const previousAnswer = this.currentAnswers.find(
              (a) => a.id === previous.id
            );
            if (!previousAnswer) {
              return false;
            }

            return previous.values
              ? previous.values.includes(previousAnswer.value as string)
              : previousAnswer.value === previous.value;
          })
      )
      .find((question) => !answered(this.currentAnswers, question));

  currentAnswers: Answer[] = [];

  skippedGroup: QuestionGroupId[] = [];

  currentQuestion: Question | undefined;

  id = '';

  loading = true;

  constructor() {
    makeObservable(this, {
      currentAnswers: observable,
      skippedGroup: observable,
      currentQuestion: observable,
      id: observable,
      loading: observable,

      init: action.bound,
      answer: action.bound,
      skip: action.bound,
      unSkip: action.bound,
      reset: action.bound,
      setCurrentQuestion: action.bound,
      updateQuestion: action.bound,
    });
  }

  get stepInfo() {
    const currentIndex = steps.findIndex((step) =>
      step.questions.some(
        (question) => question.id === this.currentQuestion?.id
      )
    );

    return currentIndex < 0
      ? null
      : {
          step: steps[currentIndex],
          currentStep: currentIndex + 1,
          steps: steps.length,
          currentTitle: steps[currentIndex].label,
          nextStepTitle:
            currentIndex + 1 < steps.length
              ? steps[currentIndex + 1].label
              : undefined,
        };
  }

  updateQuestion(router: NextRouter) {
    const question = this.getCurrentQuestion();
    if (question) {
      router.push(`/pac/${question.id}`);
    } else {
      router.push('/pac/recap');
      agent.Answers.finish(this.id);
    }
  }

  async init(id: string | null) {
    if (id) {
      const response = await agent.Answers.get(id);
      if (response) {
        runInAction(() => {
          this.id = id;
          this.currentAnswers = JSON.parse(response.values);
        });
      }
    }

    runInAction(() => {
      this.loading = false;
    });
  }

  setCurrentQuestion(id: string) {
    this.currentQuestion = steps
      .flatMap((step) => step.questions)
      .find((question) => question.id === id);
  }

  answer(id: QuestionId, value: string | string[], router: NextRouter) {
    const answer = this.currentAnswers.find((a) => a.id === id);
    if (answer) {
      answer.value = value;
    } else {
      this.currentAnswers.push({ id, value });
    }
    const question = steps
      .flatMap((step) => step.questions)
      .find((q) => q.id === id);
    if (question && question.clean) {
      this.currentAnswers = this.currentAnswers.filter(
        (a) => !question.clean?.includes(a.id)
      );
    }

    this.updateQuestion(router);
  }

  skip(id: QuestionGroupId, router: NextRouter) {
    this.skippedGroup.push(id);
    this.updateQuestion(router);
  }

  unSkip(id: QuestionGroupId, router: NextRouter) {
    this.skippedGroup = this.skippedGroup.filter((x) => x !== id);
    this.updateQuestion(router);
  }

  reset(router: NextRouter) {
    this.id = '';
    this.currentAnswers = [];
    this.skippedGroup = [];
    this.updateQuestion(router);
  }
}
