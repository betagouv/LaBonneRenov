import QuestionType from './enum/questionType';

type BaseQuestion = {
  id: string;
  label: string;
};

export type RadioQuestion = BaseQuestion & {
  type: QuestionType.RADIO;
  options: {
    label: string;
    value: string;
  }[];
};

export type Question = RadioQuestion;
