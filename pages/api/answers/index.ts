import { NextApiRequest, NextApiResponse } from 'next';
import airtable from '../../../backend/db/airtable';
import { columns, questionnaires } from '../../../backend/db/questionnaires';

const post = async (req: NextApiRequest, res: NextApiResponse) => {
  const { values } = req.body;

  const result = await airtable(questionnaires).create({
    [columns.values]: values,
    [columns.createdAt]: new Date().toISOString(),
  });
  return res.status(201).json({ id: result.id, values });
};

export default async function answers(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    return post(req, res);
  }
  return res.status(501);
}
