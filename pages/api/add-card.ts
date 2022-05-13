import nextConnect from "next-connect";
// @ts-ignore
import multer from "multer";
import * as fs from "fs";
import execQuery from "../../db";
import {isAdmin} from "../../components-common/helpers";
import {NextApiRequest, NextApiResponse} from "next";

const apiRoute = nextConnect({
  onError(error, req, res) {
    // @ts-ignore
    res.status(501).json({ error: `Sorry something Happened! ${error.message}` });
  },
  onNoMatch(req, res) {
    // @ts-ignore
    res.status(405).json({ error: `Method "${req.method}" Not Allowed` });
  },
});

apiRoute.use(multer().any());

apiRoute.post(async (req: NextApiRequest, res: NextApiResponse) => {
  const brand = req.body.brand;
  const hdr = req.body.hdr;
  const body = req.body.body;
  const token = req.body.token;

  if(!await isAdmin(res, token, process.env.JWT_KEY as string)) {
    console.log('Не админ');
    // @ts-ignore
    res.status(401).json({ result: 'Недостаточно прав' })
    res.end();
    return;
  }


  const insert = `INSERT INTO ${brand} (header, body) VALUES('${hdr}', '${body}') ;`
  const result = await execQuery(insert, []);
  // @ts-ignore
  const idx = result.insertId; // присвоенный id при insert

  // @ts-ignore
  const filePath = req.files[0].originalname;
  const ext = filePath.substring(filePath.lastIndexOf('.'))
  // @ts-ignore
  const img = req.files[0].buffer;
  const path = `/spare-parts/${brand}/${idx}${ext}`; // путь буфера для img src страницы запчастей
  fs.writeFile('public' + path, img, function(err) {
    if (err) return console.error(err);
  });

  const update = `UPDATE ${brand} SET path='${path}' WHERE id=${idx}`;
  await execQuery(update, []);
  res.status(200).json({ result: 'OK' })
  res.end();
  return;
});

export default apiRoute;

export const config = {
  api: {
    bodyParser: false, // Disallow body parsing, consume as stream
  },
};

