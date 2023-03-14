import house from './house';
import motivations from './motivations';

export const steps = [motivations, ...house];

export const firstQuestion = steps[0].questions.filter(
  (question) => !question.disabled
)[0].id;
