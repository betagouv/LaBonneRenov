export type Result = {
  compatibility: 'ok' | 'nok' | 'sok';
  synthese: string;
  further: string;
  justifications: string[];
  pacAsFirstStep: boolean;
  todo: string;
  investment: number;
};
