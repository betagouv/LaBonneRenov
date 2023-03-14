import { ReactNode } from 'react';
import { Answer } from './answer';
import QuestionId from './enum/QuestionId';
import QuestionType from './enum/questionType';

type BaseQuestion = {
  id: QuestionId;
  label: string;
  error?: string;
  clean?: QuestionId[];
  validate?: (value: string | string[]) => boolean;
  disabled?: boolean;
  dependsOn?: { id: QuestionId; value?: string; values?: string[] }[];
  context?: {
    title: string;
    description: ReactNode;
  };
};

export type TextQuestion = BaseQuestion & {
  type: QuestionType.TEXT;
  placeholder?: string;
  recap: (
    value: string,
    onClick: () => void,
    externalLink?: boolean
  ) => ReactNode;
};

export type YesNoUnknownQuestion = BaseQuestion & {
  type: QuestionType.YESNOUNKNOWN;
  recap: (
    value: string,
    onClick: () => void,
    externalLink?: boolean
  ) => ReactNode;
};

export type YesNoQuestion = BaseQuestion & {
  type: QuestionType.YESNO;
  recap: (
    value: boolean,
    onClick: () => void,
    externalLink?: boolean
  ) => ReactNode;
};

export type NumberQuestion = BaseQuestion & {
  type: QuestionType.NUMBER;
  step: number;
  placeholder?: string;
  min?: number;
  max?: number;
  recap: (
    value: string,
    onClick: () => void,
    externalLink?: boolean
  ) => ReactNode;
};

export type RadioQuestion = BaseQuestion & {
  type: QuestionType.RADIO;
  options:
    | {
        label: string;
        value: string;
        recap: (onClick: () => void, externalLink?: boolean) => ReactNode;
      }[]
    | ((answers: Answer[]) => {
        label: string;
        value: string;
        recap: (onClick: () => void, externalLink?: boolean) => ReactNode;
      }[]);
};

export type CheckBoxQuestion = BaseQuestion & {
  type: QuestionType.CHECKBOX;
  options: {
    label: string;
    value: string;
    recap: string;
  }[];
  recap: (
    values: string[],
    onClick: () => void,
    externalLink?: boolean
  ) => ReactNode;
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
