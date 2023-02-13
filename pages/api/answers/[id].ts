import AirtableError from 'airtable/lib/airtable_error';
import { NextApiRequest, NextApiResponse } from 'next';
import airtable from '../../../backend/db/airtable';
import { columns, questionnaires } from '../../../backend/db/questionnaires';

const get = async (req: NextApiRequest, res: NextApiResponse) => {
  const id = req.query.id as string;
  const result = await airtable(questionnaires).find(id);

  return res.status(200).json({ id, values: result.get(columns.values) });
};

const put = async (req: NextApiRequest, res: NextApiResponse) => {
  const id = req.query.id as string;

  await airtable(questionnaires).update(id, {
    [columns.values]: req.body.values,
    [columns.finish]: req.body.finish,
    [columns.result]: req.body.result,
    [columns.updatedAt]: new Date().toISOString(),
  });

  return res.status(200).json({ id });
};

export default async function answers(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method === 'GET') {
      return await get(req, res);
    }

    if (req.method === 'PUT') {
      return await put(req, res);
    }
    return res.status(501);
  } catch (e) {
    if (e instanceof AirtableError) {
      if (e.statusCode === 404) {
        return res.status(204).json({});
      }
    }

    return res.status(500);
  }
}
