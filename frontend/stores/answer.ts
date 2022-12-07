import { action, makeObservable, observable } from 'mobx';
import questions from '../data/questions';

export default class AnswerStore {
  currentAnswers: { id: string; value: string | string[] | null }[] = [];

  constructor() {
    makeObservable(this, {
      currentAnswers: observable,

      answer: action.bound,
      changeAnswer: action.bound,
      previous: action.bound,
    });
  }

  get currentQuestion() {
    return questions.find(
      (question) =>
        !this.currentAnswers.some(
          (answer) => answer.id === question.id && answer.value !== null
        )
    );
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
}
