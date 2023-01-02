export type FranceRennovResult = {
  raison_sociale: string;
  adresse_postale: {
    adresse1: string;
    code_postal: string;
    ville: ville;
  };
  tel?: string;
  email?: string;
  web?: string;
  horaire: string[];
};
