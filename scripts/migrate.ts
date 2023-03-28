/* eslint-disable no-await-in-loop */
import airtable from '../backend/db/airtable';
import { questionnaires, columns } from '../backend/db/questionnaires';
import QuestionId from '../types/enum/QuestionId';

const migrate = async () => {
  const answers = await airtable(questionnaires).select().all();
  console.log(`Analyse des ${answers.length} demandes`);
  for (let i = 0; i < answers.length; i++) {
    console.log(`Demande ${i}`);
    const answer = answers[i];
    const values = JSON.parse(answer.get(columns.values) as string) as any[];

    const cave = values.find(
      (value) => value.id === QuestionId.PLANCHER_BAS_ISOLE
    );
    if (cave) {
      cave.id = QuestionId.CAVE_ISOLEE;
    }

    const emetteurs = values.find((value) => value.id === QuestionId.EMETTEURS);
    if (emetteurs) {
      if (emetteurs.value.includes('plancher chauffant')) {
        emetteurs.value = 'plancher chauffant';
      } else if (emetteurs.value.includes('radiateurs muraux')) {
        emetteurs.value = 'radiateurs muraux';
      } else {
        emetteurs.value = 'autres';
      }
    }

    if (cave || emetteurs) {
      console.log(`Mise à jour: ${JSON.stringify(values)}`);
      await airtable(questionnaires).update(answer.id, {
        [columns.values]: JSON.stringify(values),
      });
    }
  }
};

migrate();
