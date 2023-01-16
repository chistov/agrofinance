import Router from "next/router";
import React, {useEffect, useState} from "react";
import styles from "@/styles/Claas.module.scss";
import Card from "react-bootstrap/Card";
import Modal from "@/components-common/Modal";
import DefaultLayout from "@/components-common/defaultLayout";
import Menu from "@/components-common/Menu";

import grimme_f from '@/assets/grimme_filters.json';
import grimme_s from '@/assets/grimme_stars.json';
import grimme_c from '@/assets/grimme_chains.json';
import grimme_r from '@/assets/grimme_rolik.json';
import grimme_t from '@/assets/grimme_trans.json';
import {GetStaticPaths, GetStaticProps} from "next";

const GrimmeItem = ({post}) => {
  const [data, setData] = useState([]);
  const [name, setName] = useState('');

  useEffect(() => {
    if (typeof window === "undefined") return null;
    // id = router.query.id
    // if(isNaN(+id)) {
    //   id = window.location.href.substr(-2, 1)
    // }

  switch (+post.id) {
    case 0:
      setData(grimme_f);
      setName('Фильтры');
      break;
    case 1:
      setData(grimme_t);
      setName('Транспортёры');
      break;
    case 2:
      setData(grimme_s);
      setName('Звёздочки');
      break;
    case 3:
      setData(grimme_r);
      setName('Ролики');
      break;
    case 4:
      setData(grimme_c);
      setName('Цепи');
      break;
    default:
      Router.push('/404');
  }
  }, [post])

  // const [showModal, setShowModal] = useState(false);

  return (
    <DefaultLayout>
      <DefaultLayout.Header>
      </DefaultLayout.Header>
      <DefaultLayout.Body>
        <Menu></Menu>
        <div className={styles.container}>
          <h2>GRIMME {name}</h2>
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

// This function gets called at build time
export const getStaticPaths: GetStaticPaths = async () => {
  // Get all possible 'id' values via API, file, etc.
  const ids = ['0', '1', '2', '3', '4']; // Example
  const paths = ids.map(id => ({
    params: { id },
  }));
  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps = async ({params}) => {
  return { props: { post: {id: params.id}} };
};

export default GrimmeItem;
