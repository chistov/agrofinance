import { IncomingForm } from "formidable";
import middleware from '../../../middleware/middleware'
import nextConnect from 'next-connect'
import * as fs from "fs";

const handler = nextConnect()
handler.use(middleware)


handler.post(async (req, res) => {
  console.log('body: ', req.body)
  console.log('req files: ', req.files)

  const saveFile = (name: string, img: any) => fs.writeFileSync(`imgs/${name}`, img);

  const img = fs.readFileSync(req.files.profile_picture[0].path )
  fs.writeFile('imgs/1.txt', img, function(err) {
    if (err) return console.error(err);
    console.log('success');
  });


  //...
})

export const config = {
  api: {
    bodyParser: false
  }
}

export default handler

interface Req {
  method: string;
  body: string;
}

interface Res {
  status: (n: number) => Res;
  json: ({}) => void;
}


// const asyncParse = (req: any) =>
//   new Promise((resolve, reject) => {
//     const form = new IncomingForm({ multiples: true });
//     console.log('form: ', form)
//     try {
//       form.parse(req, (err, fields, files) => {
//         console.log('before if', err);
//         if (err) return reject(err);
//         console.log('resolve', files);
//         resolve({fields, files});
//       });
//     }
//     catch (e) {
//       console.log('parse fallen: ', e);
//     }
//     console.log('after parse');
//   });
//
//
// export default async function handler(req: Req, res: Res) {
//   console.log('handler: ', req);
//
//   if (req.method != 'POST') {
//     console.log('post not found: ');
//     res.status(405).json({ message: 'Only POST requests allowed' })
//     return
//   }
//
//   // console.log('boud found: ');
//   // const body = JSON.parse(req.body);
//   // console.log('body: ', body);
//   // for (var [key, value] of req.entries()) {
//   //   console.log(key, value);
//   // }
//   const form = new IncomingForm({ multiples: true });
//   form.uploadDir = "./";
//   form.keepExtensions = true;
//
//   form.parse(req.body, (err, fields, files) => {
//     console.log('before if', err, fields, files);
//   });
//   // const result = await asyncParse(req.body)
//   //   .then(res => {
//   //     console.log('res: ', res)
//   //     saveFile('1', res)
//   //   })
//   //   .catch(e => console.log('catch: ', e));
//   res.status(200).json({ res: 'ok' });
// }
