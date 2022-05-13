import execQuery from "../db";
import jwt from "jsonwebtoken";
import {ServerResponse} from "http";

export function changeMenuItem(curr: number, cb: Function)  {
  cb(curr);
  window.scrollTo({top: 0});
}

export async function isAdmin(res: ServerResponse, token: string, KEY: string) {
  // @ts-ignore
  const [creds] = await execQuery("select * from `users`;", []);
  const origToken = jwt.sign(creds.user, KEY);
  return origToken == token ? true: false;
}
