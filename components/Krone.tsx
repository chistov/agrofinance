import styles from "../styles/Claas.module.scss";
import {Image} from "react-bootstrap";
import React from "react";

export default function Krone() {

  return (
    <div className={styles.container}>
      <img className={styles.kver} src="/assets/krone_logo.png" alt="krone logo"/>
      <div className={styles.subcontainer}>
        <div className={styles.krone}></div>
        <div classname={styles.item}>
          <div className={styles.intro}>
            Предлагаем полный ассортимент запчастей, шин, комплектующих, расходных материалов и навесного оборудования на
            технику с нашего склада и под заказ. Фильтрующие элементы, расходники и наиболее ходовые
            запчасти есть в наличии на складе.
          </div>

          <div className={styles.contacts}>
            Заявку на запчасти KRONE Вы можете отправить на электронные адреса:
            <div className={styles.email}>antonov@afs-nn.ru</div>
          </div>
        </div>
      </div>
    </div>
  );
}
