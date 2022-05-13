import Router from "next/router";
import "bootstrap/dist/css/bootstrap.css";
import {Image} from "react-bootstrap";
import execQuery from "../../../db";
import Navbar from "../../../components-common/Navbar";
import React, {useEffect, useState} from "react";
import styles from "../../../styles/Contacts.module.scss";
import common from "../../../styles/Common.module.scss";


interface Resp {
  cards: Array<{id: number, hdr: string, body: string, path: string}>
}

const Maschio = ({cards}: Resp) => {
  const [admin, setAdmin] = useState(false);
  useEffect(() => {
    if (typeof localStorage !== 'undefined') {
      const token = localStorage.getItem('token');
      if(token) {
        fetch('/api/auth', {
          method: 'POST',
          headers: {'Content-type': 'application/json'},
          body: JSON.stringify({token})
        })
          .then(async rsp => {
            console.log('rsp: ', rsp)
            // @ts-ignore
            if(rsp.status == 200) {
              setAdmin(true);
            }
          })
          .catch(e => console.log('err: ', e));

      }
    }}, [typeof localStorage])

  const rm = (id: number) => {
    console.log('rm id: ', id);
    const token = localStorage.getItem('token');
    fetch('/api/admin/rm-card', {
      method: 'POST',
      body: JSON.stringify({
        brand: 'maschio',
        id,
        token
      })
    })
      .then(res => {
        if(res.status == 200) {
          Router.reload();
        }
        console.log('resp: ', res)
      })
  }

  return (
    <div>
      <Navbar/>
      <div className={styles.container}>

        <div className="container mt-3 mt-md-5">
          <div className="row d-flex justify-content-center">
            <div className="col-12">
              <div className={common.header}>
                <h2 className="text-center">Запчасти</h2>
                <Image className={common.ml30} src={'/assets/maschio-logo.png'} alt={'maschio-logo'}/>
              </div>
            </div>
          </div>
          <div className={common.cards + " row d-flex justify-content-start"}>
            {
              cards.map(c => (
                  <div className="col-4" key={c.id}>
                    <div className="card">
                      <Image className="card-img-top" src={c.path}
                             height={'250px'}
                             alt="Card image cap"/>
                      <div className="card-body">
                        <h5 className="card-title">{c.hdr}</h5>
                        <pre className="card-text">{c.body}</pre>
                        { admin ? <button className="btn btn-secondary" onClick={() => rm(c.id)}>Удалить</button> : null }
                      </div>
                    </div>
                  </div>
                )
              )
            }
          </div>
        </div>
      </div>
    </div>

  )
}

interface SqlResp {
  id: number;
  hdr: string;
  body: string;
  path: string;
}
export async function getStaticProps(context: any) {
  const rows:Array<SqlResp> = [];
  await execQuery("SELECT * FROM `maschio`;", [])
    // @ts-ignore
    .then((res:Array<SqlResp>) =>
      res.forEach((row:any) =>
        rows.push({
          id: row.id,
          hdr: row.header,
          body: row.body,
          path: row.path,
        })));
  console.log('rows: ', rows);

  return {
    props: {cards: rows}, // will be passed to the page component as props
  }
}

export default Maschio;
