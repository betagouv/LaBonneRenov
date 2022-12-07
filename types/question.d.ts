import { ReactNode } from 'react';
import QuestionType from './enum/questionType';

type BaseQuestion = {
  id: string;
  label: string;
  error?: string;
  validate?: (value: string | string[]) => boolean;
};

export type TextQuestion = BaseQuestion & {
  type: QuestionType.TEXT;
  placeholder?: string;
  recap: (value: string) => ReactNode;
};

export type YesNoQuestion = BaseQuestion & {
  type: QuestionType.YESNO;
  recap: (value: string) => ReactNode;
};

export type NumberQuestion = BaseQuestion & {
  type: QuestionType.NUMBER;
  step: number;
  placeholder?: string;
  min?: number;
  max?: number;
  recap: (value: string) => ReactNode;
};

export type RadioQuestion = BaseQuestion & {
  type: QuestionType.RADIO;
  options: {
    label: string;
    value: string;
    recap: ReactNode;
  }[];
};

export type CheckBoxQuestion = BaseQuestion & {
  type: QuestionType.CHECKBOX;
  options: {
    label: string;
    value: string;
    recap: string;
  }[];
  recap: (values: string[]) => ReactNode;
};

export type Question =
  | TextQuestion
  | YesNoQuestion
  | RadioQuestion
  | CheckBoxQuestion
  | NumberQuestion;

export type QuestionProps<T> = {
  question: T;
  answer: (value: string | string[]) => void;
};
