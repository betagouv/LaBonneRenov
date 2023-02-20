import QuestionGroupId from './enum/QuestionGroupId';
import { Question } from './question';

export type QuestionGroup = {
  id: QuestionGroupId;
  label: string;
  skipable?: boolean;
  questions: Question[];
};
