import house from './house';
import income from './income';
import motivations from './motivations';

export const steps = [motivations, ...house, income];

export const firstQuestion = steps[0].questions.filter(
  (question) => !question.disabled
)[0].id;
