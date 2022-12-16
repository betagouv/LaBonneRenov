import { ReactNode } from 'react';
import QuestionType from './enum/questionType';

type BaseQuestion = {
  id: string;
  label: string;
  error?: string;
  validate?: (value: string | string[]) => boolean;
  disabled?: boolean;
  dependsOn?: { id: string; value?: string; values?: string[] }[];
};

export type TextQuestion = BaseQuestion & {
  type: QuestionType.TEXT;
  placeholder?: string;
  recap: (value: string, onClick: () => void) => ReactNode;
};

export type YesNoUnknownQuestion = BaseQuestion & {
  type: QuestionType.YESNOUNKNOWN;
  recap: (value: string, onClick: () => void) => ReactNode;
};

export type YesNoQuestion = BaseQuestion & {
  type: QuestionType.YESNO;
  recap: (value: boolean, onClick: () => void) => ReactNode;
};

export type NumberQuestion = BaseQuestion & {
  type: QuestionType.NUMBER;
  step: number;
  placeholder?: string;
  min?: number;
  max?: number;
  recap: (value: string, onClick: () => void) => ReactNode;
};

export type RadioQuestion = BaseQuestion & {
  type: QuestionType.RADIO;
  options: {
    label: string;
    value: string;
    recap: (onClick: () => void) => ReactNode;
  }[];
};

export type CheckBoxQuestion = BaseQuestion & {
  type: QuestionType.CHECKBOX;
  options: {
    label: string;
    value: string;
    recap: string;
  }[];
  recap: (values: string[], onClick: () => void) => ReactNode;
};

export type Question =
  | TextQuestion
  | YesNoQuestion
  | YesNoUnknownQuestion
  | RadioQuestion
  | CheckBoxQuestion
  | NumberQuestion;

export type QuestionProps<T> = {
  question: T;
  answer: (value: string | string[]) => void;
  showError: boolean;
};
