import QuestionId from './enum/QuestionId';
import { Savings } from './savings';

export type Answer = { id: QuestionId; value: string | string[] | null };

export type Answers = Partial<Record<QuestionId, string | string[] | null>>;

export type IsolationResult = {
  mur: number;
  plancherHaut: number;
  plancherBas: number;
  menuiserie: number;
  vmc: number;
};

export type RennovationResult = {
  firstStep: { steps: (keyof IsolationResult)[]; savings: Savings };
  secondStep: { steps: (keyof IsolationResult)[]; savings: Savings };
};
