import { UNKNOWN } from '../../components/Form/YesNo';
import { ClickableAnswer } from '../../components/Recap/index.styles';
import QuestionGroupId from '../../types/enum/QuestionGroupId';
import QuestionId from '../../types/enum/QuestionId';
import QuestionType from '../../types/enum/questionType';
import { QuestionGroup } from '../../types/questionGroup';

const motivations: QuestionGroup = {
  id: QuestionGroupId.MOTIVATIONS,
  label: 'Vos motivations',
  questions: [
    {
      disabled: true,
      id: QuestionId.PROJET,
      label: 'Vous avez des projets de travaux ?',
      type: QuestionType.RADIO,
      options: [
        {
          value: 'pac',
          label: 'Installer une PAC',
          recap: (onClick, externalLink) => (
            <>
              Je veux{' '}
              <ClickableAnswer onClick={onClick} externalLink={externalLink}>
                installer une PAC
              </ClickableAnswer>
            </>
          ),
        },
        {
          value: 'inconnu',
          label: 'Je ne sais pas',
          recap: () => "Je n'ai pas de projet précis",
        },
      ],
    },
    {
      id: QuestionId.OBJECTIF,
      label: 'Pourquoi souhaitez-vous installer une pompe à chaleur ?',
      type: QuestionType.CHECKBOX,
      validate: (values) => values.length > 0,
      error: 'Vous devez choisir au moins une option.',
      options: [
        {
          value: 'factures',
          label: 'Pour réduire mes factures',
          recap: 'réduire mes factures',
        },
        {
          value: 'confort',
          label: 'Pour améliorer mon confort été / hiver',
          recap: 'améliorer mon confort été / hiver',
        },
        {
          value: 'co2',
          label: 'Pour réduire mes émissions de CO2',
          recap: 'réduire mes émissions de CO2',
        },
        {
          value: 'appareil',
          label: 'Je veux remplacer un appareil défectueux ou en fin de vie',
          recap: 'changer un appareil défectueux (cf. chaudière)',
        },
        {
          value: UNKNOWN,
          label: 'Je ne sais pas',
          recap: '',
        },
      ],
      recap: (values: string[], onClick, externalLink) =>
        values.includes(UNKNOWN) ? (
          <ClickableAnswer onClick={onClick} externalLink={externalLink}>
            Je n&lsquo;ai pas d&lsquo;objectif principal pour
            l&lsquo;installation d&lsquo;une PAC.
          </ClickableAnswer>
        ) : (
          <>
            je veux{' '}
            <ClickableAnswer onClick={onClick} externalLink={externalLink}>
              {values.join(', ')}
            </ClickableAnswer>
          </>
        ),
    },
    {
      disabled: true,
      id: QuestionId.AVANCEMENT,
      label: 'Où en êtes vous de ce projet ?',
      type: QuestionType.RADIO,
      options: [
        {
          value: 'renseigne',
          label: 'Je me renseigne',
          recap: (onClick, externalLink) => (
            <>
              Je{' '}
              <ClickableAnswer onClick={onClick} externalLink={externalLink}>
                me renseigne
              </ClickableAnswer>{' '}
              pour ce projet
            </>
          ),
        },
        {
          value: 'commence',
          label: 'Je commence mes démarches',
          recap: (onClick, externalLink) => (
            <>
              J&lsquo;ai{' '}
              <ClickableAnswer onClick={onClick} externalLink={externalLink}>
                commencer mes démarches
              </ClickableAnswer>
            </>
          ),
        },
        {
          value: 'devis',
          label: "J'ai déjà fait des devis",
          recap: (onClick, externalLink) => (
            <>
              J&lsquo;ai{' '}
              <ClickableAnswer onClick={onClick} externalLink={externalLink}>
                déjà fait des devis
              </ClickableAnswer>
            </>
          ),
        },
      ],
    },
  ],
};

export default motivations;
