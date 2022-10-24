import styles from "../styles/Claas.module.scss";
import {Image} from "react-bootstrap";
import React from "react";
import useSWR from 'swr';

export default function Claas() {
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data } = useSWR('/assets/f.json', fetcher);
  console.log('d: ', data);

  return (
    <div className={styles.container}>
      <h2>CLAAS</h2>
      <div className={styles.subcontainer}>
        { data && <div>data.ddd</div> }
        <div className={styles.pochva}></div>
        <div className={styles.item}>
          <div className={styles.intro}>
            Предлагаем полный ассортимент запчастей, шин, комплектующих, расходных материалов и навесного оборудования на
            технику с нашего склада и под заказ. Фильтрующие элементы, расходники и наиболее ходовые
            запчасти есть в наличии на складе.
          </div>

          <div className={styles.contacts}>
            Заявку на запчасти CLAAS Вы можете отправить на электронные адреса:
            <div className={styles.email}>sokolov@afs-nn.ru</div>
            <div className={styles.email}>urakov@afs-nn.ru</div>
            <div className={styles.email}>grachev@afs-nn.ru</div>
            <div className={styles.email}>degoeva@afs-nn.ru</div>
            <div className={styles.email}>antonov@afs-nn.ru</div>
          </div>
        </div>
      </div>
    </div>
  );
}
