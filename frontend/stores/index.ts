import { createContext, useContext } from 'react';
import AnswerStore from './answer';

export const store = new AnswerStore();
const StoreContext = createContext(store);
export const useStore = () => useContext(StoreContext);
