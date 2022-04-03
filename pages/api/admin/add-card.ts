interface Req {
  method: string;
  body: string;
}

interface Res {
  status: (n: number) => Res;
  json: ({}) => void;
}

export default function handler(req: Req, res: Res) {
  console.log('handler: ');

  if (req.method != 'POST') {
    console.log('post not found: ');
    res.status(405).json({ message: 'Only POST requests allowed' })
    return
  }

  console.log('boud found: ', typeof req.body);
  // const body = JSON.parse(req.body);
  // console.log('body: ', body);
  res.status(201).json({message: 'success'});
}
