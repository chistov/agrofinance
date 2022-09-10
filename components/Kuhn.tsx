import styles from "../styles/Claas.module.scss";
import {Image} from "react-bootstrap";
import React from "react";

export default function Kuhn() {

  return (
    <div className={styles.container}>
      <img className={styles.kver} src="/assets/kuhn_logo.svg" alt="kuhn logo"/>
      <div className={styles.subcontainer}>
        <div className={styles.kuhn}></div>
        <div className={styles.item}>
          <div className={styles.intro}>
            Предлагаем полный ассортимент запчастей, шин, комплектующих, расходных материалов и навесного оборудования на
            технику с нашего склада и под заказ. Фильтрующие элементы, расходники и наиболее ходовые
            запчасти есть в наличии на складе.
          </div>

          <div className={styles.contacts}>
            Заявку на запчасти KUHN Вы можете отправить на электронные адреса:
            <div className={styles.email}>grachev@afs-nn.ru</div>
          </div>
        </div>
      </div>
    </div>
  );
}
