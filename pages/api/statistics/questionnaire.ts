import { NextApiRequest, NextApiResponse } from 'next';
import airtable from '../../../backend/db/airtable';
import { columns, questionnaires } from '../../../backend/db/questionnaires';

const get = async (req: NextApiRequest, res: NextApiResponse) => {
  let begin = 0;
  let finished = 0;
  let result = 0;
  const answers = await airtable(questionnaires).select().all();
  answers.forEach((answer) => {
    if (answer.get(columns.result)) {
      result += 1;
    } else if (answer.get(columns.finish)) {
      finished += 1;
    } else {
      begin += 1;
    }
  });
  return res
    .status(200)
    .json({ Commencé: begin, Fini: finished, Resultat: result });
};

export default async function questionnaire(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    return get(req, res);
  }
  return res.status(501);
}
