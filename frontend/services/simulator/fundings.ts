import { Answer, Answers, IsolationResult } from '../../../types/answer';
import MaPrimeRenovCategory from '../../../types/enum/MaPrimeRenovCategory';
import Owner from '../../../types/enum/Owner';
import QuestionId from '../../../types/enum/QuestionId';
import Residence from '../../../types/enum/Residence';
import UserSatus from '../../../types/enum/UserStatus';
import { Help } from '../../../types/help';
import { getValue } from './utils';

export const isInIDF = (answers: Answer[]) => {
  const cp = answers.find((answer) => answer.id === QuestionId.CODE_POSTAL)
    ?.value as string;

  return cp
    ? cp.startsWith('75') ||
        cp.startsWith('91') ||
        cp.startsWith('92') ||
        cp.startsWith('93') ||
        cp.startsWith('94') ||
        cp.startsWith('95')
    : false;
};

export const getPerStepHelps = (
  color: MaPrimeRenovCategory,
  steps: (keyof IsolationResult)[]
) => {
  let result;

  switch (color) {
    case MaPrimeRenovCategory.BLUE:
      result = {
        isolationExterieur:
          '75€ par m² pour l’isolation des mur par l’extérieur dans la limite de 150€/m² ou de 100m²',
        isolationInterieur:
          '25€ par m² pour l’isolation des mur par l’intérieur dans la limite de 70€/m²',
        isolationCombles:
          '25€ par m² pour l’isolation des rampants de toiture / plafond de comble dans la limite de 75€/m²',
        pac: '5 000€ pour l’installation d’une Pompe à Chaleur dans la limite d’un plafond de dépenses de 12 000€',
        menuiseries:
          '100€ par équipement pour le remplacement des menuiseries simple vitrage et fenêtre de toit dans la limite de 1 000€ par équipement',
        vmc: "2 500€ pour l'installation d'une Ventilation mécanique contrôlée (VMC) double flux dans la limite de 6 000€",
      };
      break;
    case MaPrimeRenovCategory.YELLOW:
      result = {
        isolationExterieur:
          '60€ par m² pour l’isolation des mur par l’extérieur dans la limite de 150€/m² ou de 100m²',
        isolationInterieur:
          '20€ par m² pour l’isolation des mur par l’intérieur dans la limite de 70€/m²',
        isolationCombles:
          '20€ par m² pour l’isolation des rampants de toiture / plafond de comble dans la limite de 75€/m²',
        pac: '4 000€ pour l’installation d’une Pompe à Chaleur dans la limite d’un plafond de dépenses de 12 000€',
        menuiseries:
          '80€ par équipement pour le remplacement des menuiseries simple vitrage et fenêtre de toit dans la limite de 1 000€ par équipement',
        vmc: "2 000€ pour l'installation d'une Ventilation mécanique contrôlée (VMC) double flux dans la limite de 6 000€",
      };
      break;
    case MaPrimeRenovCategory.VIOLET:
      result = {
        isolationExterieur:
          '40€ par m² pour l’isolation des mur par l’extérieur dans la limite de 150€/m² ou de 100m²',
        isolationInterieur:
          '15€ par m² pour l’isolation des mur par l’intérieur dans la limite de 70€/m²',
        isolationCombles:
          '15€ par m² pour l’isolation des rampants de toiture / plafond de comble dans la limite de 75€/m²',
        pac: '3 000€ pour l’installation d’une Pompe à Chaleur dans la limite d’un plafond de dépenses de 12 000€',
        menuiseries:
          '40€ par équipement pour le remplacement des menuiseries simple vitrage et fenêtre de toit dans la limite de 1 000€ par équipement',
        vmc: "1 500€ pour l'installation d'une Ventilation mécanique contrôlée (VMC) double flux dans la limite de 6 000€",
      };
      break;
    default:
      result = {
        isolationExterieur:
          '15€ par m² pour l’isolation des mur par l’extérieur dans la limite de 150€/m² ou de 100m²',
        isolationInterieur:
          '7€ par m² pour l’isolation des mur par l’intérieur dans la limite de 70€/m²',
        isolationCombles:
          '7€ par m² pour l’isolation des rampants de toiture / plafond de comble dans la limite de 75€/m²',
        pac: '',
        menuiseries: '',
        vmc: '',
      };
      break;
  }

  const helps = [result.pac];
  if (steps.includes('mur')) {
    helps.push(result.isolationExterieur);
    helps.push(result.isolationInterieur);
  }
  if (steps.includes('plancherHaut')) {
    helps.push(result.isolationCombles);
  }
  if (steps.includes('vmc')) {
    helps.push(result.vmc);
  }
  if (steps.includes('menuiserie')) {
    helps.push(result.menuiseries);
  }
  return helps.filter((help) => help);
};

export const getGlobalHelps = (color: MaPrimeRenovCategory) => {
  switch (color) {
    case MaPrimeRenovCategory.BLUE:
      return [
        'MaPrimeRenov’ Sérénité : 50% du montant des travaux dans la limite de 17 500€',
        'Bonus Sortie de passoire : 1 500€',
        'Bonus Bâtiment Basse Consommation (BBC) : 1 500€',
        'Audit énergétique (hors obligation réglementaire et appartement : 500€',
        'Assistance à maîtrise d’ouvrage : 150€',
      ];
    case MaPrimeRenovCategory.YELLOW:
      return [
        'MaPrimeRenov’ Sérénité : 35% du montant des travaux dans la limite de 12 250€',
        'Bonus Sortie de passoire : 1 500€',
        'Bonus Bâtiment Basse Consommation (BBC) : 1 500€',
        'Audit énergétique (hors obligation réglementaire et appartement : 400€',
        'Assistance à maîtrise d’ouvrage : 150€',
      ];
    case MaPrimeRenovCategory.VIOLET:
      return [
        'MaPrimeRenov’ Rénovation globale : 20% du montant des travaux dans la limite de 10 000€',
        'Bonus Sortie de passoire : 1 000€',
        'Bonus Bâtiment Basse Consommation (BBC) : 1 000€',
        'Audit énergétique (hors obligation réglementaire et appartement : 300€',
        'Assistance à maîtrise d’ouvrage : 150€',
      ];
    default:
      return [
        'MaPrimeRenov’ Rénovation globale : 10% du montant des travaux dans la limite de 5 000€',
        'Bonus Sortie de passoire : 500€',
        'Bonus Bâtiment Basse Consommation (BBC) : 500€',
        'Assistance à maîtrise d’ouvrage : 150€',
      ];
  }
};

export const getFranceRenovScale = (answers: Answer[]) => {
  const nbPersonnes = answers.find(
    (answer) => answer.id === QuestionId.NB_PERSONNES
  )?.value as string;
  let blue = 0;
  let yellow = 0;
  let violet = 0;
  if (isInIDF(answers)) {
    switch (nbPersonnes) {
      case '1':
        blue = 22461;
        yellow = 27343;
        violet = 38184;
        break;
      case '2':
        blue = 32967;
        yellow = 40130;
        violet = 56130;
        break;
      case '3':
        blue = 39591;
        yellow = 48197;
        violet = 67585;
        break;
      case '4':
        blue = 46226;
        yellow = 56277;
        violet = 79041;
        break;
      case '5':
        blue = 52886;
        yellow = 64380;
        violet = 90496;
        break;
      default: {
        const value = Number.parseInt(nbPersonnes, 10);
        blue = 52886 + (value - 5) * 6650;
        yellow = 64380 + (value - 5) * 8097;
        violet = 90496 + (value - 5) * 11445;
      }
    }
  } else {
    switch (nbPersonnes) {
      case '1':
        blue = 16229;
        yellow = 20805;
        violet = 29148;
        break;
      case '2':
        blue = 23734;
        yellow = 30427;
        violet = 42848;
        break;
      case '3':
        blue = 28545;
        yellow = 36591;
        violet = 51592;
        break;
      case '4':
        blue = 33346;
        yellow = 42748;
        violet = 60336;
        break;
      case '5':
        blue = 38168;
        yellow = 48930;
        violet = 69081;
        break;
      default: {
        const value = Number.parseInt(nbPersonnes, 10);
        blue = 38168 + (value - 5) * 4813;
        yellow = 48930 + (value - 5) * 6165;
        violet = 69081 + (value - 5) * 8744;
      }
    }
  }

  return { blue, yellow, violet };
};

const simulator = (arrayAnswers: Answer[]): Help | null => {
  const answers: Answers = {};
  arrayAnswers.forEach((answer) => {
    answers[answer.id] = answer.value;
  });
  const color = getValue(answers, QuestionId.INCOME);
  if (!color) {
    return null;
  }
  const nbPersonnes = getValue(answers, QuestionId.NB_PERSONNES);
  const constructionYear = getValue(answers, QuestionId.CONSTRUCTION_YEAR);
  const owner = getValue(answers, QuestionId.OWNER);
  const status =
    owner === Owner.PROPRIETAIRE
      ? (getValue(answers, QuestionId.SITUATION) as UserSatus)
      : UserSatus.LOCATAIRE;

  let income = '';
  const { blue, yellow, violet } = getFranceRenovScale(arrayAnswers);
  switch (color as MaPrimeRenovCategory) {
    case MaPrimeRenovCategory.BLUE:
      income = `moins de ${blue.toLocaleString()}€`;
      break;
    case MaPrimeRenovCategory.YELLOW:
      income = `entre ${(
        blue + 1
      ).toLocaleString()}€ et ${yellow.toLocaleString()}€`;
      break;
    case MaPrimeRenovCategory.VIOLET:
      income = `entre ${(
        yellow + 1
      ).toLocaleString()}€ et ${violet.toLocaleString()}€`;
      break;
    default:
      income = `supérieur à ${violet.toLocaleString()}€`;
      break;
  }

  return {
    status,
    residence: getValue(answers, QuestionId.RESIDENCE_STATUS) as Residence,
    inIdf: isInIDF(arrayAnswers),
    constructionYear: Number.parseInt(constructionYear as string, 10),
    income,
    color: color as MaPrimeRenovCategory,
    nbPersonnes: Number.parseInt(nbPersonnes as string, 10),
  };
};
export default simulator;
