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
};

export type YesNoQuestion = BaseQuestion & {
  type: QuestionType.YESNO;
};

export type NumberQuestion = BaseQuestion & {
  type: QuestionType.NUMBER;
  step: number;
  placeholder?: string;
  min?: number;
  max?: number;
};

export type RadioQuestion = BaseQuestion & {
  type: QuestionType.RADIO;
  options: {
    label: string;
    value: string;
  }[];
};

export type CheckBoxQuestion = BaseQuestion & {
  type: QuestionType.CHECKBOX;
  options: {
    label: string;
    value: string;
  }[];
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
