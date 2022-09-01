import styles from "../styles/Claas.module.scss";
import {Image} from "react-bootstrap";
import React from "react";

export default function Bobcat() {

  return (
    <div className={styles.container}>
      <img className={styles.hdr} src="/assets/bobcat-logo.png" alt="bobcat logo"/>
      <div className={styles.subcontainer}>
        <div className={styles.pochva}></div>
        <div classname={styles.item}>
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
