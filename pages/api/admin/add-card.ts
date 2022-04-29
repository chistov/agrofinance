import { IncomingForm } from "formidable";
import middleware from '../../../middleware/middleware'
import nextConnect from 'next-connect'
import * as fs from "fs";
import execQuery from "../../../db";
import {IncomingMessage} from "http";

const handler = nextConnect()
handler.use(middleware)

interface Req extends IncomingMessage {
  body: {
    brand: [],
    hdr: [],
    body: [],
  }
}


handler.post(async (req:Req, res) => {
  // @ts-ignore
  const brand = req.body.brand[0];

  // const saveFile = (name: string, img: any) => fs.writeFileSync(`imgs/${name}`, img);
  // @ts-ignore
  const insert = `INSERT INTO ${brand} (header, body) VALUES('${req.body.hdr[0]}', '${req.body.body[0]}') ;`
  console.log('ins: ', insert);
  const result = await execQuery(insert, []);
  // @ts-ignore
  const idx = result.insertId;

  // @ts-ignore
  const filePath = req.files.picture[0].path;
  const ext = filePath.substring(filePath.lastIndexOf('.'))
  const img = fs.readFileSync(filePath);
  const path = `/spare-parts/${brand}/${idx}${ext}`; // путь для img src страницы запчастей
  fs.writeFile('public' + path, img, function(err) {
    if (err) return console.error(err);
    console.log('success');
  });

  const update = `UPDATE ${brand} SET path='${path}' WHERE id=${idx}`;
  await execQuery(update, []);
})

export const config = {
  api: {
    bodyParser: false
  }
}

export default handler

interface Req {
  method: string;
  // @ts-ignore
  body: string;
}

interface Res {
  status: (n: number) => Res;
  json: ({}) => void;
}
