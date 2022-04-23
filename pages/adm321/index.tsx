import { useRouter } from 'next/router';
import {getSession, useSession} from "next-auth/react";
import execQuery from '../../db/index';
import {useEffect} from "react";

// @ts-ignore
const Admin = ({data}) => {
  console.log('start');
  const router = useRouter();
  const {data: session, status} = useSession();
  useEffect(() => {
    console.log('sess: ', session);
    console.log('status: ', status);
    console.log('data: ', data);
    if(status == 'unauthenticated') {
      router.push('/api/auth/signin');
    }
  }, [status]);


  const onsubmit = () => {
    fetch('/api/admin/add-card', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        cmd: 'select * from'
      }),
    })
  }

  /* Тут проверка JWT */
  return (
    <div>
      <form onSubmit={onsubmit}>
        <div>User: {data.user}</div>
        <input/>
      </form>
    </div>
  )

}

export async function getServerSideProps(context: any) {
//   const connection = mysql({
//     config: {
//       host: 'afsagryl.beget.tech',
//       // socketPath: config.SOCKET,
//       // port: 8888,
//       user: 'afsagryl_test',
//       password: '6QdMbk:jf,5,V5KV',
//       database: 'afsagryl_test'
//     }
//   })
//
//   let srv = null;
//   await connection.connect().then(data => {
//     srv = data
//     console.log('data: ', data);
//   })
//
//   await connection.query('SELECT * FROM `books` WHERE `author` = ?', ['David'], function (error, results, fields) {
//     // error will be an Error if one occurred during the query
//     // results will contain the results of the query
//     // fields will contain information about the returned results fields (if any)
//   });
  let data = {user: null};
  await execQuery("SELECT * FROM `users`;", [])
    .then((res:any) => data = res.map((it: { user: any; }) => ({user: it.user})));

  console.log('data srv: ', data);
  // data = {
  //   user: data.user,
  // }
  return {
    props: {data}, // will be passed to the page component as props
  }
}


export default Admin;
