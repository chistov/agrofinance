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
      // headers: { 'content-type': 'multipart/form-data' },
      // headers: {
      //   'Content-Type': 'application/json',
      // },
      body: JSON.stringify({
        cmd: 'select * from'
      }),
    })
  }


  let hdr = '';
  let body = '';

  const handleChange = (e:any) => {
    let formData = new FormData();
    // formData.append("data", JSON.stringify(content));
    console.log('e: ', e);
    if(e.target.files && e.target.files[0]) {
      console.log('file found', e.target.files[0])
      formData.append("profile_picture", e.target.files[0]);
      console.log('f: ', formData);
      console.log('hdr: ', hdr);
      console.log('body: ', body);
      fetch('/api/admin/add-card', {
        method: 'POST',
        // headers: {
        //   'Content-Type': 'application/json',
        // },
        body: formData
      })
        .then(res => console.log('resp: ', res))
    }
    // axios.put("/api/update", formData).then(console.log).catch(console.log);
  };

  return (

    <div className="container mt-3 mt-md-5">
      <div className="row d-flex justify-content-center">
        <div className="col-6">
          {/*<form onSubmit={onsubmit}>*/}
          <form>
            <div>Заголовок:</div>
            <input value={hdr}/>
            <div>Основной блок текста:</div>
            <input value={body}/>
            <div>Выберите фото:</div>
            <input accept="*" type="file" onChange={handleChange} />
          </form>
        </div>
      </div>
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
