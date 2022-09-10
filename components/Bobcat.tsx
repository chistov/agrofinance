import styles from "../styles/Claas.module.scss";
import React from "react";

export default function Bobcat() {

  return (
    <div className={styles.container}>
      <img className={styles.hdr_bobcat} src="/assets/bobcat-logo.png" alt="bobcat logo"/>
      <div className={styles.subcontainer}>
        <div className={styles.bobcat}></div>
        <div classname={styles.item}>
          <div className={styles.intro}>
            Предлагаем полный ассортимент запчастей, шин, комплектующих, расходных материалов и навесного оборудования на
            технику с нашего склада и под заказ. Фильтрующие элементы, расходники и наиболее ходовые
            запчасти есть в наличии на складе.
          </div>

          <div className={styles.contacts}>
            Заявку на запчасти BOBCAT Вы можете отправить на электронные адреса:
            <div className={styles.email}>antonov@afs-nn.ru</div>
          </div>
        </div>
      </div>
    </div>
  );
}
