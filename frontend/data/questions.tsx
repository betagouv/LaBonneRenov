import QuestionType from '../../types/enum/questionType';
import { Question } from '../../types/question';

const questions: Question[] = [
  {
    id: 'projet',
    label: 'Vous avez des projets de travaux ?',
    type: QuestionType.RADIO,
    options: [
      {
        value: 'pac',
        label: 'Installer une PAC',
        recap: (
          <>
            Je veux <b>installer une PAC</b>
          </>
        ),
      },
      {
        value: 'inconnu',
        label: 'Je ne sais pas',
        recap: "Je n'ai pas de projet précis",
      },
    ],
  },
  {
    id: 'objectif',
    label: 'Quel est votre principal objectif ?',
    type: QuestionType.CHECKBOX,
    validate: (values) => values.length > 0,
    error: 'Vous devez choisir au moins une option.',
    options: [
      {
        value: 'factures',
        label: 'Réduire mes factures',
        recap: 'réduire mes factures',
      },
      {
        value: 'confort',
        label: 'Améliorer mon confort été / hiver',
        recap: 'améliorer mon confort été / hiver',
      },
      {
        value: 'co2',
        label: 'Réduire mes émissions de CO2',
        recap: 'réduire mes émissions de CO2',
      },
      {
        value: 'appareil',
        label: 'Changer un appareil défectueux (cf. chaudière)',
        recap: 'changer un appareil défectueux (cf. chaudière)',
      },
    ],
    recap: (values: string[]) => (
      <>
        je veux <b>{values.join(', ')}</b>
      </>
    ),
  },
  {
    id: 'avancé',
    label: 'Où en êtes vous de ce projet ?',
    type: QuestionType.RADIO,
    options: [
      {
        value: 'renseigne',
        label: 'Je me renseigne',
        recap: (
          <>
            Je <b>me renseigne</b> pour ce projet
          </>
        ),
      },
      {
        value: 'commence',
        label: 'Je commence mes démarches',
        recap: (
          <>
            J&lsquo;ai <b>commencer mes démarches</b>
          </>
        ),
      },
      {
        value: 'devis',
        label: "J'ai déjà fait des devis",
        recap: (
          <>
            J&lsquo;ai <b>déjà fait des devis</b>
          </>
        ),
      },
    ],
  },
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
];

export const firstQuestion = questions[0].id;

export default questions;
