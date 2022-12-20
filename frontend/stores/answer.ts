import { action, makeObservable, observable, runInAction } from 'mobx';
import { NextRouter, Router } from 'next/router';
import { Question } from '../../types/question';
import { questions, steps } from '../data/questions';
import agent from '../services/agent';

const answered = (
  answers: { id: string; value: string | string[] | null }[],
  question: Question
) =>
  answers.some((answer) => answer.id === question.id && answer.value !== null);

export default class AnswerStore {
  getCurrentQuestion = () => questions
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

  currentAnswers: { id: string; value: string | string[] | null }[] = [];

  currentQuestion: Question | undefined = this.getCurrentQuestion();

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
    this.currentQuestion = questions.find(question => question.id === id)
  }

  answer(id: string, value: string | string[], router: NextRouter) {
    const answer = this.currentAnswers.find((a) => a.id === id);
    if (answer) {
      answer.value = value;
    } else {
      this.currentAnswers.push({ id, value });
    }

    this.currentQuestion = this.getCurrentQuestion()
    if (this.currentQuestion){
      router.push(`/pac/${this.currentQuestion.id}`);
    } else {
      router.push('/pac/recap');
    }
  }

  reset(router: NextRouter) {
    this.id = '';
    this.currentAnswers = [];
    this.currentQuestion = this.getCurrentQuestion()
    router.push(`/pac/${this.currentQuestion?.id}`);
  }
}
