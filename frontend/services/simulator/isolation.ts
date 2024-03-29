import { UNKNOWN } from '../../../components/Form/YesNo';
import { Answers, IsolationResult } from '../../../types/answer';
import QuestionId from '../../../types/enum/QuestionId';
import { getValue } from './utils';

const murRating = (answers: Answers): number => {
  const value = getValue(answers, QuestionId.MUR_ISOLES);
  return value === 'true' ? 2 : 0;
};

const plancherHautRating = (answers: Answers): number => {
  const combles = getValue(answers, QuestionId.COMBLES_AMENAGES);
  if (combles !== UNKNOWN) {
    const isolated = getValue(
      answers,
      combles === 'true' ? QuestionId.TOITURE_ISOLE : QuestionId.COMBLES_ISOLES
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

const menuiserieRating = (answers: Answers): number => {
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

const computeIsolationRating = (answers: Answers): IsolationResult => ({
  mur: murRating(answers),
  plancherHaut: plancherHautRating(answers),
  plancherBas: plancherBasRating(answers),
  menuiserie: menuiserieRating(answers),
  vmc: vmcRating(answers),
});

export default computeIsolationRating;
