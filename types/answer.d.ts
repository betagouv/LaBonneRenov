import QuestionId from './enum/QuestionId';

export type Answer = { id: QuestionId; value: string | string[] | null };

export type Answers = Partial<Record<QuestionId, string | string[] | null>>;
