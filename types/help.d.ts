import { ReactNode } from 'react';
import MaPrimeRenovCategory from './enum/MaPrimeRenovCategory';
import Residence from './enum/Residence';
import UserSatus from './enum/UserStatus';

export type Help = {
  status: UserSatus;
  residence: Residence;
  inIdf: boolean;
  constructionYear: number;
  income: string;
  color: MaPrimeRenovCategory;
  nbPersonnes: number;
};

export type OtherHelp = {
  title: string;
  description: ReactNode;
  link: string;
  eligibility: (status: UserSatus, age: number) => boolean;
  logo: string;
};
