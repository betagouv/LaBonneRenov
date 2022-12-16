import { reaction } from 'mobx';
import { createContext, useContext } from 'react';
import agent from '../services/agent';
import AnswerStore from './answer';

export const store = new AnswerStore();
const StoreContext = createContext(store);
export const useStore = () => useContext(StoreContext);

reaction(
  () => JSON.stringify(store.currentAnswers),
  async () => {
    if (store.id) {
      agent.Answers.update(store.id, JSON.stringify(store.currentAnswers));
    } else {
      const { id } = await agent.Answers.post(
        JSON.stringify(store.currentAnswers)
      );
      store.id = id;
      localStorage.setItem('questionnaires_id', id);
    }
  }
);
