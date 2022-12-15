import { Question } from '../../types/question';
import house from './house';
import motivations from './motivations';

export const steps = [motivations, house];

export const questions: Question[] = steps.flatMap((step) => step.questions);

export const firstQuestion = questions.filter(
  (question) => !question.disabled
)[0].id;
