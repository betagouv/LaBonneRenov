import { NextApiRequest, NextApiResponse } from 'next';

const get = async (req: NextApiRequest, res: NextApiResponse) => {
  const dates: string[] = [];
  const params = [];
  const date = new Date('2023-01-30');
  const today = new Date();
  let count = 0;
  while (date < today) {
    const baseDate = `${date.getFullYear()}-${(date.getMonth() + 1)
      .toString()
      .padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;

    params.push(
      `urls[${count}]=method%3dEvents.getCategory%26idSite%3d${process.env.MATOMO_ID_SITE}%26period%3dweek%26date%3d${baseDate}`
    );
    dates.push(baseDate);
    date.setDate(date.getDate() + 7);
    count += 1;
  }
  const results = await (
    await fetch(
      `${process.env.MATOMO_URL}?token_auth=${
        process.env.MATOMO_TOKEN
      }&module=API&method=API.getBulkRequest&format=json&${params.join('&')}`,
      {
        method: 'GET',
        redirect: 'follow',
      }
    )
  ).json();

  const stats: Record<string, number> = {};
  results.forEach((result: any, index: number) => {
    stats[dates[index]] =
      result.find((x: any) => x.label === 'france_rennov')?.nb_events || 0;
  });

  return res.status(200).json(stats);
};

export default async function visit(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    return get(req, res);
  }
  return res.status(501);
}
