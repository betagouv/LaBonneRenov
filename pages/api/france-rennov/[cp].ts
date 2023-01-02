import FormData from 'form-data';
import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';
import { FranceRennovResult } from '../../../types/franceRennovResult';

const search = (cp: string) =>
  axios
    .get(`https://api-adresse.data.gouv.fr/search?q=${cp}&&limit=1`)
    .then(({ data }) => data);

const franceRennov = (citycode: string, city: string, postcode: string) => {
  const bodyFormData = new FormData();
  bodyFormData.append('localisation', `${postcode} - ${city}`);
  bodyFormData.append('insee', citycode);
  return axios
    .post<FranceRennovResult>(
      'https://france-renov.gouv.fr/espaces-conseil-fr/search.json',
      bodyFormData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
          'x-requested-with': 'XMLHttpRequest',
          'Access-Control-Allow-Origin': '*',
        },
      }
    )
    .then(({ data }) => data);
};

const get = async (req: NextApiRequest, res: NextApiResponse) => {
  const { cp } = req.query;

  return search(cp as string).then((data) => {
    const { citycode, city, postcode } = data.features[0].properties;
    franceRennov(citycode, city, postcode).then((result) =>
      res.status(200).json(result)
    );
  });
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
