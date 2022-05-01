import {NextApiRequest, NextApiResponse} from "next";
import jwt from "jsonwebtoken";
import bcrypt from 'bcryptjs';
import execQuery from "../../db";

const KEY="jl;kjl;jduopwqeufrvhycvpivcnb";
export default async function (req: NextApiRequest, res: NextApiResponse) {
  console.log('login works', req.body);
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
    console.log('user: ', creds);
    const match = await bcrypt.compare(password, creds.pwd);
    console.log('match: ', match);
    if(creds.user == username && match) {
      console.log('200 login');
      res.json({
        token: jwt.sign({username}, KEY)
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
