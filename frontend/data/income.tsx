import { ClickableAnswer } from '../../components/Recap/index.styles';
import MaPrimeRenovCategory from '../../types/enum/MaPrimeRenovCategory';
import QuestionGroupId from '../../types/enum/QuestionGroupId';
import QuestionId from '../../types/enum/QuestionId';
import QuestionType from '../../types/enum/questionType';
import { QuestionGroup } from '../../types/questionGroup';

const income: QuestionGroup = {
  id: QuestionGroupId.INCOME,
  label: 'Vos revenus',
  skipable: true,
  questions: [
    {
      id: QuestionId.NB_PERSONNES,
      label: 'Combien de personnes vivent dans vôtre foyer ?',
      type: QuestionType.NUMBER,
      validate: (value) => {
        const nb = parseInt(value as string, 10);
        return !Number.isNaN(nb) && nb > 0;
      },
      error: 'Nombe de personnes invalide.',
      step: 1,
      recap: (value: string, onClick) => (
        <>
          Vous vivez à{' '}
          <ClickableAnswer onClick={onClick}>{value}</ClickableAnswer> dans
          vôtre foyer
        </>
      ),
      clean: [QuestionId.INCOME],
    },
    {
      id: QuestionId.INCOME,
      label: 'Quel est vôtre dernier revenu fiscal de référence ?',
      type: QuestionType.RADIO,
      options: (answers) => {
        const nbPersonnes =
          (answers.find((answer) => answer.id === QuestionId.NB_PERSONNES)
            ?.value as string) || '1';
        let blue = 0;
        let yellow = 0;
        let violet = 0;
        switch (nbPersonnes) {
          case '1':
            blue = 16229;
            yellow = 20805;
            violet = 29148;
            break;
          case '2':
            blue = 23734;
            yellow = 30427;
            violet = 42848;
            break;
          case '3':
            blue = 28545;
            yellow = 36591;
            violet = 51592;
            break;
          case '4':
            blue = 33346;
            yellow = 42748;
            violet = 60336;
            break;
          case '5':
            blue = 38168;
            yellow = 48930;
            violet = 69081;
            break;
          default: {
            const value = Number.parseInt(nbPersonnes, 10);
            blue = 38168 + (value - 5) * 4813;
            yellow = 48930 + (value - 5) * 6165;
            violet = 69081 + (value - 5) * 8744;
          }
        }

        return [
          {
            label: `Jusqu’à ${blue.toLocaleString()}€`,
            value: MaPrimeRenovCategory.BLUE,
            recap: (onClick) => (
              <>
                Vôtre dernier revenu de référence est de moins de{' '}
                <ClickableAnswer onClick={onClick}>
                  {blue.toLocaleString()}€
                </ClickableAnswer>
              </>
            ),
          },
          {
            label: `Jusqu’à ${yellow.toLocaleString()}€`,
            value: MaPrimeRenovCategory.YELLOW,
            recap: (onClick) => (
              <>
                Vôtre dernier revenu de référence est entre{' '}
                <ClickableAnswer onClick={onClick}>
                  {(blue + 1).toLocaleString()}€ et {yellow.toLocaleString()}€
                </ClickableAnswer>
              </>
            ),
          },
          {
            label: `Jusqu’à ${violet.toLocaleString()}€`,
            value: MaPrimeRenovCategory.VIOLET,
            recap: (onClick) => (
              <>
                Vôtre dernier revenu de référence est entre{' '}
                <ClickableAnswer onClick={onClick}>
                  {(yellow + 1).toLocaleString()}€ et {violet.toLocaleString()}€
                </ClickableAnswer>
              </>
            ),
          },
          {
            label: `Supérieur à ${violet.toLocaleString()}€`,
            value: MaPrimeRenovCategory.PINK,
            recap: (onClick) => (
              <>
                Vôtre dernier revenu de référence est supérieur à{' '}
                <ClickableAnswer onClick={onClick}>
                  {violet.toLocaleString()}€
                </ClickableAnswer>
              </>
            ),
          },
        ];
      },
    },
  ],
};

export default income;
