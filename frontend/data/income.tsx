import { ClickableAnswer } from '../../components/Recap/index.styles';
import MaPrimeRenovCategory from '../../types/enum/MaPrimeRenovCategory';
import Owner from '../../types/enum/Owner';
import QuestionGroupId from '../../types/enum/QuestionGroupId';
import QuestionId from '../../types/enum/QuestionId';
import QuestionType from '../../types/enum/questionType';
import Residence from '../../types/enum/Residence';
import UserSatus from '../../types/enum/UserStatus';
import { QuestionGroup } from '../../types/questionGroup';
import { getFranceRenovScale } from '../services/simulator/fundings';

const income: QuestionGroup = {
  id: QuestionGroupId.INCOME,
  label: 'Vos revenus',
  skipable: true,
  questions: [
    {
      id: QuestionId.CONSTRUCTION_YEAR,
      label: "En quel année vôtre maison a t'elle été construite ?",
      type: QuestionType.NUMBER,
      validate: (value) => {
        const nb = parseInt(value as string, 10);
        return !Number.isNaN(nb) && nb > 1800 && nb < 2025;
      },
      error: 'Année invalide.',
      step: 1,
      recap: (value: string, onClick) => (
        <>
          Vôtre maison à été construite en{' '}
          <ClickableAnswer onClick={onClick}>{value}</ClickableAnswer>
        </>
      ),
    },
    {
      id: QuestionId.OWNER,
      label: 'Vous êtes ?',
      type: QuestionType.RADIO,
      options: [
        {
          label: 'Propriétaire',
          value: Owner.PROPRIETAIRE,
          recap: (onClick) => (
            <>
              Vous êtes{' '}
              <ClickableAnswer onClick={onClick}>propriétaire</ClickableAnswer>
            </>
          ),
        },
        {
          label: 'Locataire',
          value: Owner.LOCATAIRE,
          recap: (onClick) => (
            <>
              Vous êtes{' '}
              <ClickableAnswer onClick={onClick}>locataire</ClickableAnswer>
            </>
          ),
        },
      ],
    },
    {
      id: QuestionId.SITUATION,
      dependsOn: [{ id: QuestionId.OWNER, value: Owner.PROPRIETAIRE }],
      label: 'Vous êtes ?',
      type: QuestionType.RADIO,
      options: [
        {
          label: 'Propriétaire occupant',
          value: UserSatus.PROPRIETAIRE_OCCUPANT,
          recap: (onClick) => (
            <>
              Vous êtes{' '}
              <ClickableAnswer onClick={onClick}>
                propriétaire occupant
              </ClickableAnswer>
            </>
          ),
        },
        {
          label: 'Propriétaire bailleur',
          value: UserSatus.PROPRIETAIRE_BAILLEUR,
          recap: (onClick) => (
            <>
              Vous êtes{' '}
              <ClickableAnswer onClick={onClick}>
                propriétaire bailleur
              </ClickableAnswer>
            </>
          ),
        },
      ],
    },
    {
      id: QuestionId.RESIDENCE_STATUS,
      dependsOn: [{ id: QuestionId.OWNER, value: Owner.PROPRIETAIRE }],
      label: 'Vôtre maison est ?',
      type: QuestionType.RADIO,
      options: [
        {
          label: 'Vôtre résidence principale',
          value: Residence.PRINCIPALE,
          recap: (onClick) => (
            <>
              Vôtre maison est{' '}
              <ClickableAnswer onClick={onClick}>
                vôtre résidence principale
              </ClickableAnswer>
            </>
          ),
        },
        {
          label: 'Vôtre résidence secondaire',
          value: Residence.SECONDAIRE,
          recap: (onClick) => (
            <>
              Vôtre maison est{' '}
              <ClickableAnswer onClick={onClick}>
                vôtre résidence secondaire
              </ClickableAnswer>
            </>
          ),
        },
      ],
    },
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
        const { blue, yellow, violet } = getFranceRenovScale(answers);
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
