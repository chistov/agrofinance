import styles from "./OpalKultivaciya.module.scss";
import React from "react";
import {useRouter} from "next/router";

const Podryv = () => {
  const router = useRouter();

  return (
    <div className={styles.product_container}>
      <div className={styles.product_box}>
        <a onClick={() => { router.push(`${router.asPath}/item/19`)}} className={styles.link}>
          <div className="product-item-image">
            <img data-lazy-type="img" data-img="/OPaLL/media/static-media/7bc7d92c-7439-4f21-bfd4-cb40e704f899@w400.png"
                 alt="VEGA II" src="/assets/7bc7d92c-7439-4f21-bfd4-cb40e704f899@w300.webp.png"/>
          </div>
          <div className="product-item-text">

            <div className="product-item-title">
              <h3 className="red-title">VEGA II </h3>
              <h4 className="red-title">CAMBRIDGE КАТОК</h4>
            </div>
            <div className="perex">Катки можно применить в качестве машины для прикатывания почвы после осуществления
              посева,
              в случае использования гибкой планки можно использовать...
            </div>
          </div>
        </a>
      </div>
    </div>
  )
}

export default Podryv;
