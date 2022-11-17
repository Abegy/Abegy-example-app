import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  console.log(req.query.testid);
  //res.status(200).json(req.query.aaron)
  const idfromui = req.query.testid;
  const result = await fetch(
    "https://alt.edge.mile-two.com/api/text/" + idfromui
  );

  if (result) {
    res.status(200).json(await result.json());
  } else res.status(500);
}
