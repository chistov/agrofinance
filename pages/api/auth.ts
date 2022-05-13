import {NextApiRequest, NextApiResponse} from "next";
// @ts-ignore
import jwt from "jsonwebtoken";
import execQuery from "../../db";

const KEY = process.env.JWT_KEY;
export default async function (req: NextApiRequest, res: NextApiResponse) {
  if(!req.body) {
    res.statusCode = 401;
    res.end('Error: empty body');
    return
  }

  const { token } = req.body;
  try{
    // db look up
    // @ts-ignore
    const [creds] = await execQuery("select * from `users`;", []);
    const origToken = jwt.sign(creds.user, KEY as string);
    if(origToken == token) {
      res.statusCode = 200;
      res.end('OK');
      return;
    }
  }
  catch (e){
    console.log('error auth: ', e);
  }

  res.statusCode = 401;
  res.end('Incorrect token');
}
