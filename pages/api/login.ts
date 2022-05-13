import {NextApiRequest, NextApiResponse} from "next";
import jwt from "jsonwebtoken";
import bcrypt from 'bcryptjs';
import execQuery from "../../db";

const KEY = process.env.JWT_KEY;
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if(!req.body) {
    console.log('')
    res.statusCode = 401;
    res.end('Error');
    return
  }

  const { username, password } = req.body;
  try{
    // db look up
    // @ts-ignore
    const [creds] = await execQuery("select * from `users`;", []);
    const match = await bcrypt.compare(password, creds.pwd);
    if(creds.user == username && match) {
      console.log('200 login');
      res.json({
        token: jwt.sign(username, KEY as string)
      })
      res.statusCode = 200;
      return;
    }
  }
  catch (e){
    console.log('error login: ', e);
  }

  res.statusCode = 401;
  res.end('Incorrect user or password');
}

export default handler;
