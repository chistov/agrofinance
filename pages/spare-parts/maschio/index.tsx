import "bootstrap/dist/css/bootstrap.css";
import {Image} from "react-bootstrap";
import execQuery from "../../../db";
import Navbar from "../../../components-common/Navbar";
import React from "react";
import styles from "../../../styles/Contacts.module.scss";
import common from "../../../styles/Common.module.scss";

interface Resp {
  cards: Array<{id: number, hdr: string, body: string, path: string}>
}

const Maschio = ({cards}: Resp) => {

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
          <div className="row d-flex justify-content-center">
            {
              cards.map(c => (
                  <div className="col-4" key={c.id}>
                    <div className="card">
                      <Image className="card-img-top" src={c.path}
                             height={'250px'}
                             alt="Card image cap"/>
                      <div className="card-body">
                        <h5 className="card-title">{c.hdr}</h5>
                        <p className="card-text">{c.body}</p>
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
export async function getServerSideProps(context: any) {
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
