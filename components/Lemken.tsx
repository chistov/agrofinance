import styles from "../styles/Claas.module.scss";
import {Image} from "react-bootstrap";
import React from "react";

export default function Lemken() {

  return (
    <div className={styles.container}>
      <img className={styles.hdr} src="/assets/lemken-logo.svg" alt="lemken logo"/>
      <div className={styles.subcontainer}>
        <div className={styles.lemken}></div>
        <div className={styles.item}>
          <div className={styles.intro}>
            Предлагаем полный ассортимент запчастей на технику LEMKEN (Лемкен) с нашего склада и под заказ. Наиболее ходовые
            запчасти есть в наличии на складе.
          </div>

          <div className={styles.contacts}>
            Заявку на запчасти LEMKEN Вы можете отправить на электронные адреса:
            <div className={styles.email}>sokolov@afs-nn.ru</div>
            <div className={styles.email}>degoeva@afs-nn.ru</div>
          </div>
        </div>
      </div>
    </div>
  );
}
