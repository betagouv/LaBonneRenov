import { UNKNOWN } from '../../../components/Form/YesNo';
import { Answers } from '../../../types/answer';
import QuestionId from '../../../types/enum/QuestionId';
import { getValue } from './utils';

const murRating = (answers: Answers): number => {
  const value = getValue(answers, QuestionId.MUR_ISOLES);
  switch (value) {
    case 'no':
      return 0;
    case 'old':
    case 'recent':
      return 2;
    default:
      throw new Error(`Unknown ${QuestionId.MUR_ISOLES} value: ${value}`);
  }
};

const plancherHautRating = (answers: Answers): number => {
  const combles = getValue(answers, QuestionId.COMBLES_AMENAGES);
  if (combles !== UNKNOWN) {
    const isolated = getValue(
      answers,
      combles === 'true' ? QuestionId.COMBLES_ISOLES : QuestionId.TOITURE_ISOLE
    );

    if (isolated === 'true') {
      return 1;
    }
  }

  return 0;
};

const plancherBasRating = (answers: Answers): number => {
  const cave = getValue(answers, QuestionId.CAVE);
  if (cave === 'true') {
    const isolated = getValue(answers, QuestionId.PLANCHER_BAS_ISOLE);
    return isolated === 'true' ? 1 : 0;
  }

  const construction = answers[QuestionId.CONSTRUCTION];
  return construction === 'very old' ? 0 : 1;
};

const menuiseriesRating = (answers: Answers): number => {
  const recent = getValue(answers, QuestionId.MENUISERIES_RECENT);
  const doubleVitrage = getValue(
    answers,
    QuestionId.MENUISERIES_DOUBLE_VITRAGE
  );
  if (recent === 'true' && doubleVitrage === 'true') {
    return 0.5;
  }
  return 0;
};

const vmcRating = (answers: Answers): number => {
  const vmc = getValue(answers, QuestionId.VMC);
  return vmc === 'true' ? 0.5 : 0;
};

const computeIsolationRating = (answers: Answers): number => {
  const mur = murRating(answers);
  const plancherHaut = plancherHautRating(answers);
  const plancherBas = plancherBasRating(answers);
  const menuiseries = menuiseriesRating(answers);
  const vmc = vmcRating(answers);

  const sum = mur + plancherHaut + plancherBas + menuiseries + vmc;
  return Math.max(Math.min(Math.floor(sum), 3), 1);
};

export default computeIsolationRating;
