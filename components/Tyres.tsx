import styles from "../styles/Claas.module.scss";

export default function Tyres() {

  return (
    <div className={styles.container}>
      <div className={styles.subcontainer}>
        <div className={styles.pochva}></div>
        <div className={styles.item}>
          Предлагаем полный ассортимент запчастей, шин, комплектующих, расходных материалов и навесного оборудования на технику Bobcat (Бобкэт) с нашего склада и под заказ.
          Фильтрующие элементы, расходники и наиболее ходовые запчасти бобкэт всегда есть в наличии на складе
        </div>
      </div>
    </div>
  );
}
