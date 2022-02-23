import styles from "./OpalKultivaciya.module.scss";
import React from "react";
import {useRouter} from "next/router";

const Podryv = () => {
  const router = useRouter();

  return (
      <div className={styles.product_container}>
        <div className={styles.product_box}>
          <a onClick={() => { router.push(`${router.asPath}/item/17`)}} className={styles.link}>
            <div className="product-item-image">
              <img data-lazy-type="img" src="/assets/3f20e7bd-49b1-43d6-9b48-511f3f2f88de@w300.webp.png"
                   alt='Hector'
                   data-webp="/assets/3f20e7bd-49b1-43d6-9b48-511f3f2f88de@w400.webp"/>
            </div>
            <div className="product-item-text">

              <div className="product-item-title">
                <h3 className="red-title">HEKTOR I</h3>
                <h4 className="red-title">ГЛУБОКОРЫХЛИТЕЛЬ</h4>
              </div>
              <div className="perex">Это уникальная машина для глубокого рыхления, которая аэрирует почву без
                перемешивания слоев почвы.
              </div>
            </div>
          </a>
        </div>
        <div className={styles.product_box}>
          <a onClick={() => { router.push(`${router.asPath}/item/18`)}} className={styles.link}>
            <div className="product-item-image">
              <img data-lazy-type="img" src="/assets/3f20e7bd-49b1-43d6-9b48-511f3f2f88de@w300.webp.png"
                   alt="HEKTOR I" data-webp="/assets/3f20e7bd-49b1-43d6-9b48-511f3f2f88de@w400.webp"/>
            </div>
            <div className="product-item-text">

              <div className="product-item-title">
                <h3 className="red-title">HEKTOR I</h3>
                <h4 className="red-title">ГЛУБОКОРЫХЛИТЕЛЬ</h4>
              </div>
              <div className="perex">Это уникальная машина для глубокого рыхления, которая аэрирует почву без
                перемешивания слоев почвы.
              </div>
            </div>
          </a>
        </div>
      </div>
  )
}

export default Podryv;
