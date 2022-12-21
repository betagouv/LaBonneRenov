import { UNKNOWN } from '../../../components/Form/YesNo';
import { Answers } from '../../../types/answer';
import QuestionId from '../../../types/enum/QuestionId';

const unknownValues: Record<string, Answers> = {
  'very old': {
    [QuestionId.MUR_ISOLES]: 'no',
    [QuestionId.COMBLES_AMENAGES]: 'true',
    [QuestionId.COMBLES_ISOLES]: 'false',
    [QuestionId.CAVE]: 'false',
    [QuestionId.PLANCHER_BAS_ISOLE]: 'false',
    [QuestionId.MENUISERIES_DOUBLE_VITRAGE]: 'true',
    [QuestionId.MENUISERIES_RECENT]: 'false',
    [QuestionId.VMC]: 'false',
  },
  old: {
    [QuestionId.MUR_ISOLES]: 'no',
    [QuestionId.COMBLES_AMENAGES]: 'false',
    [QuestionId.TOITURE_ISOLE]: 'false',
    [QuestionId.CAVE]: 'true',
    [QuestionId.PLANCHER_BAS_ISOLE]: 'false',
    [QuestionId.MENUISERIES_DOUBLE_VITRAGE]: 'true',
    [QuestionId.MENUISERIES_RECENT]: 'false',
    [QuestionId.VMC]: 'false',
  },
  recent: {
    [QuestionId.MUR_ISOLES]: 'recent',
    [QuestionId.COMBLES_AMENAGES]: 'false',
    [QuestionId.TOITURE_ISOLE]: 'true',
    [QuestionId.CAVE]: 'true',
    [QuestionId.PLANCHER_BAS_ISOLE]: 'true',
    [QuestionId.MENUISERIES_DOUBLE_VITRAGE]: 'true',
    [QuestionId.MENUISERIES_RECENT]: 'false',
    [QuestionId.VMC]: 'true',
  },
  'very recent': {
    [QuestionId.MUR_ISOLES]: 'recent',
    [QuestionId.COMBLES_AMENAGES]: 'true',
    [QuestionId.TOITURE_ISOLE]: 'true',
    [QuestionId.CAVE]: 'true',
    [QuestionId.PLANCHER_BAS_ISOLE]: 'true',
    [QuestionId.MENUISERIES_DOUBLE_VITRAGE]: 'true',
    [QuestionId.MENUISERIES_RECENT]: 'true',
    [QuestionId.VMC]: 'true',
  },
};

// eslint-disable-next-line import/prefer-default-export
export const getValue = (answers: Answers, id: QuestionId) => {
  const value = answers[id];
  if (value === UNKNOWN) {
    return unknownValues[
      answers[QuestionId.CONSTRUCTION] as
        | 'very old'
        | 'old'
        | 'recent'
        | 'very recent'
    ][QuestionId.MUR_ISOLES];
  }
  return value;
};
