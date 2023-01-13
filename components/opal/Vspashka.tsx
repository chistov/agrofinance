import styles from "./OpalKultivaciya.module.scss";
import React from "react";
import {useRouter} from "next/router";

const Vspashka = () => {
  const router = useRouter();

  return (
      <div className={styles.product_container}>
        <div className={styles.product_box_vspashka}>
          <a onClick={() => { router.push(`${router.asPath}/brand/9`)}} className={styles.link}>
            <div className="product-brand-image">
              <img data-lazy-type="img" alt="JUPITER II 120"
                   src="/assets/9835430e-6671-43bd-be3c-d1039bcaedce@w300.webp.png"/>
            </div>
            <div className="product-brand-text">

              <div className="product-brand-title">
                <h3 className="red-title">JUPITER II 120</h3>
                <h4 className="red-title">ПЛУГ / НАВЕСНОЙ</h4>
              </div>
              <div className="perex">JUPITER II 120 - это навесные оборотные плуги с тремя или четырьмя рабочими
                корпусами, предназначенные для тракторов мощностью от 70 л.с. При...
              </div>
            </div>
          </a>
        </div>
        <div className={styles.product_box_vspashka}>
          <a onClick={() => { router.push(`${router.asPath}/brand/10`)}} className={styles.link}>
            <div className="product-brand-image">
              <img data-lazy-type="img" alt="APOLLO I 140"
                   src="/assets/ae76e787-7bd0-4e22-9571-6b17ff6df2b6@w300.webp.png"/>
            </div>
            <div className="product-brand-text">

              <div className="product-brand-title">
                <h3 className="red-title">APOLLO I 140</h3>
                <h4 className="red-title">ПЛУГ / НАВЕСНОЙ</h4>
              </div>
              <div className="perex">APOLLO I - это навесные оборотные плуги с 4-6 рабочими корпусами, предназначенные
                для тракторов мощностью от 120 л.с. Ширина захвата регулируется...
              </div>
            </div>
          </a>
        </div>
        <div className={styles.product_box_vspashka}>
          <a onClick={() => { router.push(`${router.asPath}/brand/11`)}} className={styles.link}>
            <div className="product-brand-image">
              <img data-lazy-type="img" alt="APOLLO I 140 V"
                   src="/assets/5790985a-ed3c-436c-9bba-f82bb98ef042@w300.webp.png"/>
            </div>
            <div className="product-brand-text">

              <div className="product-brand-title">
                <h3 className="red-title">APOLLO I 140 V</h3>
                <h4 className="red-title">ПЛУГ / НАВЕСНОЙ </h4>
              </div>
              <div className="perex">APOLLO I V - это навесные оборотные плуги с 4-6 рабочими корпусами, предназначенные
                для тракторов мощностью от 120 л.с. Ширина захвата плавно...
              </div>
            </div>
          </a>
        </div>
        <div className={styles.product_box_vspashka}>
          <a onClick={() => { router.push(`${router.asPath}/brand/12`)}} className={styles.link}>
            <div className="product-brand-image">
              <img data-lazy-type="img" alt="ORION I 180"
                   src="/assets/77d4fd4c-5b9a-4ae6-b3d1-b8e8255f7c63@w300.webp.png"/>
            </div>
            <div className="product-brand-text">

              <div className="product-brand-title">
                <h3 className="red-title">ORION I 180</h3>
                <h4 className="red-title">ПЛУГ / ПОЛУНАВЕСНОЙ</h4>
              </div>
              <div className="perex">ORION I 180 - это полунавесные оборотные плуги с 5-9 рабочими корпусами. Система
                оборота плуга состоит из двух цилиндров,
                помещенных на качающемся...
              </div>
            </div>
          </a>
        </div>
        <div className={styles.product_box_vspashka}>
          <a onClick={() => { router.push(`${router.asPath}/brand/13`)}} className={styles.link}>
            <div className="product-brand-image">
              <img data-lazy-type="img" alt="ORION II 180"
                   src="/assets/e9ea40b1-d355-49e7-b589-ff638fb8175f@w300.png"/>
            </div>
            <div className="product-brand-text">

              <div className="product-brand-title">
                <h3 className="red-title">ORION II 180 </h3>
                <h4 className="red-title">ПЛУГ / ПОЛУНАВЕСНОЙ</h4>
              </div>
              <div className="perex">ORION II 180 - это полунавесные оборотные плуги с 6-9 рабочими корпусами. Система
                оборота плуга состоит из цилиндров, помещенных на качающемся...
              </div>
            </div>
          </a>
        </div>
        <div className={styles.product_box_vspashka}>
          <a onClick={() => { router.push(`${router.asPath}/brand/14`)}} className={styles.link}>
            <div className="product-brand-image">
              <img data-lazy-type="img" alt="ORION II 180 V"
                   src="/assets/3a6d9e5d-7cd4-449c-b79a-5145b9614711@w300.webp.png"/>
            </div>
            <div className="product-brand-text">

              <div className="product-brand-title">
                <h3 className="red-title">ORION II 180 V </h3>
                <h4 className="red-title">ПЛУГ / ПОЛУНАВЕСНОЙ</h4>
              </div>
              <div className="perex">ORION II 180 V - это полунавесные оборотные плуги с 6-9 рабочими корпусами,
                предназначенные для тракторов от 180 л.с. Ширина захвата плавно...
              </div>
            </div>
          </a>
        </div>
        <div className={styles.product_box_vspashka}>
          <a onClick={() => { router.push(`${router.asPath}/brand/15`)}} className={styles.link}>
            <div className="product-brand-image">
              <img data-lazy-type="img" alt="ORION II 180 OL"
                   src="/assets/219a1eeb-60e9-414f-b81a-11608288012d@w300.webp.png"/>
            </div>
            <div className="product-brand-text">

              <div className="product-brand-title">
                <h3 className="red-title">ORION II 180 OL</h3>
                <h4 className="red-title">ПЛУГ / ПОЛУНАВЕСНОЙ</h4>
              </div>
              <div className="perex">ORION II 180 OL - это плуги с 6-9 рабочими корпусами и модульной системой.
                Гидравлическая система плуга позволяет вспашку вне борозды, однако...
              </div>
            </div>
          </a>
        </div>
        <div className={styles.product_box_vspashka}>
          <a onClick={() => { router.push(`${router.asPath}/brand/16`)}} className={styles.link}>
            <div className="product-brand-image">
              <img data-lazy-type="img" alt="ORION II 180 OL V"
                   src="/assets/000f3743-d3fe-4fc8-be56-b036ccfef73a@w300.webp.png"/>
            </div>
            <div className="product-brand-text">

              <div className="product-brand-title">
                <h3 className="red-title">ORION II 180 OL V</h3>
                <h4 className="red-title">ПЛУГ / ПОЛУНАВЕСНОЙ</h4>
              </div>
              <div className="perex">Лучший выбор для фермеров с гусеничными тракторами, которые ищут возможность
                вспашки
                вне борозды с системой Vario для гидравлической регулировки...
              </div>
            </div>
          </a>
        </div>
      </div>
  );
}

export default Vspashka;
