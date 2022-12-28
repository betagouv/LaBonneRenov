import { UNKNOWN } from '../../../components/Form/YesNo';
import { Answers, IsolationResult } from '../../../types/answer';
import QuestionId from '../../../types/enum/QuestionId';
import { Savings } from '../../../types/savings';

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

const savings: Record<string, Savings> = {
  'chaudiere gaz': {
    ef: 0.32,
    ep: 0.73,
    ges: 0.1,
    facture: 0.86,
  },
  'chaudiere fioul': {
    ef: 0.3,
    ep: 0.69,
    ges: 0.06,
    facture: 0.63,
  },
  electrique: {
    ef: 0.39,
    ep: 0.39,
    ges: 0.39,
    facture: 0.39,
  },
  'chaudiere bois': {
    ef: 0.27,
    ep: 0.61,
    ges: 0.27,
    facture: 1.58,
  },
  'bois poele insert': {
    ef: 0.29,
    ep: 0.67,
    ges: 0.29,
    facture: 1.73,
  },
  autre: {
    ef: 0.32,
    ep: 0.73,
    ges: 0.1,
    facture: 0.86,
  },
};

const gainEnveloppe = (
  rennovation: (keyof IsolationResult)[],
  withPAC: boolean
): number => {
  const plancherHaut = rennovation.includes('plancherHaut');
  const plancherBas = rennovation.includes('plancherBas');
  const menuiserie = rennovation.includes('menuiserie');
  const mur = rennovation.includes('mur');
  if (withPAC) {
    if (mur) {
      if (menuiserie) {
        if (plancherHaut) {
          if (plancherBas) {
            return 0.45;
          }
          return 0.55;
        }
        if (plancherBas) {
          return 0.55;
        }
        return 0.6;
      }

      // No menuiserie
      if (plancherHaut) {
        if (plancherBas) {
          return 0.5;
        }
        return 0.6;
      }
      if (plancherBas) {
        return 0.6;
      }
      return 0.65;
    }
    // No mur
    if (menuiserie) {
      if (plancherHaut) {
        if (plancherBas) {
          return 0.75;
        }
        return 0.85;
      }
      if (plancherBas) {
        return 0.85;
      }
      return 0.95;
    }

    // No menuiserie
    if (plancherHaut) {
      if (plancherBas) {
        return 0.8;
      }
      return 0.9;
    }
    if (plancherBas) {
      return 0.9;
    }
    return 1;
  }

  // No pac
  if (mur) {
    if (menuiserie) {
      if (plancherHaut) {
        if (plancherBas) {
          return 0.38;
        }
        return 0.45;
      }
      if (plancherBas) {
        return 0.45;
      }
      return 0.5;
    }

    // No menuiserie
    if (plancherHaut) {
      if (plancherBas) {
        return 0.43;
      }
      return 0.5;
    }
    if (plancherBas) {
      return 0.5;
    }
    return 0.55;
  }
  // No mur
  if (menuiserie) {
    if (plancherHaut) {
      if (plancherBas) {
        return 0.75;
      }
      return 0.8;
    }
    if (plancherBas) {
      return 0.8;
    }
    return 0.95;
  }

  // No menuiserie
  if (plancherHaut) {
    if (plancherBas) {
      return 0.73;
    }
    return 0.82;
  }
  if (plancherBas) {
    return 0.85;
  }
  return 1;
};

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

export const getSaving = (
  answers: Answers,
  rennovation: (keyof IsolationResult)[],
  withPAC: boolean
): Savings => {
  const chauffage = getValue(answers, QuestionId.CHAUFFAGE_PRINCIPAL) as string;
  const gain = gainEnveloppe(rennovation, withPAC);
  const base = withPAC
    ? savings[chauffage]
    : {
        ef: 1,
        ep: 1,
        ges: 1,
        facture: 1,
      };

  return {
    ef: 1 - gain * base.ef,
    ep: 1 - gain * base.ep,
    ges: 1 - gain * base.ges,
    facture: 1 - gain * base.facture,
  };
};
