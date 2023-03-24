export const questionnaires = process.env.QUESTIONNAIRE_TABLE as string;

export const columns = {
  id: 'Id',
  values: 'Valeurs',
  createdAt: 'Création',
  updatedAt: 'Mise à jour',
  finish: 'Fini',
  result: 'Resultat',
};
