import Router from "next/router";
import React, {useEffect, useState} from "react";
import styles from "@/styles/Claas.module.scss";
import Card from "react-bootstrap/Card";
import Modal from "@/components-common/Modal";
import DefaultLayout from "@/components-common/defaultLayout";
import Menu from "@/components-common/Menu";

import bob_f from '@/assets/bob_filters.json';
import bob_e from '@/assets/bob_engine.json';
import bob_p from '@/assets/bob_povorot.json';
import bob_r from '@/assets/bob_rulev.json';
import bob_s from '@/assets/bob_stup.json';
import {GetStaticPaths, GetStaticProps} from "next";

const BobItem = ({post}) => {
  // let id:string | string[] = '';
  const [data, setData] = useState([]);
  const [name, setName] = useState('');

  // const router = useRouter()

  useEffect(() => {
    if (typeof window === "undefined") return null;
    // id = router.query.id
    // if(isNaN(+id)) {
    //   id = window.location.href.substr(-2, 1)
    // }

    switch ( +post.id) {
      case 0:
        setData(bob_f);
        setName('Фильтры');
        break;
      case 1:
        setData(bob_r);
        setName('Рулевые тяги');
        break;
      case 2:
        setData(bob_s);
        setName('Ступица переднего/заднего моста');
        break;
      case 3:
        setData(bob_p);
        setName('Поворотный кулак');
        break;
      case 4:
        setData(bob_e);
        setName('Двигатель');
        break;
      default:
        Router.push('/404');
    }

  }, [])

  // const [showModal, setShowModal] = useState(false);

  return (
    <DefaultLayout>
      <DefaultLayout.Header>
      </DefaultLayout.Header>
      <DefaultLayout.Body>
        <Menu></Menu>
        <div className={styles.container}>
          <h2>BOBCAT {name}</h2>
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
  const ids = ['0', '1', '2', '3', '4']; // Example
  const paths = ids.map(id => ({
    params: { id },
  }));
  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps = async ({params}) => {
  return { props: { post: {id: params.id}} };
};


export default BobItem;
