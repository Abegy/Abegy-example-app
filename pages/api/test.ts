// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    const result = await fetch('https://alt.edge.mile-two.com/api/tag/intel/text')
    if(result){ 
        res.status(200).json(await result.json())
    }else 
    res.status(500).json('failure')
}
