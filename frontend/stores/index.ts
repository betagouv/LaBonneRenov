import { reaction } from 'mobx';
import { createContext, useContext } from 'react';
import AnswerStore from './answer';

export const store = new AnswerStore();
const StoreContext = createContext(store);
export const useStore = () => useContext(StoreContext);

reaction(
  () => JSON.stringify(store.currentAnswers),
  () => {
    localStorage.setItem('answers', JSON.stringify(store.currentAnswers));
  }
);
