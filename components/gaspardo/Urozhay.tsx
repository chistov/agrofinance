import styles from "./Urozhay.module.scss";
import React from "react";
import {useRouter} from "next/router";

const Urozhay = () => {
  const router = useRouter();

  return (
    <>
      <h2 className={styles.subcategory}>Садовые опрыскиватели</h2>
      <div className={styles.container}>

        <div className={styles.item}>
          <a onClick={() => {
            router.push(`${router.asPath}/item/84`)
          }} className={styles.link}>
            <div className="image">


              <img src="/assets_gaspardo/SetRatioSize300155-Apollo.JPG" alt="Apollo"/>

            </div>
            <div className="text">
              <h2>EXPO</h2>
              <h3></h3>
              <p>Employed power (pump included HP): <span>22-42</span></p><p>Air Flow
              m3/h: <span>25.500-25.500-42.500-25.500-56.000-42.500-56.000</span></p>
            </div>
          </a>
        </div>


        <div className={styles.item}>
          <a onClick={() => {
            router.push(`${router.asPath}/item/85`)
          }} className={styles.link}>
            <div className="image">


              <img src="/assets_gaspardo/SetRatioSize300155-UZNKAMBA-CANNONE.jpg" alt="UZNKAMBA CANNONE"/>

            </div>
            <div className="text">
              <h2>KAMBA CANNONE</h2>
              <h3></h3>
              <p>Employed power (pump included HP): <span>90</span></p><p>Air Flow m3/h: <span>24.500</span></p>
            </div>
          </a>
        </div>

        <div className={styles.item}>
          <a onClick={() => {
            router.push(`${router.asPath}/item/86`)
          }} className={styles.link}>
            <div className="image">


              <img src="/assets_gaspardo/SetRatioSize300155-UZNFUTURAJET3.jpg" alt="UZNFUTURAJET3"/>

            </div>
            <div className="text">
              <h2>FUTURA</h2>
              <h3></h3>

            </div>
          </a>
        </div>


        <div className={styles.item}>
          <a onClick={() => {
            router.push(`${router.asPath}/item/87`)
          }} className={styles.link}>
            <div className="image">


              <img src="/assets_gaspardo/SetRatioSize300155-UFUTURA-SIRENEF2GAS.jpg"
                   alt="UFUTURA SIRENEF2GAS"/>

            </div>
            <div className="text">
              <h2>FUTURA SIRENE</h2>
              <h3></h3>
              <p>Employed power (pump included HP): <span>90</span></p><p>Air Flow m3/h: <span>85.000</span></p>
            </div>
          </a>
        </div>
      </div>

      <h2 className={styles.subcategory}>Опрыскиватели</h2>
      <div className={styles.container}>

        <div className={styles.item}>
          <a onClick={() => {
            router.push(`${router.asPath}/item/88`)
          }} className={styles.link}>
            <div className="image">

              <img src="/assets_gaspardo/SetRatioSize300155-GIOVE-1000+Work-X-15-A-CMYK-300dpi3.JPG"
                   alt="GIOVE 1000+Work X 15 A CMYK 300dpi3"/>

            </div>
            <div className="text">
              <h2>TEKO</h2>
              <h3></h3>

            </div>
          </a>
        </div>


        <div className={styles.item}>
          <a onClick={() => {
            router.push(`${router.asPath}/item/89`)
          }} className={styles.link}>
            <div className="image">


              <img src="/assets_gaspardo/SetRatioSize300155-saturno-work425.JPG" alt="saturno work425"/>

            </div>
            <div className="text">
              <h2>TEMPO</h2>
              <h3></h3>
              <p>Boom (m): <span>15-18</span></p>
            </div>
          </a>
        </div>


        <div className={styles.item}>
          <a onClick={() => { router.push(`${router.asPath}/item/90`)}} className={styles.link}>
          <div className="image">


            <img src="/assets_gaspardo/SetRatioSize300155-GCAMPO22-32C.jpg" alt="GCAMPO22 32C"/>

          </div>
          <div className="text">
            <h2>CAMPO C</h2>
            <h3></h3>

          </div>
          </a>
        </div>
      </div>
    </>
  )
}

export default Urozhay;
