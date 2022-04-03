import mysql from 'serverless-mysql';
import {getSession, useSession} from "next-auth/react";

// @ts-ignore
const Admin = ({srv}) => {


  const session = useSession();
  console.log('sess: ', session);


  const onsubmit = () => {

  }

  /* Тут проверка JWT */
  return (
    <div>
      <form onSubmit={onsubmit}></form>
      <input/>
    </div>
  )

}

// export async function getServerSideProps(context: any) {
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
//
//   return {
//     props: {srv}, // will be passed to the page component as props
//   }
// }


export default Admin;
