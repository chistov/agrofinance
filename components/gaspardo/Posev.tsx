import styles from "./Posev.module.scss";
import React from "react";
import {useRouter} from "next/router";

const Posev = () => {
  const router = useRouter();

  return (
    <>
      <h2 className={styles.subcategory}>Высокоскоростной посев</h2>
      <div className={styles.container}>

        <div className={styles.item}>
          <a onClick={() => { router.push(`${router.asPath}/item/55`)}} className={styles.link}>
            <div className="product">
              <div className="image">
                <img src="/assets_gaspardo/SetRatioSize300155-GCHRONO708.jpg" alt="GCHRONO708"/>
              </div>
              <div className="text">
                <h2>CHRONO 708</h2>
              </div>
            </div>
          </a>
        </div>
      </div>

      <h2 className={styles.subcategory}>Пневматические сеялки точного высева</h2>
      <div className={styles.container}>

        <div className={styles.item}>
          <div className="corner top"></div>
          <a onClick={() => { router.push(`${router.asPath}/item/56`)}} className={styles.link}>
            <div className="product">
              <div className="image">
                <img src="/assets_gaspardo/SetRatioSize300155-SP-8-s-russia-scontorno3.jpg"
                     alt="SP 8 s russia scontorno3"/>
              </div>
              <div className="text">
                <h2>SP</h2>
              </div>
            </div>
          </a>
        </div>

        <div className={styles.item}>
          <a onClick={() => { router.push(`${router.asPath}/item/57`)}} className={styles.link}>
            <div className="product">
              <div className="image">
                <img src="/assets_gaspardo/SetRatioSize300155-13344_0_mtemtr.jpg" alt="13344_0_mtemtr.jpg"/>
              </div>
              <div className="text">
                <h2>MTE - MTE ISOTRONIC</h2>
              </div>
            </div>
          </a>
        </div>

        <div className={styles.item}>
          <a onClick={() => { router.push(`${router.asPath}/item/58`)}} className={styles.link}>
            <div className="product">
              <div className="image">
                <img src="/assets_gaspardo/SetRatioSize300155-1943_0_sara250.jpg" alt="1943_0_sara250.jpg"/>
              </div>
              <div className="text">
                <h2>SARA</h2>
              </div>
            </div>
          </a>
        </div>

        <div className={styles.item}>
          <a onClick={() => { router.push(`${router.asPath}/item/59`)}} className={styles.link}>
            <div className="product">
              <div className="image">
                <img src="/assets_gaspardo/SetRatioSize300155-13413_0_martamtr.jpg" alt="13413_0_martamtr.jpg"/>
              </div>
              <div className="text">
                <h2>MARTA</h2>
              </div>
            </div>
          </a>
        </div>

        <div className={styles.item}>
          <a onClick={() => { router.push(`${router.asPath}/item/60`)}} className={styles.link}>
            <div className="product">
              <div className="image">
                <img src="/assets_gaspardo/SetRatioSize300155-13455_0_monicamtr.jpg" alt="13455_0_monicamtr.jpg"/>
              </div>
              <div className="text">
                <h2>MONICA - MONICA ISOTRONIC</h2>
              </div>
            </div>
          </a>
        </div>

        <div className={styles.item}>
          <a onClick={() => { router.push(`${router.asPath}/item/61`)}} className={styles.link}>
            <div className="product">
              <div className="image">
                <img src="/assets_gaspardo/SetRatioSize300155-GMTR8FPOST2.jpg" alt="GMTR8FPOST2"/>
              </div>
              <div className="text">
                <h2>MTR</h2>
              </div>
            </div>
          </a>
        </div>

        <div className={styles.item}>
          <a onClick={() => { router.push(`${router.asPath}/item/62`)}} className={styles.link}>
            <div className="product">
              <div className="image">
                <img src="/assets_gaspardo/SetRatioSize300155-13478_0_magicamtrplus.jpg"
                     alt="13478_0_magicamtrplus.jpg"/>
              </div>
              <div className="text">
                <h2>MAGICA - MAGICA ISOTRONIC</h2>
              </div>
            </div>
          </a>
        </div>

        <div className={styles.item}>
          <a onClick={() => { router.push(`${router.asPath}/item/63`)}} className={styles.link}>
            <div className="product">
              <div className="image">
                <img src="/assets_gaspardo/SetRatioSize300155-GMANTA12F45APERTA7.jpg" alt="GMANTA12F45APERTA7"/>
              </div>
              <div className="text">
                <h2>MANTA - MANTA ISOTRONIC</h2>
              </div>
            </div>
          </a>
        </div>

        <div className={styles.item}>
          <a onClick={() => { router.push(`${router.asPath}/item/64`)}} className={styles.link}>
            <div className="product">
              <div className="image">
                <img src="/assets_gaspardo/SetRatioSize300155-GJULIASTATICA12.jpg" alt="GJULIASTATICA12"/>
              </div>
              <div className="text">
                <h2>JULIA - JULIA ISOTRONIC</h2>
              </div>
            </div>
          </a>
        </div>

      </div>

      <h2 className={styles.subcategory}>Сеялки точного высева для овощных культур</h2>

      <div className={styles.container}>
        <div className={styles.item}>
          <a onClick={() => { router.push(`${router.asPath}/item/65`)}} className={styles.link}>
            <div className="product">
              <div className="image">
                <img src="/assets_gaspardo/SetRatioSize300155-1969_0_orietta.jpg" alt="1969_0_orietta.jpg"/>
              </div>
              <div className="text">
                <h2>ORIETTA</h2>
                <h3></h3>

              </div>
            </div>
          </a>
        </div>

      </div>

      <h2 className={styles.subcategory}>Сеялки прямого высева</h2>
      <div className={styles.container}>

        <div className={styles.item}>
          <a onClick={() => { router.push(`${router.asPath}/item/70`)}} className={styles.link}>
            <div className="product">
              <div className="image">


                <img src="/assets_gaspardo/SetRatioSize300155-1981_0_diretta.jpg" alt="1981_0_diretta.jpg"/>

              </div>
              <div className="text">
                <h2>DIRETTA</h2>
                <h3></h3>

              </div>
            </div>
          </a>
          <div className="corner"></div>
        </div>


        <div className={styles.item}>
          <div className="corner top"></div>
          <a onClick={() => { router.push(`${router.asPath}/item/71`)}} className={styles.link}>
            <div className="product">
              <div className="image">


                <img src="/assets_gaspardo/SetRatioSize300155-1982_0_dppronta.jpg" alt="1982_0_dppronta.jpg"/>

              </div>
              <div className="text">
                <h2>DP PRONTA GENIUS MASTER</h2>
                <h3></h3>

              </div>
            </div>
          </a>
          <div className="corner"></div>
        </div>


        <div className={styles.item}>
          <div className="corner top"></div>
          <a onClick={() => { router.push(`${router.asPath}/item/72`)}} className={styles.link}>
            <div className="product">
              <div className="image">
                <img src="/assets_gaspardo/SetRatioSize300155-GGIGANTEPRESS2.jpg" alt="GGIGANTEPRESS2"/>
              </div>
              <div className="text">
                <h2>GIGANTE PRESSURE</h2>
                <h3></h3>
                <p>Working width: <span>396-504-594</span></p>
              </div>
            </div>
          </a>
          <div className="corner"></div>
        </div>

      </div>


      <h2 className={styles.subcategory}>Комбинированные сеялки</h2>
      <div className={styles.container}>

        <div className={styles.item}>
          <a onClick={() => { router.push(`${router.asPath}/item/73`)}} className={styles.link}>
            <div className="product">
              <div className="image">


                <img src="/assets_gaspardo/SetRatioSize300155-GDAMAPLUS2.jpg" alt="GDAMAPLUS2"/>

              </div>
              <div className="text">
                <h2>DAMA </h2>
                <h3></h3>
                <p>Working width: <span>250-300-350-400</span></p><p>Working depth: <span>28</span></p>
              </div>
            </div>
          </a>
          <div className="corner"></div>
        </div>


        <div className={styles.item}>
          <a onClick={() => { router.push(`${router.asPath}/item/74`)}} className={styles.link}>
            <div className="product">
              <div className="image">
                <img src="/assets_gaspardo/SetRatioSize300155-alitalia+Orso425.JPG" alt="alitalia+Orso425"/>

              </div>
              <div className="text">
                <h2>ALITALIA</h2>
                <h3></h3>
                <p>Working width: <span>300-350-400</span></p><p>Working depth: <span>28</span></p>
              </div>
            </div>
          </a>
          <div className="corner"></div>
        </div>


        <div className={styles.item}>
          <a onClick={() => { router.push(`${router.asPath}/item/75`)}} className={styles.link}>
            <div className="product">
              <div className="image">
                <img src="/assets_gaspardo/SetRatioSize300155-centaurofalco3.jpg" alt="centaurofalco3"/>
              </div>
              <div className="text">
                <h2>CENTAURO COMBI</h2>
                <h3></h3>
                <p>Working width: <span>400-460-500-600</span></p>
              </div>
            </div>
          </a>
          <div className="corner"></div>
        </div>
      </div>
    </>
  )
}


export default Posev;
