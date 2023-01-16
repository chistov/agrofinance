import Router from "next/router";
import React, {useEffect, useState} from "react";
import styles from "@/styles/Claas.module.scss";
import Card from "react-bootstrap/Card";
import Modal from "@/components-common/Modal";
import DefaultLayout from "@/components-common/defaultLayout";
import Menu from "@/components-common/Menu";

import lemk_e from '@/assets/lemken_eurodiamant.json';
import lemk_r from '@/assets/lemken_rubin.json';
import lemk_s from '@/assets/lemken_smaragd.json';
import lemk_t from '@/assets/lemken_thorit.json';
import {GetStaticPaths, GetStaticProps} from "next";

const LemkenItem = ({post}) => {
  const [data, setData] = useState([]);
  const [name, setName] = useState('');

  useEffect(() => {
    if (typeof window === "undefined") return null;
    // id = router.query.id
    // if(isNaN(+id)) {
    //   id = window.location.href.substr(-2, 1)
    // }

    switch ( +post.id) {
      case 0:
        setData(lemk_t);
        setName('Thorit');
        break;
      case 1:
        setData(lemk_r);
        setName('Rubin');
        break;
      case 2:
        setData(lemk_s);
        setName('Smaragd');
        break;
      case 3:
        setData(lemk_e);
        setName('Eurodiamant');
        break;
      default:
        Router.push('/404');
    }
  }, [post])

  return (
    <DefaultLayout>
      <DefaultLayout.Header>
      </DefaultLayout.Header>
      <DefaultLayout.Body>
        <Menu></Menu>
        <div className={styles.container}>
          <h2>LEMKEN {name}</h2>
          <div className={styles.subcontainer}>
            { data &&
            data.map((it, idx) =>
              <Card key={idx} className={styles.card} >
                <Card.Img /*onClick={() => setShowModal(!showModal)} */
                  className={styles.card_img} variant="top" src={it.img}></Card.Img>
                <Card.Body className={styles.card_body}>
                  <Card.Title className={styles.card_title}>{it.name}</Card.Title>
                  <Card.Text className={styles.card_txt}>Артикул: {it.articul}</Card.Text>
                  {/*<Modal*/}
                  {/*  onClose={() => setShowModal(false)}*/}
                  {/*  show={showModal}*/}
                  {/*  title={it.name}*/}
                  {/*>Hello from the modal!*/}
                  {/*</Modal>*/}
                </Card.Body>
              </Card>
            )
            }
          </div>
        </div>
      </DefaultLayout.Body>
    </DefaultLayout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  // Get all possible 'id' values via API, file, etc.
  const ids = ['0', '1', '2', '3']; // Example
  const paths = ids.map(id => ({
    params: { id },
  }));
  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps = async ({params}) => {
  return { props: { post: {id: params.id}} };
};


export default LemkenItem;
