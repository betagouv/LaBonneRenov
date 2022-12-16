import { action, makeObservable, observable } from 'mobx';
import { Question } from '../../types/question';
import { questions, steps } from '../data/questions';
import agent from '../services/agent';

const answered = (
  answers: { id: string; value: string | string[] | null }[],
  question: Question
) =>
  answers.some((answer) => answer.id === question.id && answer.value !== null);

export default class AnswerStore {
  currentAnswers: { id: string; value: string | string[] | null }[] = [];

  id: string = '';

  constructor() {
    makeObservable(this, {
      currentAnswers: observable,
      id: observable,

      init: action.bound,
      answer: action.bound,
      changeAnswer: action.bound,
      previous: action.bound,
      reset: action.bound,
    });
  }

  get currentQuestion() {
    return questions
      .filter((question) => !question.disabled)
      .filter(
        (question) =>
          !question.dependsOn ||
          question.dependsOn.every((previous) => {
            const previousAnswer = this.currentAnswers.find(
              (answer) => answer.id === previous.id
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
        this.id = id;
        this.currentAnswers = JSON.parse(response.values);
      }
    }
  }

  answer(id: string, value: string | string[]) {
    const answer = this.currentAnswers.find((a) => a.id === id);
    if (answer) {
      answer.value = value;
    } else {
      this.currentAnswers.push({ id, value });
    }
  }

  changeAnswer(id: string) {
    const answer = this.currentAnswers.find((a) => a.id === id);
    if (answer) {
      answer.value = null;
    }
  }

  previous() {
    this.currentAnswers.pop();
  }

  reset() {
    this.id = '';
    this.currentAnswers = [];
  }
}
