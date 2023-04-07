import { ReactNode } from 'react';
import { RennovationResult } from './answer';
import QuestionId from './enum/QuestionId';

export type Explanation = {
  title: string;
  status: 'ok' | 'sok' | 'nok';
  image: string;
  tips: ReactNode;
  dependencies: QuestionId[];
  attentions: ReactNode;
  further?: string;
  furtherLinks?: string[];
};

export type PartialResult = {
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

export type Result = PartialResult & {
  explanations: Explanation[];
  tooHigh: boolean;
};
