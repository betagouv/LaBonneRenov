import { RennovationResult } from './answer';

export type Result = {
  compatibility: 'ok' | 'nok' | 'sok';
  syntheses: {
    positiveTitle?: string;
    positiveDescription?: string;
    negativeTitle?: string;
    negativeDescription?: string;
  };
  further: string;
  justifications: {
    positives: string[];
    negatives: string[];
  };
  pacAsFirstStep: boolean;
  todo: string;
  investment: number;
  rennovation?: RennovationResult;
};
