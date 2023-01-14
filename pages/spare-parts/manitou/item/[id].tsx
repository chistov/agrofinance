import {useRouter} from "next/router";
import useSWR from "swr";
import React, {useEffect, useState} from "react";
import styles from "@/styles/Claas.module.scss";
import Card from "react-bootstrap/Card";
import Modal from "@/components-common/Modal";
import DefaultLayout from "@/components-common/defaultLayout";
import Menu from "@/components-common/Menu";

import man_f from '@/assets/man_filters.json';
import man_p from '@/assets/man_povorot.json';
import man_r from '@/assets/man_rulev.json';
import man_s from '@/assets/man_stup.json';

const ManItem = (props) => {
  let id:string | string[] = '';
  const [data, setData] = useState([]);
  let name = '';

  const router = useRouter()
  useEffect(() => {
    if (typeof window === "undefined") return null;
    id = router.query.id
    if(isNaN(+id)) {
      id = window.location.href.substr(-2, 1)
    }

    switch ( +id) {
      case 0:
        setData(man_f);
        name = 'Фильтры';
        break;
      case 1:
        setData(man_r);
        name = 'Рулевые тяги';
        break;
      case 2:
        setData(man_s);
        name = 'Ступица передняго/заднего моста';
        break;
      case 3:
        setData(man_p);
        name = 'Поворотный кулак';
        break;
      default:
        router.push('/404');
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
          <h2>MANITOU {name}</h2>
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

export default ManItem;
