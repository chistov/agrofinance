import styles from "../styles/Claas.module.scss";
import {Image} from "react-bootstrap";
import React from "react";

export default function Grimme() {

  return (
    <div className={styles.container}>
      {/*<img className={styles.hdr} src="/assets/logo-grimme.svg" alt="grimme logo"/>*/}
      <div className={styles.tyres_hdr}>GRIMME</div>
      <div className={styles.subcontainer}>
        <div className={styles.grimme}></div>
        <div className={styles.item}>
          <div className={styles.intro}>
            Предлагаем полный ассортимент запчастей, шин, комплектующих, расходных материалов и навесного оборудования на
            технику с нашего склада и под заказ. Фильтрующие элементы, расходники и наиболее ходовые
            запчасти есть в наличии на складе.
          </div>

          <div className={styles.contacts}>
            Заявку на запчасти GRIMME Вы можете отправить на электронные адреса:
            <div className={styles.email}>antonov@afs-nn.ru</div>
          </div>
        </div>
      </div>
    </div>
  );
}
