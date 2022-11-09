// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) { console.log(req.query.testlabel)
  //res.status(200).json(req.query.aaron)
  const labelfromui = req.query.testlabel  
  const result = await fetch('https://alt.edge.mile-two.com/api/tag/' + labelfromui + '/text')
  
    if(result){ 
        res.status(200).json(await result.json())
    }else 
    res.status(500).json('failure')
}
