import {NextApiRequest, NextApiResponse} from "next";
import execQuery from "../../db";
import * as fs from "fs";
// import mime from "mime";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (!req.query) {
    res.statusCode = 401;
    res.end('Query absent');
    return
  }

  console.log('query: ', req.query);

  const {company} = req.query;
  const buff = await execQuery(`select * from ${company}`, []);
  const cards = [];
  (buff as any).forEach(c => {
    const base64 = fs.readFileSync('static' + c.path, {encoding: 'base64'});
    const re = /(?:\.([^.]+))?$/;
    const ext = re.exec(c.path)[1];

    // const type = mime.getType(ext);
    const mime = require('mime-types')
    const type = mime.lookup(ext);
    cards.push({
      id: c.id,
      header: c.header,
      body: c.body,
      path: `data:${type};base64,${base64}`
    });

  });

  // console.log('cs: ', cards);
  res.json({cards});
  res.statusCode = 200;
}

export default handler;
