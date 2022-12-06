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
    options: [
      { value: 'factures', label: 'Réduire mes factures' },
      { value: 'confort', label: 'Améliorer mon confort été / hiver' },
      { value: 'co2', label: 'Réduire mes émissions de CO2' },
      {
        value: 'appareil',
        label: 'Changer un appareil défectueux (cf. chaudière)',
      },
    ],
    validate: (values) => values.length > 0,
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
    placeholder: '75015',
    type: QuestionType.TEXT,
    validate: (value) => /^(([0-9]{2}|2A|2B)[0-9]{3})$/.test(value as string),
  },
];

export default questions;
