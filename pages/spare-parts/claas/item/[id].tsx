import Router from "next/router";
import React, {useEffect, useRef, useState} from "react";
import styles from "@/styles/Claas.module.scss";
import Card from "react-bootstrap/Card";
import Modal from "@/components-common/Modal";
import DefaultLayout from "@/components-common/defaultLayout";
import Menu from "@/components-common/Menu";

/* Claas */
import claas_f from '@/assets/claas_filters.json';
import claas_st from '@/assets/claas_stars.json';
import claas_b from '@/assets/claas_belts.json';
import claas_c from '@/assets/claas_chains.json';
import claas_w from '@/assets/claas_work.json';
import {GetStaticPaths, GetStaticProps} from "next";

const ClaasItem = ({post}) => {
  const [data, setData] = useState([]);
  const [name, setName] = useState('');
  // const [id, setId] = useState('')
  // const id = useRef('');

  // const router = useRouter()
  useEffect(() => {
    // let id:string | string[] = '';
    if (typeof window === "undefined") return null;
    // id.current = Router.query.id as string;
    // if(isNaN(+id.current)) {
    //   id.current = window.location.href.substr(-2, 1);
    // }
    // console.log('post: ', post);

    switch ( +post.id) {
      case 0:
        setData(claas_f);
        setName('Фильтры');
        break;
      case 1:
        setData(claas_w);
        setName('Рабочие органы');
        break;
      case 2:
        setData(claas_c);
        setName('Цепи');
        break;
      case 3:
        setData(claas_st);
        setName('Звездочки/Шестеренки');
        break;
      case 4:
        setData(claas_b);
        setName('Ремни');
        break;
      default:
        Router.push('/404');
    }

  }, [post])

  // if(id == -1) return null;

  // const [showModal, setShowModal] = useState(false);

  return (
    <DefaultLayout>
      <DefaultLayout.Header>
      </DefaultLayout.Header>
      <DefaultLayout.Body>
        <Menu></Menu>
        <div className={styles.container}>
          <h2>CLAAS {name}</h2>
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

export default ClaasItem;
