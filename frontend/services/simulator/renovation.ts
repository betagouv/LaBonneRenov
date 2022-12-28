import {
  Answers,
  IsolationResult,
  RennovationResult,
} from '../../../types/answer';
import QuestionId from '../../../types/enum/QuestionId';
import { Result } from '../../../types/result';
import { getSaving, getValue } from './utils';

const computeMenuiserie = (answers: Answers): number => {
  const recentDoubleVitrage = getValue(answers, QuestionId.MENUISERIES_RECENT);
  const doubleVitrage = getValue(
    answers,
    QuestionId.MENUISERIES_DOUBLE_VITRAGE
  );

  if (recentDoubleVitrage !== 'true' && doubleVitrage !== 'true') {
    return 1;
  }

  if (recentDoubleVitrage === 'true' && doubleVitrage === 'true') {
    return 3;
  }

  return 2;
};

const computePlancherBas = (answers: Answers): number => {
  const cave = getValue(answers, QuestionId.CAVE);
  const isolated = getValue(answers, QuestionId.PLANCHER_BAS_ISOLE);
  if (cave !== 'true' && isolated !== 'true') {
    return 1;
  }
  return 0;
};

const computeRenovation = (
  answers: Answers,
  isolation: IsolationResult,
  result: Result
): RennovationResult => {
  const todo = Object.entries({
    mur: isolation.mur === 0 ? 1 : 3,
    menuiserie: computeMenuiserie(answers),
    plancherHaut: isolation.plancherHaut === 0 ? 1 : 3,
    plancherBas: computePlancherBas(answers),
  });

  const orderedTodo = todo
    .filter(([, value]) => value === 1)
    .map(([key]) => key)
    .concat(
      todo.filter(([, value]) => value === 2).map(([key]) => key)
    ) as (keyof IsolationResult)[];

  const todoLength = orderedTodo.length;
  const firstStepLength = Math.min(todoLength, result.pacAsFirstStep ? 2 : 3);
  const firstStep = orderedTodo.slice(0, firstStepLength);
  const secondStep =
    firstStepLength < todoLength ? orderedTodo.slice(firstStepLength) : [];
  if (isolation.vmc === 0) {
    const heavyWork: (keyof IsolationResult)[] = [
      'mur',
      'menuiserie',
      'plancherHaut',
    ];
    if (heavyWork.some((key) => firstStep.includes(key))) {
      firstStep.push('vmc');
    } else if (heavyWork.some((key) => secondStep.includes(key))) {
      secondStep.push('vmc');
    }
  }

  return {
    firstStep: {
      steps: firstStep,
      savings: getSaving(answers, firstStep, result.pacAsFirstStep),
    },
    secondStep: {
      steps: secondStep,
      savings: getSaving(answers, secondStep, !result.pacAsFirstStep),
    },
  };
};

export default computeRenovation;
