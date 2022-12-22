import { NextApiRequest, NextApiResponse } from 'next';
import airtable from '../../backend/db/airtable';
import { columns, sondages } from '../../backend/db/sondages';

const post = async (req: NextApiRequest, res: NextApiResponse) => {
  const { result } = req.body;

  await airtable(sondages).create({
    [columns.result]: result,
    [columns.date]: new Date().toISOString(),
  });
  return res.status(201).send('Ok');
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
