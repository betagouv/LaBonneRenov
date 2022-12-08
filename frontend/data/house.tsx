import QuestionType from '../../types/enum/questionType';
import { QuestionGroup } from '../../types/questionGroup';

const house: QuestionGroup = {
  label: 'Votre maison',
  questions: [
    {
      id: 'code postal',
      label: 'Quel est le code postal de votre maison ?',
      type: QuestionType.TEXT,
      validate: (value) => /^(([0-9]{2}|2A|2B)[0-9]{3})$/.test(value as string),
      error: 'Code postal invalide.',
      placeholder: '75015',
      recap: (value) => (
        <>
          J&lsquo;habite dans le <b>{value}</b>
        </>
      ),
    },
    {
      id: 'année',
      label: 'Année de construction',
      type: QuestionType.RADIO,
      options: [
        {
          value: 'very old',
          label: 'Avant 1950',
          recap: (
            <>
              Ma maison a été construite <b>avant 1950</b>
            </>
          ),
        },
        {
          value: 'old',
          label: 'Entre 1950 et 1970',
          recap: (
            <>
              Ma maison a été construite <b>entre 1950 et 1970</b>
            </>
          ),
        },
        {
          value: 'recent',
          label: 'Entre 1970 et 2000',
          recap: (
            <>
              Ma maison a été construite <b>entre 1970 et 2000</b>
            </>
          ),
        },
        {
          value: 'very recent',
          label: 'Après 2000',
          recap: (
            <>
              Ma maison a été construite <b>après 2000</b>
            </>
          ),
        },
      ],
    },
    {
      id: 'exterieur',
      label: "Disposez-vous d'un extérieur ?",
      type: QuestionType.YESNO,
      recap: (value: string) => (
        <>
          Je <b>{value ? 'dispose' : 'ne dispose pas'}</b> d&lsquo;un extérieur
        </>
      ),
    },
    {
      id: 'surface',
      label: 'Surface habitable de votre maison (m²)',
      type: QuestionType.NUMBER,
      validate: (value) => {
        const surface = parseInt(value as string, 10);
        return !Number.isNaN(surface) && surface > 0;
      },
      error: 'Surface invalide.',
      step: 1,
      recap: (value: string) => (
        <>
          Ma maison fait <b>{value}</b>m²
        </>
      ),
    },
    {
      id: 'etage',
      label: "Nombre d'étage habités ?",
      type: QuestionType.RADIO,
      options: [
        {
          value: '1',
          label: '1',
          recap: (
            <>
              j&lsquo;habite <b>1 étage</b>
            </>
          ),
        },
        {
          value: '2',
          label: '2',
          recap: (
            <>
              j&lsquo;habite <b>2 étages</b>
            </>
          ),
        },
        {
          value: '3',
          label: '3',
          recap: (
            <>
              j&lsquo;habite <b>3 étages</b>
            </>
          ),
        },
        {
          value: '4',
          label: '4+',
          recap: (
            <>
              j&lsquo;habite <b>au moins 4 étages</b>
            </>
          ),
        },
      ],
    },
    {
      id: 'mur',
      label: 'Vos mur sont-ils isolés ?',
      type: QuestionType.RADIO,
      options: [
        {
          value: 'no',
          label: "Pas d'isolation du tout",
          recap: (
            <>
              Mes murs <b>ne sont pas isolés</b>
            </>
          ),
        },
        {
          value: 'old',
          label: 'Isolation de + de 20 ans',
          recap: (
            <>
              Mes murs ont été isolés il y a <b>plus de 20 ans</b>
            </>
          ),
        },
        {
          value: 'new',
          label: 'Isolation de moins de 20 ans',
          recap: (
            <>
              Mes murs ont été isolés il y a <b>moins de 20 ans</b>
            </>
          ),
        },
      ],
    },
    {
      id: 'plancher haut',
      label: 'Plancher haut',
      type: QuestionType.RADIO,
      options: [
        {
          value: 'perdus/isoles',
          label: 'Combles perdus, isolés',
          recap: (
            <>
              Mes combles sont <b>perdus et isolés</b>
            </>
          ),
        },
        {
          value: 'perdus/non isoles',
          label: 'Combles perdus, non isolés',
          recap: (
            <>
              Mes combles sont <b>perdus et non isolés</b>
            </>
          ),
        },
        {
          value: 'amenages/isoles',
          label: 'Combles aménagés, isolés',
          recap: (
            <>
              Mes combles sont <b>aménagés et isolés</b>
            </>
          ),
        },
        {
          value: 'amenages/non isoles',
          label: 'Combles aménagés, non isolés',
          recap: (
            <>
              Mes combles sont <b>aménagés et non isolés</b>
            </>
          ),
        },
      ],
    },
    {
      id: 'plancher bas',
      label: 'Plancher bas',
      type: QuestionType.RADIO,
      options: [
        {
          value: 'tbd',
          label: 'A voir...',
          recap: (
            <>
              Vous avez un plancher bas (heureusement d&lsquo;ailleurs sinon
              vous tomberiez)
            </>
          ),
        },
      ],
    },
    {
      id: 'menuiseries',
      label: 'Menuiseries',
      type: QuestionType.RADIO,
      options: [
        {
          value: 'double',
          label: 'Principalement double vitrage',
          recap: (
            <>
              J&lsquo;ai principalement <b>du double vitrage</b>
            </>
          ),
        },
        {
          value: 'simple',
          label: 'Principalement simple vitrage',
          recap: (
            <>
              J&lsquo;ai principalement <b>du simple vitrage</b>
            </>
          ),
        },
        {
          value: 'mix',
          label: 'Un mixte des deux',
          recap: (
            <>
              J&lsquo;ai <b>un mix</b> de simple et double vitrage
            </>
          ),
        },
      ],
    },
  ],
};

export default house;
