import QuestionType from './enum/questionType';

type BaseQuestion = {
  id: string;
  label: string;
  validate?: (value: string | string[]) => boolean;
};

export type TextQuestion = BaseQuestion & {
  type: QuestionType.TEXT;
  placeholder?: string;
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

export type Question = TextQuestion | RadioQuestion | CheckBoxQuestion;

export type QuestionProps<T> = {
  question: T;
  answer: (value: string | string[]) => void;
};
