import { Answers } from '../../../types/answer';
import QuestionId from '../../../types/enum/QuestionId';
import { Explanation } from '../../../types/result';
import { explanationData } from './explanation.data';

const isOld = (answers: Answers) =>
  answers[QuestionId.CONSTRUCTION] !== 'very recent';

const computeMur = (answers: Answers): Explanation => {
  const isolation = answers[QuestionId.MUR_ISOLES] as string;
  const old = isOld(answers);

  if (isolation === 'false') {
    return explanationData.mur['Cas 1 - Murs non isolés'];
  }
  if (isolation === 'true') {
    return old
      ? explanationData.mur['Cas 3 - Murs anciens isolés']
      : explanationData.mur['Cas 4 - Murs récents isolés'];
  }

  return explanationData.mur['Cas 5 - Ne sait pas'];
};

const computePlancherHaut = (answers: Answers): Explanation => {
  const combles = answers[QuestionId.COMBLES_AMENAGES];
  const isolated =
    combles === 'true'
      ? answers[QuestionId.COMBLES_ISOLES]
      : answers[QuestionId.TOITURE_ISOLE];
  const old = isOld(answers);

  if (isolated === 'false') {
    return explanationData.plancherHaut[
      'Cas 1 - Combles non isolés (ancien/récent)'
    ];
  }
  if (isolated === 'true') {
    return old
      ? explanationData.plancherHaut['Cas 3 - Combles anciennes isolés']
      : explanationData.plancherHaut['Cas 4 - Combles récentes isolés'];
  }

  return explanationData.plancherHaut['Cas 5 - Ne sait pas'];
};

const computePlancherBas = (answers: Answers): Explanation => {
  const cave = answers[QuestionId.CAVE];
  if (cave === 'true') {
    const isolated = answers[QuestionId.PLANCHER_BAS_ISOLE];
    const old = isOld(answers);
    if (isolated === 'false') {
      return explanationData.plancherBas['Cas 1 - Plancher bas non isolé'];
    }

    if (isolated === 'true') {
      return old
        ? explanationData.plancherBas['Cas 3 - Plancher bas isolé']
        : explanationData.plancherBas['Cas 1 - Plancher bas récent isolé'];
    }
  }

  return explanationData.plancherBas['Cas 5 - Ne sait pas'];
};

export const computeMenuiserie = (answers: Answers): Explanation => {
  const menuiserie = answers[QuestionId.MENUISERIES_DOUBLE_VITRAGE];
  if (menuiserie === 'fase') {
    return explanationData.menuiserie['Cas 1 - Simple vitrage'];
  }

  if (menuiserie === 'true') {
    const old = answers[QuestionId.MENUISERIES_RECENT];
    return old
      ? explanationData.menuiserie['Cas 2 - Double vitrage ancien']
      : explanationData.menuiserie['Cas 3 - DV récent ou TV'];
  }

  return explanationData.menuiserie['Cas 4 - Ne sait pas'];
};

export const computeVMC = (answers: Answers): Explanation => {
  const vmc = answers[QuestionId.VMC];
  if (vmc === 'false') {
    return explanationData.ventilation['Cas 1 - Naturelle'];
  }
  if (vmc === 'true') {
    return explanationData.ventilation['Cas 2 - Mécanique'];
  }

  return explanationData.ventilation['Cas 3 - Ne sait pas'];
};

export const computeEmetteurs = (answers: Answers): Explanation => {
  const chauffage = answers[QuestionId.CHAUFFAGE_PRINCIPAL];
  const emetteurs = answers[QuestionId.EMETTEURS];
  if (chauffage === 'electrique') {
    return explanationData.emetteurs['Cas 1 - Radiateurs éléctrique'];
  }

  if (
    (chauffage === 'chaudiere gaz' || chauffage === 'chaudiere fioul') &&
    emetteurs === 'plancher chauffant'
  ) {
    return explanationData.emetteurs['Cas 3 - Plancher chauffant à eau'];
  }
  if (
    (chauffage === 'chaudiere gaz' ||
      chauffage === 'chaudiere fioul' ||
      chauffage === 'chaudiere bois') &&
    emetteurs === 'radiateurs muraux'
  ) {
    return explanationData.emetteurs[
      'Cas 4 - Radiateur à eau haute température'
    ];
  }
  return explanationData.emetteurs['Cas 5 : autres/ bois'];
};

export const computeExplanations = (answers: Answers): Explanation[] => [
  computeMur(answers),
  computePlancherHaut(answers),
  computePlancherBas(answers),
  computeMenuiserie(answers),
  computeVMC(answers),
  computeEmetteurs(answers),
];
