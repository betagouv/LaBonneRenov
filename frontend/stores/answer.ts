import { action, makeObservable, observable } from 'mobx';
import questions from '../data/questions';

export default class AnswerStore {
  currentAnswers: Record<string, string | string[]> = {};

  constructor() {
    makeObservable(this, {
      currentAnswers: observable,

      answer: action.bound,
    });
  }

  get currentQuestion() {
    return questions.find((question) => !this.currentAnswers[question.id]);
  }

  answer(id: string, value: string | string[]) {
    this.currentAnswers[id] = value;
  }
}
