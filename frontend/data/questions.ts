import QuestionType from '../../types/enum/questionType';
import { Question } from '../../types/question';

const questions: Question[] = [
  {
    id: 'projet',
    label: 'Vous avez des projets de travaux ?',
    type: QuestionType.RADIO,
    options: [
      { value: 'pac', label: 'Installer une PAC' },
      { value: 'unknown', label: 'Je ne sais pas' },
    ],
  },
];

export default questions;
