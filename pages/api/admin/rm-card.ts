import type { NextApiRequest, NextApiResponse } from 'next'
import execQuery from "../../../db";
import fs from "fs";

type Data = {
  name: string
}

export default async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  req.body = JSON.parse(req.body);
  console.log('req: ', req.body);
  const brand = req.body.brand;
  const id = req.body.id;
  let query = `select path from ${brand} where id=${id}`;
  const r = await execQuery(query, []);
  console.log('r: ')
  // @ts-ignore
  const path = r[0].path;
  if(path) {
    query = `delete from ${brand} where id=${id}`;
    await execQuery(query, []);
    fs.unlink('public' + path, function(err) {
      if (err) console.error(err);
      console.log('success rm file = ', path);
      // @ts-ignore
      return res.status(200).json({result: 'test'});
    });
  }
  else {
    // @ts-ignore
    res.status(400).json({ result: 'Error with item remove' })
  }
}
