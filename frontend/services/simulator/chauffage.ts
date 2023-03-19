import { Answers } from '../../../types/answer';
import QuestionId from '../../../types/enum/QuestionId';
import { getValue } from './utils';

const efficientChauffages = [
  'chaudiere gaz',
  'chaudiere fioul',
  'chaudiere bois',
];

const emetteurRating = (answers: Answers): number => {
  const emetteurs = getValue(answers, QuestionId.EMETTEURS);
  if (emetteurs?.includes('radiateurs muraux')) {
    return 2;
  }
  if (emetteurs?.includes('plancher chauffant')) {
    return 1;
  }
  if (emetteurs?.includes('autres')) {
    return 0;
  }

  throw new Error(`Unknown ${QuestionId.EMETTEURS} values: ${emetteurs}`);
};

const computeChauffageRating = (answers: Answers): number => {
  const chauffage = getValue(answers, QuestionId.CHAUFFAGE_PRINCIPAL) as string;
  return efficientChauffages.includes(chauffage) ? emetteurRating(answers) : 3;
};

export default computeChauffageRating;
