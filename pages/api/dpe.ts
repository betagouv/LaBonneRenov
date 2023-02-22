import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

const get = async (req: NextApiRequest, res: NextApiResponse) => {
  const { lon, lat, distance } = req.query;

  const result = await axios
    .get(
      `https://france-chaleur-urbaine-dev.osc-fr1.scalingo.io/api/dpe?lon=${lon}&lat=${lat}&distance=${
        distance || 10000
      }`,
      {
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      }
    )
    .then(({ data }) => data);
  return res.status(200).send(result);
};

export default async function answers(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    return get(req, res);
  }
  return res.status(501);
}
