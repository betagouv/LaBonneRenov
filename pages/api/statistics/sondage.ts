import { NextApiRequest, NextApiResponse } from 'next';
import airtable from '../../../backend/db/airtable';
import { sondages } from '../../../backend/db/sondages';

const get = async (req: NextApiRequest, res: NextApiResponse) => {
  const stats: Record<string, number> = {};
  const results = await airtable(sondages).select().all();
  results.forEach((result) => {
    const value = result.fields.Resultat as string;
    if (stats[value]) {
      stats[value] += 1;
    } else {
      stats[value] = 1;
    }
  });
  return res.status(200).json(stats);
};

export default async function sondage(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    return get(req, res);
  }
  return res.status(501);
}
