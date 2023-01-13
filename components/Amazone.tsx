import styles from "../styles/Claas.module.scss";
import {Image} from "react-bootstrap";
import React from "react";

export default function Amazone() {

  return (
    <div className={styles.container}>
      <div className={styles.tyres_hdr}>AMAZONE</div>
      {/*<img className={styles.amazone} src="/assets/logo-amazone.svg" alt="amazone logo"/>*/}
      <div className={styles.subcontainer}>
        <div className={styles.amazonei}></div>
        <div className={styles.item}>
          <div className={styles.intro}>
            Предлагаем полный ассортимент запчастей, шин, комплектующих, расходных материалов и навесного оборудования на
            технику с нашего склада и под заказ. Фильтрующие элементы, расходники и наиболее ходовые
            запчасти есть в наличии на складе.
          </div>

          <div className={styles.contacts}>
            Заявку на запчасти AMAZONE Вы можете отправить на электронные адреса:
            <div className={styles.email}>sokolov@afs-nn.ru</div>
            <div className={styles.email}>degoeva@afs-nn.ru</div>
          </div>
        </div>
      </div>
    </div>
  );
}
