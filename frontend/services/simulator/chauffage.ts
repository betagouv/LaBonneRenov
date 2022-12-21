import { Answers } from '../../../types/answer';
import QuestionId from '../../../types/enum/QuestionId';
import { getValue } from './utils';

const efficientChauffages = [
  'chaudiere gaz',
  'chaudiere fioul',
  'chaudiere bois',
];

const emetteurRating = (answers: Answers): number => {
  const emetteur = getValue(answers, QuestionId.EMETTEURS);
  switch (emetteur) {
    case 'autres':
    case 'radiateur mureaux':
      return 2;
    case 'plancher chauffant':
      return 1;
    default:
      throw new Error(`Unknown ${QuestionId.EMETTEURS} value: ${emetteur}`);
  }
};

const computeChauffageRating = (answers: Answers): number => {
  const chauffage = getValue(answers, QuestionId.CHAUFFAGE_PRINCIPAL) as string;
  return efficientChauffages.includes(chauffage) ? emetteurRating(answers) : 3;
};

export default computeChauffageRating;
