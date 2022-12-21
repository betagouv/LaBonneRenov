import { Answers } from '../../../types/answer';
import QuestionId from '../../../types/enum/QuestionId';

const computeConstuctionRating = (answers: Answers): number => {
  switch (answers[QuestionId.CONSTRUCTION]) {
    case 'very old':
      return 1;
    case 'old':
      return 2;
    case 'recent':
      return 3;
    case 'very recent':
      return 4;
    default:
      throw new Error(
        `Unknown ${QuestionId.CONSTRUCTION} value: ${
          answers[QuestionId.CONSTRUCTION]
        }`
      );
  }
};

export default computeConstuctionRating;
