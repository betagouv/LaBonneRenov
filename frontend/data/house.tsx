import { UNKNOWN } from '../../components/Form/YesNo';
import { ClickableAnswer } from '../../components/Recap/index.styles';
import QuestionId from '../../types/enum/QuestionId';
import QuestionType from '../../types/enum/questionType';
import { QuestionGroup } from '../../types/questionGroup';

const house: QuestionGroup[] = [
  {
    label: 'Ma maison',
    questions: [
      {
        id: QuestionId.CODE_POSTAL,
        label: 'Quel est le code postal de votre maison ?',
        type: QuestionType.TEXT,
        validate: (value) =>
          /^(([0-9]{2}|2A|2B)[0-9]{3})$/.test(value as string),
        error: 'Code postal invalide.',
        placeholder: '75015',
        recap: (value, onClick) => (
          <>
            J&lsquo;habite dans le{' '}
            <ClickableAnswer onClick={onClick}>{value}</ClickableAnswer>
          </>
        ),
      },
      {
        id: QuestionId.CONSTRUCTION,
        label: 'Votre maison a été construite ...',
        type: QuestionType.RADIO,
        options: [
          {
            value: 'very old',
            label: 'Avant 1948',
            recap: (onClick) => (
              <>
                Ma maison a été construite{' '}
                <ClickableAnswer onClick={onClick}>avant 1948</ClickableAnswer>
              </>
            ),
          },
          {
            value: 'old',
            label: 'Entre 1948 et 1974',
            recap: (onClick) => (
              <>
                Ma maison a été construite{' '}
                <ClickableAnswer onClick={onClick}>
                  entre 1948 et 1974
                </ClickableAnswer>
              </>
            ),
          },
          {
            value: 'recent',
            label: 'Entre 1975 et 2000',
            recap: (onClick) => (
              <>
                Ma maison a été construite{' '}
                <ClickableAnswer onClick={onClick}>
                  entre 1975 et 2000
                </ClickableAnswer>
              </>
            ),
          },
          {
            value: 'very recent',
            label: 'Après 2000',
            recap: (onClick) => (
              <>
                Ma maison a été construite{' '}
                <ClickableAnswer onClick={onClick}>après 2000</ClickableAnswer>
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
        recap: (value: boolean, onClick) => (
          <>
            Je{' '}
            <ClickableAnswer onClick={onClick}>
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
        recap: (value: string, onClick) => (
          <>
            Ma maison fait{' '}
            <ClickableAnswer onClick={onClick}>{value}</ClickableAnswer>m²
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
            recap: (onClick) => (
              <>
                j&lsquo;habite{' '}
                <ClickableAnswer onClick={onClick}>1 étage</ClickableAnswer>
              </>
            ),
          },
          {
            value: '2',
            label: '2',
            recap: (onClick) => (
              <>
                j&lsquo;habite{' '}
                <ClickableAnswer onClick={onClick}>2 étages</ClickableAnswer>
              </>
            ),
          },
          {
            value: '3',
            label: '3',
            recap: (onClick) => (
              <>
                j&lsquo;habite{' '}
                <ClickableAnswer onClick={onClick}>3 étages</ClickableAnswer>
              </>
            ),
          },
          {
            value: '4',
            label: '4+',
            recap: (onClick) => (
              <>
                j&lsquo;habite{' '}
                <ClickableAnswer onClick={onClick}>
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
    label: 'Mon isolation',
    questions: [
      {
        id: QuestionId.MUR_ISOLES,
        label: 'Vos murs sont-ils isolés ?',
        type: QuestionType.RADIO,
        options: [
          {
            value: 'no',
            label: "Pas d'isolation du tout",
            recap: (onClick) => (
              <>
                Mes murs{' '}
                <ClickableAnswer onClick={onClick}>
                  ne sont pas isolés
                </ClickableAnswer>
              </>
            ),
          },
          {
            value: 'old',
            label: 'Isolation de + de 20 ans',
            recap: (onClick) => (
              <>
                Mes murs ont été isolés il y a{' '}
                <ClickableAnswer onClick={onClick}>
                  plus de 20 ans
                </ClickableAnswer>
              </>
            ),
          },
          {
            value: 'recent',
            label: 'Isolation de moins de 20 ans',
            recap: (onClick) => (
              <>
                Mes murs ont été isolés il y a{' '}
                <ClickableAnswer onClick={onClick}>
                  moins de 20 ans
                </ClickableAnswer>
              </>
            ),
          },
          {
            value: UNKNOWN,
            label: 'Je ne sais pas',
            recap: (onClick) => (
              <>
                <ClickableAnswer onClick={onClick}>
                  Je ne sais pas
                </ClickableAnswer>{' '}
                quand mes murs ont été isolés
              </>
            ),
          },
        ],
      },
      {
        id: QuestionId.COMBLES_AMENAGES,
        label: 'Vos combles sont-ils aménagés ?',
        type: QuestionType.YESNO,
        recap: (value, onClick) => (
          <>
            Mes combles{' '}
            <ClickableAnswer onClick={onClick}>
              {value ? 'sont' : 'ne sont pas'}
            </ClickableAnswer>{' '}
            aménagés
          </>
        ),
      },
      {
        id: QuestionId.TOITURE_ISOLE,
        label: 'Votre toiture est-elle isolée ?',
        type: QuestionType.YESNOUNKNOWN,
        dependsOn: [{ id: QuestionId.COMBLES_AMENAGES, value: 'true' }],
        recap: (value: string, onClick) => {
          if (value === UNKNOWN) {
            return (
              <>
                <ClickableAnswer onClick={onClick}>
                  Je ne sais pas
                </ClickableAnswer>{' '}
                si ma toiture est isolée
              </>
            );
          }
          return (
            <>
              Ma toiture{' '}
              <ClickableAnswer onClick={onClick}>
                {value === 'true' ? 'est' : "n'est pas"}
              </ClickableAnswer>{' '}
              isolée
            </>
          );
        },
      },
      {
        id: QuestionId.COMBLES_ISOLES,
        label: 'Vos combles perdus sont-ils isolés ?',
        type: QuestionType.YESNOUNKNOWN,
        dependsOn: [{ id: QuestionId.COMBLES_AMENAGES, value: 'false' }],
        recap: (value: string, onClick) => {
          if (value === UNKNOWN) {
            return (
              <>
                <ClickableAnswer onClick={onClick}>
                  Je ne sais pas
                </ClickableAnswer>{' '}
                si mes combles perdus sont isolés
              </>
            );
          }
          return (
            <>
              Mes combles perdus{' '}
              <ClickableAnswer onClick={onClick}>
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
          'Votre maison est-elle construite sur une cave ou un vide sanitaire ?',
        type: QuestionType.YESNOUNKNOWN,
        recap: (value: string, onClick) => {
          if (value === UNKNOWN) {
            return (
              <>
                <ClickableAnswer onClick={onClick}>
                  Je ne sais pas
                </ClickableAnswer>{' '}
                si ma maison est construite sur une cave ou un vide sanitaire
              </>
            );
          }
          return (
            <>
              Ma maison{' '}
              <ClickableAnswer onClick={onClick}>
                {value === 'true' ? 'est' : "n'est pas"}
              </ClickableAnswer>{' '}
              construite sur une cave ou un vide sanitaire
            </>
          );
        },
      },
      {
        id: QuestionId.PLANCHER_BAS_ISOLE,
        label:
          "Le plancher au dessus de la cave ou d'une vide sanitaire est-il isolé ?",
        type: QuestionType.YESNOUNKNOWN,
        dependsOn: [{ id: QuestionId.CAVE, value: 'true' }],
        recap: (value: string, onClick) => {
          if (value === UNKNOWN) {
            return (
              <>
                <ClickableAnswer onClick={onClick}>
                  Je ne sais pas
                </ClickableAnswer>{' '}
                si mon plancher est isolé
              </>
            );
          }
          return (
            <>
              Mon plancher{' '}
              <ClickableAnswer onClick={onClick}>
                {value === 'true' ? 'est' : "n'est pas"}
              </ClickableAnswer>{' '}
              isolé
            </>
          );
        },
      },
      {
        id: QuestionId.MENUISERIES_DOUBLE_VITRAGE,
        label: 'Vos menuiseries sont-elles en double vitrage ?',
        type: QuestionType.YESNOUNKNOWN,
        recap: (value: string, onClick) => {
          if (value === UNKNOWN) {
            return (
              <>
                <ClickableAnswer onClick={onClick}>
                  Je ne sais pas
                </ClickableAnswer>{' '}
                si mes menuiseries sont en double vitrage
              </>
            );
          }
          return (
            <>
              Mes menuiseries{' '}
              <ClickableAnswer onClick={onClick}>
                {value === 'true' ? 'sont' : 'ne sont pas'}
              </ClickableAnswer>{' '}
              en double vitrage
            </>
          );
        },
      },
      {
        id: QuestionId.MENUISERIES_RECENT,
        label: 'Vos menuiseries ont-elles moins de 10 ans ?',
        type: QuestionType.YESNOUNKNOWN,
        recap: (value: string, onClick) => {
          if (value === UNKNOWN) {
            return (
              <>
                <ClickableAnswer onClick={onClick}>
                  Je ne connais pas
                </ClickableAnswer>{' '}
                l&lsquo;age de mes menuiseries
              </>
            );
          }
          return (
            <>
              Mes menuiseries ont{' '}
              <ClickableAnswer onClick={onClick}>
                {value === 'true' ? 'moins' : 'plus'} de 10 ans
              </ClickableAnswer>
            </>
          );
        },
      },
    ],
  },
  {
    label: 'Mes équipements',
    questions: [
      {
        id: QuestionId.VMC,
        label: "Disposez-vous d'une ventilation mécanique (VMC) ?",
        type: QuestionType.YESNOUNKNOWN,
        recap: (value: string, onClick) => {
          if (value === UNKNOWN) {
            return (
              <>
                <ClickableAnswer onClick={onClick}>
                  Je ne sais pas
                </ClickableAnswer>{' '}
                si je dispose d&lsquo;une ventilation mécanique
              </>
            );
          }
          return (
            <>
              <ClickableAnswer onClick={onClick}>
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
            recap: (onClick) => (
              <>
                Je me chauffe avec une{' '}
                <ClickableAnswer onClick={onClick}>
                  chaudière à gaz
                </ClickableAnswer>
              </>
            ),
          },
          {
            label: 'Chaudière fioul',
            value: 'chaudiere fioul',
            recap: (onClick) => (
              <>
                Je me chauffe avec une{' '}
                <ClickableAnswer onClick={onClick}>
                  chaudière à fioul
                </ClickableAnswer>
              </>
            ),
          },
          {
            label: 'Electrique',
            value: 'electrique',
            recap: (onClick) => (
              <>
                Je me chauffe à{' '}
                <ClickableAnswer onClick={onClick}>
                  l&lsquo;éléctricité
                </ClickableAnswer>
              </>
            ),
          },
          {
            label: 'Bois - poêle - insert',
            value: 'bois poele insert',
            recap: (onClick) => (
              <>
                Je me chauffe au{' '}
                <ClickableAnswer onClick={onClick}>
                  bois poêle insert
                </ClickableAnswer>
              </>
            ),
          },
          {
            label: 'Bois - Chaudière',
            value: 'chaudiere bois',
            recap: (onClick) => (
              <>
                Je me chauffe avec une{' '}
                <ClickableAnswer onClick={onClick}>
                  chaudière à bois
                </ClickableAnswer>
              </>
            ),
          },
          {
            label: 'Autre',
            value: 'autre',
            recap: (onClick) => (
              <>
                Je me chauffe avec{' '}
                <ClickableAnswer onClick={onClick}>
                  un autre type de chauffage
                </ClickableAnswer>
              </>
            ),
          },
        ],
      },
      {
        id: QuestionId.CHAUFFAGE_AGE,
        label: 'Votre système de chauffage a été installé il y a ...',
        type: QuestionType.RADIO,
        options: [
          {
            label: '- de 10 ans',
            value: 'recent',
            recap: (onClick) => (
              <>
                Mon chauffage à{' '}
                <ClickableAnswer onClick={onClick}>
                  moins de 10 ans
                </ClickableAnswer>
              </>
            ),
          },
          {
            label: '+ de 10 ans',
            value: 'old',
            recap: (onClick) => (
              <>
                Mon chauffage à{' '}
                <ClickableAnswer onClick={onClick}>
                  plus de 10 ans
                </ClickableAnswer>
              </>
            ),
          },
          {
            label: 'Je ne sais pas',
            value: 'unknown',
            recap: (onClick) => (
              <>
                <ClickableAnswer onClick={onClick}>
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
        dependsOn: [
          {
            id: QuestionId.CHAUFFAGE_PRINCIPAL,
            values: ['chaudiere gaz', 'chaudiere fioul', 'chaudiere bois'],
          },
        ],
        type: QuestionType.CHECKBOX,
        recap: (values: string[], onClick) => (
          <>
            Je me chauffe avec{' '}
            <ClickableAnswer onClick={onClick}>
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
