import type { NextApiRequest, NextApiResponse } from 'next'
import execQuery from "../../../db";
import fs from "fs";
import {isAdmin} from "../../../components-common/helpers";

type Data = {
  name: string
}

export default async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  req.body = JSON.parse(req.body);
  const {token} = req.body;
  if(!await isAdmin(res, token, process.env.JWT_KEY as string)) {
    // @ts-ignore
    res.status(401).json({ result: 'Недостаточно прав' })
    res.end();
    return;
  }

  const {brand, id} = req.body;
  let query = `select path from ${brand} where id=${id}`;
  const r = await execQuery(query, []);
  console.log('r: ', r);
  // @ts-ignore
  const path = r[0].path;
  if(path) {
    query = `delete from ${brand} where id=${id}`;
    await execQuery(query, []);
    fs.unlink('static' + path, function(err) {
      if (err) console.error(err);
      // @ts-ignore
      return res.status(200).json({result: 'test'});
    });
  }
  else {
    // @ts-ignore
    res.status(400).json({ result: 'Error with item remove' })
  }
}
