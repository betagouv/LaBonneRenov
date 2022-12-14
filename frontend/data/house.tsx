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
      label: 'Votre maison a été construite ...',
      type: QuestionType.RADIO,
      options: [
        {
          value: 'very old',
          label: 'Avant 1948',
          recap: (
            <>
              Ma maison a été construite <b>avant 1948</b>
            </>
          ),
        },
        {
          value: 'old',
          label: 'Entre 1948 et 1974',
          recap: (
            <>
              Ma maison a été construite <b>entre 1948 et 1974</b>
            </>
          ),
        },
        {
          value: 'recent',
          label: 'Entre 1975 et 2000',
          recap: (
            <>
              Ma maison a été construite <b>entre 1975 et 2000</b>
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
      disabled: true,
      id: 'exterieur',
      label: "Disposez-vous d'un extérieur ?",
      type: QuestionType.YESNO,
      recap: (value: boolean) => (
        <>
          Je <b>{value ? 'dispose' : 'ne dispose pas'}</b> d&lsquo;un extérieur
        </>
      ),
    },
    {
      disabled: true,
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
      disabled: true,
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
        {
          value: 'unknow',
          label: 'Je ne sais pas',
          recap: (
            <>
              <b>Je ne sais pas</b> quand mes murs ont été isolés
            </>
          ),
        },
      ],
    },
    {
      id: 'combles amenages',
      label: 'Vos combles sont-ils aménagés ?',
      type: QuestionType.YESNO,
      recap: (value) => (
        <>
          Mes combles <b>{value ? 'sont' : 'ne sont pas'}</b>aménagés
        </>
      ),
    },
    {
      id: 'toiture',
      label: 'Votre toiture est-elle isolée ?',
      type: QuestionType.YESNOUNKNOWN,
      dependsOn: [{ id: 'combles amenages', value: 'true' }],
      recap: (value: string) => {
        if (value === 'unknwon') {
          return (
            <>
              <b>Je ne sais pas</b> si ma toiture est isolée
            </>
          );
        }
        return (
          <>
            Ma toiture <b>{value === 'true' ? 'est' : "n'est pas"}</b> isolée
          </>
        );
      },
    },
    {
      id: 'combles',
      label: 'Vos combles perdus sont-ils isolés ?',
      type: QuestionType.YESNOUNKNOWN,
      dependsOn: [{ id: 'combles amenages', value: 'false' }],
      recap: (value: string) => {
        if (value === 'unknwon') {
          return (
            <>
              <b>Je ne sais pas</b> si mes combles perdus sont isolés
            </>
          );
        }
        return (
          <>
            Mes combles perdus{' '}
            <b>{value === 'true' ? 'sont' : 'ne sont pas'}</b> isolés
          </>
        );
      },
    },
    {
      id: 'cave',
      label:
        'Votre maison est-elle construite sur une cave ou un vide sanitaire ?',
      type: QuestionType.YESNOUNKNOWN,
      recap: (value: string) => {
        if (value === 'unknwon') {
          return (
            <>
              <b>Je ne sais pas</b> si ma maison est construite sur une cave ou
              un vide sanitaire
            </>
          );
        }
        return (
          <>
            Ma maison <b>{value === 'true' ? 'est' : "n'est pas"}</b> construite
            sur une cave ou un vide sanitaire
          </>
        );
      },
    },
    {
      id: 'plancher bas',
      label:
        "Le plancher au dessus de la cave ou d'une vide sanitaire est-il isolé ?",
      type: QuestionType.YESNOUNKNOWN,
      dependsOn: [{ id: 'cave', value: 'true' }],
      recap: (value: string) => {
        if (value === 'unknwon') {
          return (
            <>
              <b>Je ne sais pas</b> si mon plancher est isolé
            </>
          );
        }
        return (
          <>
            Mon plancher <b>{value === 'true' ? 'est' : "n'est pas"}</b> isolé
          </>
        );
      },
    },
    {
      id: 'menuiseries',
      label: 'Vos menuiseries sont-elle en double vitrage ?',
      type: QuestionType.YESNOUNKNOWN,
      recap: (value: string) => {
        if (value === 'unknwon') {
          return (
            <>
              <b>Je ne sais pas</b> si mes menuiseries sont en double vitrage
            </>
          );
        }
        return (
          <>
            Mes menuiseries <b>{value === 'true' ? 'sont' : 'ne sont pas'}</b>{' '}
            en double vitrage
          </>
        );
      },
    },
    {
      id: 'menuiseries age',
      label: 'Vos menuiseries ont-elles moins de 10 ans ?',
      type: QuestionType.YESNOUNKNOWN,
      recap: (value: string) => {
        if (value === 'unknwon') {
          return (
            <>
              <b>Je ne connais pas</b> l&lsquo;age de mes menuiseries
            </>
          );
        }
        return (
          <>
            Mes menuiseries ont{' '}
            <b>{value === 'true' ? 'moins' : 'plus'} de 10 ans</b>
          </>
        );
      },
    },
    {
      id: 'ventilation',
      label: "Disposez-vous d'une ventilation mécanique (VMC) ?",
      type: QuestionType.YESNOUNKNOWN,
      recap: (value: string) => {
        if (value === 'unknwon') {
          return (
            <>
              <b>Je ne sais pas</b> si je dispose d&lsquo;une ventilation
              mécanique
            </>
          );
        }
        return (
          <>
            <b>{value === 'true' ? "J'ai une" : "Je n'ai pas de"}</b>{' '}
            ventilation mécanique
          </>
        );
      },
    },
    {
      id: 'chauffage',
      label: 'Quel est votre système de chauffage principal ?',
      type: QuestionType.RADIO,
      options: [
        {
          label: 'Chaudière gaz',
          value: 'chaudiere gaz',
          recap: (
            <>
              Je me chauffe avec une <b>chaudière à gaz</b>
            </>
          ),
        },
        {
          label: 'Chaudière fioul',
          value: 'chaudiere fioul',
          recap: (
            <>
              Je me chauffe avec une <b>chaudière à fioul</b>
            </>
          ),
        },
        {
          label: 'Electrique',
          value: 'electrique',
          recap: (
            <>
              Je me chauffe à <b>l&lsquo;éléctricité</b>
            </>
          ),
        },
        {
          label: 'Bois - poêle - insert',
          value: 'bois poele insert',
          recap: (
            <>
              Je me chauffe au <b>bois poêle insert</b>
            </>
          ),
        },
        {
          label: 'Bois - Chaudière',
          value: 'chaudiere bois',
          recap: (
            <>
              Je me chauffe avec une <b>chaudière à bois</b>
            </>
          ),
        },
        {
          label: 'Autre',
          value: 'autre',
          recap: (
            <>
              Je me chauffe avec <b>un autre type de chauffage</b>
            </>
          ),
        },
      ],
    },
    {
      id: 'chauffage age',
      label: 'Votre système de chauffage a été installé il y a ...',
      type: QuestionType.RADIO,
      options: [
        {
          label: '- de 10 ans',
          value: 'new',
          recap: (
            <>
              Mon chauffage à <b>moins de 10 ans</b>
            </>
          ),
        },
        {
          label: '+ de 10 ans',
          value: 'old',
          recap: (
            <>
              Mon chauffage à <b>plus de 10 ans</b>
            </>
          ),
        },
        {
          label: 'Je ne sais pas',
          value: 'unknown',
          recap: (
            <>
              <b>Je ne connais pas</b> l&lsquo;age de mon chauffage
            </>
          ),
        },
      ],
    },
    {
      id: 'emetteurs',
      label: 'Quel sont vos émetteurs de chauffage ?',
      dependsOn: [
        {
          id: 'chauffage',
          values: ['chaudiere gaz', 'chaudiere fioul', 'chaudiere bois'],
        },
      ],
      type: QuestionType.RADIO,
      options: [
        {
          label: 'Radiateur mureaux',
          value: 'radiateur mureaux',
          recap: (
            <>
              Je me chauffe avec <b>des radiateurs mureaux</b>
            </>
          ),
        },
        {
          label: 'Plancher chauffant',
          value: 'plancher chauffant',
          recap: (
            <>
              Je me chauffe avec <b>un plancher chauffant</b>
            </>
          ),
        },
        {
          label: 'Autres',
          value: 'autres',
          recap: (
            <>
              Je <b>ne connait pas</b>mes émetteurs de chauffage
            </>
          ),
        },
      ],
    },
  ],
};

export default house;
