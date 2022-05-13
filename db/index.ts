import {createPool} from 'mysql';

const pool = createPool({
  host: "afsagryl.beget.tech",
  user: process.env.DB_USER,
  password: process.env.DB_PWD,
  database: process.env.DB_NAME
});

pool.getConnection((err) => {
  if(err) {
    console.log('Error connecting to db: ', err);
    return;
  }
  console.log('Connected to db');
});

const execQuery = (query: string, params: []) => {
  return new Promise((res: Function, rej: Function) => {
    try {
      pool.query(query, params, (err, data) => {
        if(err) {
          console.log('Error query: ', query);
          rej();
        }
        console.log('sql data: ', data)
        res(data);
      })
    }
    catch (err){
      rej();
    }
  })
}

export default execQuery;
