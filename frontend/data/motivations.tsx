import QuestionType from '../../types/enum/questionType';
import { QuestionGroup } from '../../types/questionGroup';

const motivations: QuestionGroup = {
  label: 'Vos motivations',
  questions: [
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
  ],
};

export default motivations;
