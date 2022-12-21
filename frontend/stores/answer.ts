import { action, makeObservable, observable, runInAction } from 'mobx';
import { NextRouter } from 'next/router';
import { Answer } from '../../types/answer';
import QuestionId from '../../types/enum/QuestionId';
import { Question } from '../../types/question';
import { questions, steps } from '../data/questions';
import agent from '../services/agent';

const answered = (answers: Answer[], question: Question) =>
  answers.some((answer) => answer.id === question.id && answer.value !== null);

export default class AnswerStore {
  getCurrentQuestion = () =>
    questions
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

  currentQuestion: Question | undefined;

  id = '';

  loading = true;

  constructor() {
    makeObservable(this, {
      currentAnswers: observable,
      currentQuestion: observable,
      id: observable,
      loading: observable,

      init: action.bound,
      answer: action.bound,
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
    this.currentQuestion = questions.find((question) => question.id === id);
  }

  answer(id: QuestionId, value: string | string[], router: NextRouter) {
    const answer = this.currentAnswers.find((a) => a.id === id);
    if (answer) {
      answer.value = value;
    } else {
      this.currentAnswers.push({ id, value });
    }
    this.updateQuestion(router);
  }

  reset(router: NextRouter) {
    this.id = '';
    this.currentAnswers = [];
    this.updateQuestion(router);
  }
}
