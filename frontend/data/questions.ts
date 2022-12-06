import QuestionType from '../../types/enum/questionType';
import { Question } from '../../types/question';

const questions: Question[] = [
  {
    id: 'projet',
    label: 'Vous avez des projets de travaux ?',
    type: QuestionType.RADIO,
    options: [
      { value: 'pac', label: 'Installer une PAC' },
      { value: 'inconnu', label: 'Je ne sais pas' },
    ],
  },
  {
    id: 'objectif',
    label: 'Quel est  votre principal objectif ?',
    type: QuestionType.CHECKBOX,
    validate: (values) => values.length > 0,
    error: 'Vous devez choisir au moins une option.',
    options: [
      { value: 'factures', label: 'Réduire mes factures' },
      { value: 'confort', label: 'Améliorer mon confort été / hiver' },
      { value: 'co2', label: 'Réduire mes émissions de CO2' },
      {
        value: 'appareil',
        label: 'Changer un appareil défectueux (cf. chaudière)',
      },
    ],
  },
  {
    id: 'avancé',
    label: 'Où en êtes vous de ce projet ?',
    type: QuestionType.RADIO,
    options: [
      { value: 'renseigne', label: 'Je me renseigne' },
      { value: 'commence', label: 'Je commence mes démarches' },
      { value: 'devis', label: 'J"ai déjà fait des devis' },
    ],
  },
  {
    id: 'code postal',
    label: 'Quel est le code postal de votre maison ?',
    type: QuestionType.TEXT,
    validate: (value) => /^(([0-9]{2}|2A|2B)[0-9]{3})$/.test(value as string),
    error: 'Code postal invalide.',
    placeholder: '75015',
  },
  {
    id: 'année',
    label: 'Année de construction',
    type: QuestionType.RADIO,
    options: [
      { value: 'very old', label: 'Avant 1950' },
      { value: 'old', label: 'Entre 1950 et 1970' },
      { value: 'recent', label: 'Entre 1970 et 2000' },
      { value: 'very recent', label: 'Apres 2000' },
    ],
  },
  {
    id: 'exterieur',
    label: "Disposez-vous d'un extérieur ?",
    type: QuestionType.YESNO,
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
  },
];

export default questions;
