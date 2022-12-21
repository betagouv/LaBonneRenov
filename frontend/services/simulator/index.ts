import { Answer, Answers } from '../../../types/answer';
import { Result } from '../../../types/result';
import computeChauffageRating from './chauffage';
import computeConstuctionRating from './construction';
import computeIsolationRating from './isolation';

const basseTemperature = (answers: Answers): Result => {
  const isolation = computeIsolationRating(answers);
  switch (isolation) {
    case 1:
      return {
        compatibility: 'sok',
      };
    case 2:
      return {
        compatibility: 'ok',
      };
    case 3:
      return {
        compatibility: 'ok',
      };
    default:
      throw new Error(`Unknown isolation rating: ${isolation}`);
  }
};

const hauteTemperature = (answers: Answers): Result => {
  const construction = computeConstuctionRating(answers);
  if (construction === 1 || construction === 2) {
    const isolation = computeIsolationRating(answers);
    switch (isolation) {
      case 1:
        return {
          compatibility: 'nok',
        };
      case 2:
        return {
          compatibility: 'sok',
        };
      case 3:
        return {
          compatibility: 'ok',
        };
      default:
        throw new Error(`Unknown isolation rating: ${isolation}`);
    }
  } else if (construction === 3) {
    return {
      compatibility: 'sok',
    };
  } else {
    return {
      compatibility: 'sok',
    };
  }
};

const other = (answers: Answers): Result => {
  const isolation = computeIsolationRating(answers);
  switch (isolation) {
    case 1:
      return {
        compatibility: 'nok',
      };
    case 2:
      return {
        compatibility: 'ok',
      };
    case 3:
      return {
        compatibility: 'ok',
      };
    default:
      throw new Error(`Unknown isolation rating: ${isolation}`);
  }
};

const simulator = (arrayAnswers: Answer[]): Result => {
  const answers: Answers = {};
  arrayAnswers.forEach((answer) => {
    answers[answer.id] = answer.value;
  });

  const chauffageRating = computeChauffageRating(answers);
  switch (chauffageRating) {
    case 1:
      return basseTemperature(answers);
    case 2:
      return hauteTemperature(answers);
    default:
      return other(answers);
  }
};

export default simulator;
