import { UNKNOWN } from '../../components/Form/YesNo';
import { ClickableAnswer } from '../../components/Recap/index.styles';
import QuestionGroupId from '../../types/enum/QuestionGroupId';
import QuestionId from '../../types/enum/QuestionId';
import QuestionType from '../../types/enum/questionType';
import { QuestionGroup } from '../../types/questionGroup';

const house: QuestionGroup[] = [
  {
    id: QuestionGroupId.HOUSE,
    label: 'Ma maison',
    questions: [
      {
        id: QuestionId.CODE_POSTAL,
        label: 'Quel est le code postal de votre maison ?',
        context: {
          title: 'Pourquoi cette question ?',
          description: (
            <>
              <p>
                Le fonctionnement d’une pompe a chaleur est impacté par
                l’altitude et les témpérature trop rigoureuses. En répondant à
                cette question, nous prennons en compte la situation de votre
                maison.
              </p>
              <p>
                Cette information nous permettra également de vous orienter vers
                les conseillers du réseaux France Rénov’ les plus proche de
                votre domicile.
              </p>
            </>
          ),
        },
        type: QuestionType.TEXT,
        validate: (value) =>
          /^(([0-9]{2}|2A|2B)[0-9]{3})$/.test(value as string),
        error: 'Code postal invalide.',
        placeholder: '75015',
        recap: (value, onClick, externalLink) => (
          <>
            J&lsquo;habite dans le{' '}
            <ClickableAnswer onClick={onClick} externalLink={externalLink}>
              {value}
            </ClickableAnswer>
          </>
        ),
      },
      {
        id: QuestionId.CONSTRUCTION,
        label: 'Votre maison a été construite ...',
        context: {
          title: 'Pourquoi cette question ?',
          description:
            'Les normes liées à l’isolation ont évoluées dans le temps pour devenir de plus en plus performante. Connaitre la période de construction nous permet de faire une première évaluation de la performance énergétiques de votre maison. Les prochaines questions nous permettrons d’affiner cette évaluation pour obtenir un résultats personnalisé.',
        },
        type: QuestionType.RADIO,
        options: [
          {
            value: 'very old',
            label: 'Avant 1948',
            recap: (onClick, externalLink) => (
              <>
                Ma maison a été construite{' '}
                <ClickableAnswer onClick={onClick} externalLink={externalLink}>
                  avant 1948
                </ClickableAnswer>
              </>
            ),
          },
          {
            value: 'old',
            label: 'Entre 1948 et 1974',
            recap: (onClick, externalLink) => (
              <>
                Ma maison a été construite{' '}
                <ClickableAnswer onClick={onClick} externalLink={externalLink}>
                  entre 1948 et 1974
                </ClickableAnswer>
              </>
            ),
          },
          {
            value: 'recent',
            label: 'Entre 1975 et 2000',
            recap: (onClick, externalLink) => (
              <>
                Ma maison a été construite{' '}
                <ClickableAnswer onClick={onClick} externalLink={externalLink}>
                  entre 1975 et 2000
                </ClickableAnswer>
              </>
            ),
          },
          {
            value: 'very recent',
            label: 'Après 2000',
            recap: (onClick, externalLink) => (
              <>
                Ma maison a été construite{' '}
                <ClickableAnswer onClick={onClick} externalLink={externalLink}>
                  après 2000
                </ClickableAnswer>
              </>
            ),
          },
        ],
      },
      {
        disabled: true,
        id: QuestionId.EXTERIEUR,
        label: "Disposez-vous d'un extérieur ?",
        type: QuestionType.YESNO,
        recap: (value: boolean, onClick, externalLink) => (
          <>
            Je{' '}
            <ClickableAnswer onClick={onClick} externalLink={externalLink}>
              {value ? 'dispose' : 'ne dispose pas'}
            </ClickableAnswer>{' '}
            d&lsquo;un extérieur
          </>
        ),
      },
      {
        disabled: true,
        id: QuestionId.SURFACE,
        label: 'Surface habitable de votre maison (m²)',
        type: QuestionType.NUMBER,
        validate: (value) => {
          const surface = parseInt(value as string, 10);
          return !Number.isNaN(surface) && surface > 0;
        },
        error: 'Surface invalide.',
        step: 1,
        recap: (value: string, onClick, externalLink) => (
          <>
            Ma maison fait{' '}
            <ClickableAnswer onClick={onClick} externalLink={externalLink}>
              {value}
            </ClickableAnswer>
            m²
          </>
        ),
      },
      {
        disabled: true,
        id: QuestionId.ETAGE,
        label: "Nombre d'étage habités ?",
        type: QuestionType.RADIO,
        options: [
          {
            value: '1',
            label: '1',
            recap: (onClick, externalLink) => (
              <>
                j&lsquo;habite{' '}
                <ClickableAnswer onClick={onClick} externalLink={externalLink}>
                  1 étage
                </ClickableAnswer>
              </>
            ),
          },
          {
            value: '2',
            label: '2',
            recap: (onClick, externalLink) => (
              <>
                j&lsquo;habite{' '}
                <ClickableAnswer onClick={onClick} externalLink={externalLink}>
                  2 étages
                </ClickableAnswer>
              </>
            ),
          },
          {
            value: '3',
            label: '3',
            recap: (onClick, externalLink) => (
              <>
                j&lsquo;habite{' '}
                <ClickableAnswer onClick={onClick} externalLink={externalLink}>
                  3 étages
                </ClickableAnswer>
              </>
            ),
          },
          {
            value: '4',
            label: '4+',
            recap: (onClick, externalLink) => (
              <>
                j&lsquo;habite{' '}
                <ClickableAnswer onClick={onClick} externalLink={externalLink}>
                  au moins 4 étages
                </ClickableAnswer>
              </>
            ),
          },
        ],
      },
    ],
  },
  {
    id: QuestionGroupId.ISOLATION,
    label: 'Mon isolation',
    questions: [
      {
        id: QuestionId.MUR_ISOLES,
        label: 'Vos murs sont-ils isolés ?',
        context: {
          title: 'Comment répondre à cette question ?',
          description:
            'Cette information peut être indiqué dans le DPE. En cas de doute, indiquez “je ne sais”. L’évaluation se basera sur l’année de construction de votre maison.',
        },
        type: QuestionType.YESNOUNKNOWN,
        recap: (value: string, onClick, externalLink) => {
          if (value === UNKNOWN) {
            return (
              <>
                <ClickableAnswer onClick={onClick} externalLink={externalLink}>
                  Je ne sais pas
                </ClickableAnswer>{' '}
                si mes murs sont isolés
              </>
            );
          }
          return (
            <>
              Mes murs{' '}
              <ClickableAnswer onClick={onClick} externalLink={externalLink}>
                {value === 'true' ? 'sont' : 'ne sont pas'}
              </ClickableAnswer>{' '}
              isolés
            </>
          );
        },
      },
      {
        id: QuestionId.COMBLES_AMENAGES,
        label: 'Vos combles sont-ils aménagés ?',
        context: {
          title: 'Comment répondre à cette question ?',
          description:
            'Les combles sont l’espace situés sous la charpente d’une habitation. On dit qu’il sont “aménagés” lorsque cet espace est utilisé comme une pièce chauffée et habitée de la maison. Par exemple, un grenier utilisé pour le stockage, n’est pas un comble aménage.',
        },
        type: QuestionType.YESNO,
        recap: (value, onClick, externalLink) => (
          <>
            Mes combles{' '}
            <ClickableAnswer onClick={onClick} externalLink={externalLink}>
              {value ? 'sont' : 'ne sont pas'}
            </ClickableAnswer>{' '}
            aménagés
          </>
        ),
      },
      {
        id: QuestionId.TOITURE_ISOLE,
        label: 'Votre toiture est-elle isolée ?',
        context: {
          title: 'Comment répondre à cette question ?',
          description: (
            <>
              <p>
                Cette information peut être indiqué dans le DPE. En cas de
                doute, indiquez “non”.
              </p>
              <p>
                Le saviez-vous ? Une toiture non isolée peut représenter jusque
                30% des déperditions énergétiques d’un logement.
              </p>
            </>
          ),
        },
        type: QuestionType.YESNOUNKNOWN,
        dependsOn: [{ id: QuestionId.COMBLES_AMENAGES, value: 'true' }],
        recap: (value: string, onClick, externalLink) => {
          if (value === UNKNOWN) {
            return (
              <>
                <ClickableAnswer onClick={onClick} externalLink={externalLink}>
                  Je ne sais pas
                </ClickableAnswer>{' '}
                si ma toiture est isolée
              </>
            );
          }
          return (
            <>
              Ma toiture{' '}
              <ClickableAnswer onClick={onClick} externalLink={externalLink}>
                {value === 'true' ? 'est' : "n'est pas"}
              </ClickableAnswer>{' '}
              isolée
            </>
          );
        },
      },
      {
        id: QuestionId.COMBLES_ISOLES,
        label: 'Vos combles sont-ils isolés ?',
        context: {
          title: 'Comment répondre à cette question ?',
          description: (
            <>
              <p>
                Cette information peut être indiqué dans le DPE. En cas de
                doute, indiquez “non”.
              </p>
              <p>
                Le saviez-vous ? Une toiture non isolée peut représenter jusque
                30% des déperditions énergétiques d’un logement.
              </p>
            </>
          ),
        },
        type: QuestionType.YESNOUNKNOWN,
        dependsOn: [{ id: QuestionId.COMBLES_AMENAGES, value: 'false' }],
        recap: (value: string, onClick, externalLink) => {
          if (value === UNKNOWN) {
            return (
              <>
                <ClickableAnswer onClick={onClick} externalLink={externalLink}>
                  Je ne sais pas
                </ClickableAnswer>{' '}
                si mes combles sont isolés
              </>
            );
          }
          return (
            <>
              Mes combles{' '}
              <ClickableAnswer onClick={onClick} externalLink={externalLink}>
                {value === 'true' ? 'sont' : 'ne sont pas'}
              </ClickableAnswer>{' '}
              isolés
            </>
          );
        },
      },
      {
        id: QuestionId.CAVE,
        label:
          'Votre maison est-elle construite sur une cave, un garage ou un vide sanitaire ?',
        context: {
          title: 'Comment répondre à cette question ?',
          description:
            "Le vide sanitaire est l'espace situé entre le sol et le plancher bas de votre logement. Il sert de zone “tampon” entre la maison et le terrain sur laquelle elle est construite. Un vide sanitaire est compris entre 20 cm et 1.80m de hauteur. Si la maison n’est pas construire sur une cave, un garage ou un vide sanitaire, on parle de maison construite “sur terre-plein” ou pilotis.",
        },
        type: QuestionType.YESNOUNKNOWN,
        recap: (value: string, onClick, externalLink) => {
          if (value === UNKNOWN) {
            return (
              <>
                <ClickableAnswer onClick={onClick} externalLink={externalLink}>
                  Je ne sais pas
                </ClickableAnswer>{' '}
                si ma maison est construite sur une cave, un garage ou un vide
                sanitaire
              </>
            );
          }
          return (
            <>
              Ma maison{' '}
              <ClickableAnswer onClick={onClick} externalLink={externalLink}>
                {value === 'true' ? 'est' : "n'est pas"}
              </ClickableAnswer>{' '}
              construite sur une cave, un garage ou un vide sanitaire
            </>
          );
        },
      },
      {
        id: QuestionId.PLANCHER_BAS_ISOLE,
        label:
          "Le plancher au dessus de la cave, du garage ou d'une vide sanitaire est-il isolé ?",
        context: {
          title: 'Comment répondre à cette question ?',
          description: (
            <>
              <p>
                Cette information peut être indiquée dans le DPE. En cas de
                doute, indiquez “non”.
              </p>
              <p>
                Une mauvaise isolation d’un vide sanitaire peut causer une perte
                de 7 à 10% de la chaleur d’une maison.
              </p>
            </>
          ),
        },
        type: QuestionType.YESNOUNKNOWN,
        dependsOn: [{ id: QuestionId.CAVE, value: 'true' }],
        recap: (value: string, onClick, externalLink) => {
          if (value === UNKNOWN) {
            return (
              <>
                <ClickableAnswer onClick={onClick} externalLink={externalLink}>
                  Je ne sais pas
                </ClickableAnswer>{' '}
                si mon plancher est isolé
              </>
            );
          }
          return (
            <>
              Mon plancher{' '}
              <ClickableAnswer onClick={onClick} externalLink={externalLink}>
                {value === 'true' ? 'est' : "n'est pas"}
              </ClickableAnswer>{' '}
              isolé
            </>
          );
        },
      },
      {
        id: QuestionId.MENUISERIES_DOUBLE_VITRAGE,
        label: 'Vos fenêtres sont-elles en double vitrage ?',
        context: {
          title: 'Comment répondre à cette question ?',
          description:
            'Si votre maison comporte un mixte des deux, répondez “non”.',
        },
        type: QuestionType.YESNOUNKNOWN,
        recap: (value: string, onClick, externalLink) => {
          if (value === UNKNOWN) {
            return (
              <>
                <ClickableAnswer onClick={onClick} externalLink={externalLink}>
                  Je ne sais pas
                </ClickableAnswer>{' '}
                si mes fenêtres sont en double vitrage
              </>
            );
          }
          return (
            <>
              Mes fenêtres{' '}
              <ClickableAnswer onClick={onClick} externalLink={externalLink}>
                {value === 'true' ? 'sont' : 'ne sont pas'}
              </ClickableAnswer>{' '}
              en double vitrage
            </>
          );
        },
      },
      {
        id: QuestionId.MENUISERIES_RECENT,
        label: 'Vos fenêtres ont-elles moins de 15 ans ?',
        context: {
          title: 'Le saviez vous ?',
          description:
            'La performance énergétique des fenêtre au delà de 15 n’est pas optimale.',
        },
        type: QuestionType.YESNOUNKNOWN,
        recap: (value: string, onClick, externalLink) => {
          if (value === UNKNOWN) {
            return (
              <>
                <ClickableAnswer onClick={onClick} externalLink={externalLink}>
                  Je ne connais pas
                </ClickableAnswer>{' '}
                l&lsquo;age de mes fenêtres
              </>
            );
          }
          return (
            <>
              Mes fenêtres ont{' '}
              <ClickableAnswer onClick={onClick} externalLink={externalLink}>
                {value === 'true' ? 'moins' : 'plus'} de 15 ans
              </ClickableAnswer>
            </>
          );
        },
      },
    ],
  },
  {
    id: QuestionGroupId.EQUIPMENTS,
    label: 'Mes équipements',
    questions: [
      {
        id: QuestionId.VMC,
        label: "Disposez-vous d'une ventilation mécanique (VMC) ?",
        context: {
          title: 'Le saviez vous ?',
          description:
            'Bien ventiler est logement est essentiel pour maintenir une bonne qualité d’air et assurer le confort des habitants. Une ventilation mécanique contrôlée (VMC) est un équipement qui renouvelle l’air de votre logement.',
        },
        type: QuestionType.YESNOUNKNOWN,
        recap: (value: string, onClick, externalLink) => {
          if (value === UNKNOWN) {
            return (
              <>
                <ClickableAnswer onClick={onClick} externalLink={externalLink}>
                  Je ne sais pas
                </ClickableAnswer>{' '}
                si je dispose d&lsquo;une ventilation mécanique
              </>
            );
          }
          return (
            <>
              <ClickableAnswer onClick={onClick} externalLink={externalLink}>
                {value === 'true' ? "J'ai une" : "Je n'ai pas de"}
              </ClickableAnswer>{' '}
              ventilation mécanique
            </>
          );
        },
      },
      {
        id: QuestionId.CHAUFFAGE_PRINCIPAL,
        label: 'Quel est votre système de chauffage principal ?',
        type: QuestionType.RADIO,
        options: [
          {
            label: 'Chaudière gaz',
            value: 'chaudiere gaz',
            recap: (onClick, externalLink) => (
              <>
                Je me chauffe avec une{' '}
                <ClickableAnswer onClick={onClick} externalLink={externalLink}>
                  chaudière à gaz
                </ClickableAnswer>
              </>
            ),
          },
          {
            label: 'Chaudière fioul',
            value: 'chaudiere fioul',
            recap: (onClick, externalLink) => (
              <>
                Je me chauffe avec une{' '}
                <ClickableAnswer onClick={onClick} externalLink={externalLink}>
                  chaudière à fioul
                </ClickableAnswer>
              </>
            ),
          },
          {
            label: 'Electrique',
            value: 'electrique',
            recap: (onClick, externalLink) => (
              <>
                Je me chauffe à{' '}
                <ClickableAnswer onClick={onClick} externalLink={externalLink}>
                  l&lsquo;éléctricité
                </ClickableAnswer>
              </>
            ),
          },
          {
            label: 'Bois - poêle - insert',
            value: 'bois poele insert',
            recap: (onClick, externalLink) => (
              <>
                Je me chauffe au{' '}
                <ClickableAnswer onClick={onClick} externalLink={externalLink}>
                  bois poêle insert
                </ClickableAnswer>
              </>
            ),
          },
          {
            label: 'Bois - Chaudière',
            value: 'chaudiere bois',
            recap: (onClick, externalLink) => (
              <>
                Je me chauffe avec une{' '}
                <ClickableAnswer onClick={onClick} externalLink={externalLink}>
                  chaudière à bois
                </ClickableAnswer>
              </>
            ),
          },
          {
            label: 'Autre',
            value: 'autre',
            recap: (onClick, externalLink) => (
              <>
                Je me chauffe avec{' '}
                <ClickableAnswer onClick={onClick} externalLink={externalLink}>
                  un autre type de chauffage
                </ClickableAnswer>
              </>
            ),
          },
        ],
      },
      {
        disabled: true,
        id: QuestionId.CHAUFFAGE_AGE,
        label: 'Votre système de chauffage a été installé il y a ...',
        type: QuestionType.RADIO,
        options: [
          {
            label: '- de 10 ans',
            value: 'recent',
            recap: (onClick, externalLink) => (
              <>
                Mon chauffage à{' '}
                <ClickableAnswer onClick={onClick} externalLink={externalLink}>
                  moins de 10 ans
                </ClickableAnswer>
              </>
            ),
          },
          {
            label: '+ de 10 ans',
            value: 'old',
            recap: (onClick, externalLink) => (
              <>
                Mon chauffage à{' '}
                <ClickableAnswer onClick={onClick} externalLink={externalLink}>
                  plus de 10 ans
                </ClickableAnswer>
              </>
            ),
          },
          {
            label: 'Je ne sais pas',
            value: 'unknown',
            recap: (onClick, externalLink) => (
              <>
                <ClickableAnswer onClick={onClick} externalLink={externalLink}>
                  Je ne connais pas
                </ClickableAnswer>{' '}
                l&lsquo;age de mon chauffage
              </>
            ),
          },
        ],
      },
      {
        id: QuestionId.EMETTEURS,
        label: 'Quel sont vos émetteurs de chauffage ?',
        context: {
          title: 'Le saviez vous ?',
          description:
            "Un émetteur de chauffage est l’appareil ou la surface qui diffuse la chaleur produite par un système de chauffage dans les pièces d'un logement. Dans les maison équipées d’une chaudière au fioul, au gaz ou à bois, les émetteurs sont des radiateurs muraux à eau chaude ou un système de plancher chauffant.",
        },
        dependsOn: [
          {
            id: QuestionId.CHAUFFAGE_PRINCIPAL,
            values: ['chaudiere gaz', 'chaudiere fioul', 'chaudiere bois'],
          },
        ],
        type: QuestionType.CHECKBOX,
        recap: (values: string[], onClick, externalLink) => (
          <>
            Je me chauffe avec{' '}
            <ClickableAnswer onClick={onClick} externalLink={externalLink}>
              {values.join(', ')}
            </ClickableAnswer>
          </>
        ),
        options: [
          {
            label: 'Radiateur mureaux',
            value: 'radiateur mureaux',
            recap: 'des radiateurs mureaux',
          },
          {
            label: 'Plancher chauffant',
            value: 'plancher chauffant',
            recap: 'un plancher chauffant',
          },
          {
            label: 'Autres',
            value: 'autres',
            recap: 'un autre mode de chauffage',
          },
        ],
      },
    ],
  },
];

export default house;
