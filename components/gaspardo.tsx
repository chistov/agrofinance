import styles from "../styles/Home.module.scss";
import React from "react";

export default function Gaspardo() {

  return (
    <div className={styles.gasp_container}>
      {/*<img className={styles.hdr_maschio} src="/assets/maschio-logo.png" alt="maschio logo"/>*/}
      <h2>Machio Gaspardo</h2>
      <div className={styles.subcontainer}>
        <div className={styles.pochva}></div>
        <div className={styles.item + ' ' + styles.pl10}>
          <h2>Подготовка почвы</h2>
          <ul>
            <li>Фрезы</li>
            <li>Бороны (вращающиеся бороны, дисковые бороны)</li>
            <li>Мульчировщики</li>
            <li>Косилки</li>
            <li>Глубокорыхлители</li>
            <li>Культиваторы (для предпосевной подготовки почвы, зубчатые культиваторы)</li>
            <li>Плуги</li>
          </ul>
        </div>
      </div>

      <div className={styles.subcontainer}>
        <div className={styles.item}>
          <h2>Посев и удобрение</h2>
          <ul>
            <li>Сеялки</li>
            <li>Сеялки точного высева, сеялки для овощей</li>
            <li>Сеялки для зерновых культур</li>
            <li>Сеялки прямого высева</li>
            <li>Комбинированные сеялки</li>
            <li>Разбрасыватели удобрений</li>
          </ul>
        </div>
        <div className={styles.posev}></div>
      </div>

      <div className={styles.subcontainer}>
        <div className={styles.oprisk}></div>
        <div className={styles.item}>
          <h2>Уход за урожаем</h2>
          <ul>
            <li>Опрыскиватели</li>
            <li>Садовые опрыскиватели</li>
          </ul>
        </div>
      </div>

      <div className={styles.subcontainer}>
        <div className={styles.item}>
          <h2>Заготовка сена</h2>
          <ul>
            <li>Косилки</li>
            <li>Ворошилки</li>
            <li>Грабли колесные</li>
            <li>Серп бары</li>
            <li>Пресс-подборщики (рулонные, тюковые)</li>
          </ul>
        </div>
        <div className={styles.kosilka}></div>
      </div>
    </div>
  );
}
