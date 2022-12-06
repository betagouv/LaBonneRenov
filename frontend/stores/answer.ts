import { action, makeObservable, observable } from 'mobx';
import questions from '../data/questions';

export default class AnswerStore {
  currentAnswers: { id: string; value: string | string[] }[] = [];

  constructor() {
    makeObservable(this, {
      currentAnswers: observable,

      answer: action.bound,
      previous: action.bound,
    });
  }

  get currentQuestion() {
    return questions.find(
      (question) =>
        !this.currentAnswers.some((answer) => answer.id === question.id)
    );
  }

  answer(id: string, value: string | string[]) {
    this.currentAnswers.push({ id, value });
  }

  previous() {
    this.currentAnswers.pop();
  }
}
