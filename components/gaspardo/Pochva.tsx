import styles from "./Pochva.module.scss";
import React from "react";
import {useRouter} from "next/router";

const Pochva = () => {
  const router = useRouter();
  return (
    <> {/* Must be here! Global grid */ }
      <h2 className={styles.subcategory}>Вращающиеся фрезы</h2>
      <div className={styles.container}>
        <div className={styles.item}>
          <div className="corner top"></div>
          <a onClick={() => { router.push(`${router.asPath}/item/1`)}} className={styles.link}>
            <div className="product">
              <div className="image">

                <img src="/assets_gaspardo/SetRatioSize300155-15_0_l.jpg" alt="15_0_l.jpg"/>

              </div>
              <div className="text">
                <h2>L</h2>
                <h3></h3>
                <p>Working width: <span>105-115-125-85</span></p><p>Working depth: <span>16</span></p>
              </div>
            </div>
          </a>
        </div>

        <div className={styles.item}>
          <div className="corner top"></div>
          <a onClick={() => { router.push(`${router.asPath}/item/2`)}} className={styles.link}>
            <div className="product">
              <div className="image">

                <img src="/assets_gaspardo/SetRatioSize300155-16_0_w.jpg" alt="16_0_w.jpg"/>

              </div>
              <div className="text">
                <h2>W</h2>
                <h3></h3>
                <p>Working width: <span>105-125-145-165</span></p><p>Working depth: <span>18</span></p>
              </div>
            </div>
          </a>
        </div>


        <div className={styles.item}>
          <div className="corner top"></div>
          <a onClick={() => { router.push(`${router.asPath}/item/3`)}} className={styles.link}>
            <div className="product">
              <div className="image">

                <img src="/assets_gaspardo/SetRatioSize300155-16054_0_a.jpg" alt="16054_0_a.jpg"/>

              </div>
              <div className="text">
                <h2>A</h2>
                <h3></h3>
                <p>Working width: <span>105-125-145-165-185</span></p><p>Working depth: <span>20</span></p>
              </div>
            </div>
          </a>
        </div>

        <div className={styles.item}>
          <div className="corner top"></div>
          <a onClick={() => { router.push(`${router.asPath}/item/4`)}} className={styles.link}>
            <div className="product">
              <div className="image">

                <img src="/assets_gaspardo/SetRatioSize300155-19_0_h.jpg" alt="19_0_h.jpg"/>

              </div>
              <div className="text">
                <h2>H</h2>
                <h3></h3>
                <p>Working width: <span>125-145-165-185-205</span></p><p>Working depth: <span>22</span></p>
              </div>
            </div>
          </a>
        </div>

        <div className={styles.item}>
          <div className="corner top"></div>
          <a onClick={() => { router.push(`${router.asPath}/item/5`)}} className={styles.link}>
            <div className="product">
              <div className="image">

                <img src="/assets_gaspardo/SetRatioSize300155-20_0_u.jpg" alt="20_0_u.jpg"/>

              </div>
              <div className="text">
                <h2>U</h2>
                <h3></h3>
                <p>Working width: <span>135-145-160-185-210-235</span></p><p>Working depth: <span>22</span></p>
              </div>
            </div>
          </a>
        </div>

        <div className={styles.item}>
          <div className="corner top"></div>
          <a onClick={() => { router.push(`${router.asPath}/item/6`)}} className={styles.link}>
            <div className="product">
              <div className="image">

                <img src="/assets_gaspardo/SetRatioSize300155-21_0_b.jpg" alt="21_0_b.jpg"/>

              </div>
              <div className="text">
                <h2>B</h2>
                <h3></h3>
                <p>Working width: <span>160-185-210-235</span></p><p>Working depth: <span>27</span></p>
              </div>
            </div>
          </a>
        </div>

        <div className={styles.item}>
          <div className="corner top"></div>
          <a onClick={() => { router.push(`${router.asPath}/item/7`)}} className={styles.link}>
            <div className="product">
              <div className="image">

                <img src="/assets_gaspardo/SetRatioSize300155-22_0_c.jpg" alt="22_0_c.jpg"/>

              </div>
              <div className="text">
                <h2>C</h2>
                <h3></h3>
                <p>Working width: <span>210-235-260-285-310</span></p><p>Working depth: <span>27</span></p>
              </div>
            </div>
          </a>
        </div>

        <div className={styles.item}>
          <div className="corner top"></div>
          <a onClick={() => { router.push(`${router.asPath}/item/8`)}} className={styles.link}>
            <div className="product">
              <div className="image">

                <img src="/assets_gaspardo/SetRatioSize300155-MSCF.jpg" alt="MSCF"/>

              </div>
              <div className="text">
                <h2>SC</h2>
                <h3></h3>
                <p>Working width: <span>235-260-285-310</span></p><p>Working depth: <span>28</span></p>
              </div>
            </div>
          </a>
        </div>


        <div className={styles.item}>
          <div className="corner top"></div>
          <a onClick={() => { router.push(`${router.asPath}/item/9`)}} className={styles.link}>
            <div className="product">
              <div className="image">

                <img src="/assets_gaspardo/SetRatioSize300155-MGIGAF.JPG" alt="MGIGAF"/>

              </div>
              <div className="text">
                <h2>G</h2>
                <h3></h3>
                <p>Working width: <span>275-310-360-425</span></p><p>Working depth: <span>29</span></p>
              </div>
            </div>
          </a>
        </div>


        <div className={styles.item}>
          <div className="corner top"></div>
          <a onClick={() => { router.push(`${router.asPath}/item/10`)}} className={styles.link}>
            <div className="product">
              <div className="image">

                <img src="/assets_gaspardo/SetRatioSize300155-pumacover3.jpg" alt="pumacover3"/>

              </div>
              <div className="text">
                <h2>PUMA</h2>
                <h3></h3>
                <p>Working width: <span>378-428-478</span></p><p>Working depth: <span>27</span></p>
              </div>
            </div>
          </a>
        </div>

        <div className={styles.item}>
          <div className="corner top"></div>
          <a onClick={() => { router.push(`${router.asPath}/item/11`)}} className={styles.link}>
            <div className="product">
              <div className="image">

                <img src="/assets_gaspardo/SetRatioSize300155-MPUMACOBRAF.jpg" alt="MPUMACOBRAF"/>

              </div>
              <div className="text">
                <h2>PUMA COBRA</h2>
                <h3></h3>
                <p>Working width: <span>328-378-428</span></p><p>Working depth: <span>27</span></p>
              </div>
            </div>
          </a>
        </div>

        <div className={styles.item}>
          <div className="corner top"></div>
          <a onClick={() => { router.push(`${router.asPath}/item/12`)}} className={styles.link}>
            <div className="product">
              <div className="image">

                <img src="/assets_gaspardo/SetRatioSize300155-Pantera-425.JPG" alt="Pantera 425"/>

              </div>
              <div className="text">
                <h2>PANTERA XL</h2>
                <h3></h3>
                <p>Working width: <span>428-478-528-578-628</span></p><p>Working depth: <span>29</span></p>
              </div>
            </div>
          </a>
        </div>
      </div>

      <h2 className={styles.subcategory}>Вращающиеся бороны</h2>
      <div className={styles.container}>

        <div className={styles.item}>
          <div className="corner top"></div>
          <a onClick={() => { router.push(`${router.asPath}/item/13`)}} className={styles.link}>
            <div className="product">
              <div className="image">

                <img src="/assets_gaspardo/SetRatioSize300155-MDELFINOF3.jpg" alt="MDELFINOF3"/>

              </div>
              <div className="text">
                <h2>DELFINO DL</h2>
                <h3></h3>
                <p>Working width: <span>130-150-180-200</span></p><p>Working depth: <span>28</span></p>
              </div>
            </div>
          </a>
        </div>

        <div className={styles.item}>
          <div className="corner top"></div>
          <a onClick={() => { router.push(`${router.asPath}/item/15`)}} className={styles.link}>
            <div className="product">
              <div className="image">

                <img src="/assets_gaspardo/SetRatioSize300155-DRAGOF.jpg" alt="DRAGOF"/>

              </div>
              <div className="text">
                <h2>DRAGO DC</h2>
                <h3></h3>
                <p>Working width: <span>250-300</span></p><p>Working depth: <span>28</span></p>
              </div>
            </div>
          </a>
        </div>

        <div className={styles.item}>
          <div className="corner top"></div>
          <a onClick={() => { router.push(`${router.asPath}/item/14`)}} className={styles.link}>
            <div className="product">
              <div className="image">

                <img src="/assets_gaspardo/SetRatioSize300155-MDAINOF10.jpg" alt="MDAINOF10"/>

              </div>
              <div className="text">
                <h2>DAINO DS</h2>
                <h3></h3>
                <p>Working width: <span>250-300</span></p><p>Working depth: <span>28</span></p>
              </div>
            </div>
          </a>
       </div>

        <div className={styles.item}>
          <div className="corner top"></div>
          <a onClick={() => { router.push(`${router.asPath}/item/16`)}} className={styles.link}>
            <div className="product">
              <div className="image">

                <img src="/assets_gaspardo/SetRatioSize300155-MDOMINATOR425.jpg" alt="MDOMINATOR425"/>

              </div>
              <div className="text">
                <h2>DOMINATOR DM</h2>
                <h3></h3>
                <p>Working width: <span>300-350-400</span></p><p>Working depth: <span>28</span></p>
              </div>
            </div>
          </a>
        </div>

        <div className={styles.item}>
          <div className="corner top"></div>
          <a onClick={() => { router.push(`${router.asPath}/item/17`)}} className={styles.link}>
            <div className="product">
              <div className="image">

                <img src="/assets_gaspardo/SetRatioSize300155-MDMR425.jpg" alt="MDMR425"/>

              </div>
              <div className="text">
                <h2>DOMINATOR DM RAPIDO PLUS</h2>
                <h3></h3>
                <p>Working width: <span>300-350-400</span></p><p>Working depth: <span>28</span></p>
              </div>
            </div>
          </a>
        </div>

        <div className={styles.item}>
          <div className="corner top"></div>
          <a onClick={() => { router.push(`${router.asPath}/item/18`)}} className={styles.link}>
            <div className="product">
              <div className="image">

                <img src="/assets_gaspardo/SetRatioSize300155-MORSOFNHD.png" alt="MORSOFNHD"/>

              </div>
              <div className="text">
                <h2>ORSO RAPIDO PLUS (COMBI)</h2>
                <h3></h3>
                <p>Working width: <span>300-350-400-450</span></p><p>Working depth: <span>28</span></p>
              </div>
            </div>
          </a>
        </div>

        <div className={styles.item}>
          <div className="corner top"></div>
          <a onClick={() => { router.push(`${router.asPath}/item/19`)}} className={styles.link}>
            <div className="product">
              <div className="image">

                <img src="/assets_gaspardo/SetRatioSize300155-MFALCOFNHD.png" alt="MFALCOFNHD"/>

              </div>
              <div className="text">
                <h2>FALCO</h2>
                <h3></h3>
                <p>Working width: <span>360-400-460-500</span></p><p>Working depth: <span>28</span></p>
              </div>
            </div>
          </a>
        </div>

        <div className={styles.item}>
          <div className="corner top"></div>
          <a onClick={() => { router.push(`${router.asPath}/item/20`)}} className={styles.link}>
            <div className="product">
              <div className="image">

                <img src="/assets_gaspardo/SetRatioSize300155-MGABBIANOFNHD5.jpg" alt="MGABBIANOFNHD5"/>

              </div>
              <div className="text">
                <h2>GABBIANO</h2>
                <h3></h3>
                <p>Working width: <span>400-460-500-600</span></p><p>Working depth: <span>28</span></p>
              </div>
            </div>
          </a>
        </div>

        <div className={styles.item}>
          <div className="corner top"></div>
          <a onClick={() => { router.push(`${router.asPath}/item/21`)}} className={styles.link}>
            <div className="product">
              <div className="image">

                <img src="/assets_gaspardo/SetRatioSize300155-MAQUILA425.jpg" alt="MAQUILA425"/>

              </div>
              <div className="text">
                <h2>AQUILA</h2>
                <h3></h3>
                <p>Working width: <span>400-460-500-600</span></p><p>Working depth: <span>28</span></p>
              </div>
            </div>
          </a>
        </div>

        <div className={styles.item}>
          <div className="corner top"></div>
          <a onClick={() => { router.push(`${router.asPath}/item/22`)}} className={styles.link}>
            <div className="product">
              <div className="image">

                <img src="/assets_gaspardo/SetRatioSize300155-MAQUILAR425.jpg" alt="MAQUILAR425"/>

              </div>
              <div className="text">
                <h2>AQUILA RAPIDO PLUS</h2>
                <h3></h3>
                <p>Working width: <span>400-460-500-600</span></p><p>Working depth: <span>28</span></p>
              </div>
            </div>
          </a>
        </div>

        <div className={styles.item}>
          <div className="corner top"></div>
          <a onClick={() => { router.push(`${router.asPath}/item/23`)}} className={styles.link}>
            <div className="product">
              <div className="image">

                <img src="/assets_gaspardo/SetRatioSize300155-MJUMBOHDFNHD.png" alt="MJUMBOHDFNHD"/>

              </div>
              <div className="text">
                <h2>JUMBO RAPIDO PLUS</h2>
                <h3></h3>
                <p>Working width: <span>600-700-800</span></p><p>Working depth: <span>28</span></p>
              </div>
            </div>
          </a>
        </div>
      </div>

      <h2 className={styles.subcategory}>Мульчировщики</h2>
      <div className={styles.container}>

        <div className={styles.item}>
          <div className="corner top"></div>
          <a onClick={() => { router.push(`${router.asPath}/item/24`)}} className={styles.link}>
            <div className="product">
              <div className="image">

                <img src="/assets_gaspardo/SetRatioSize300155-4094_0_furba.jpg" alt="4094_0_furba.jpg"/>

              </div>
              <div className="text">
                <h2>FURBA</h2>
                <h3></h3>
                <p>Working width: <span>115-135-155-170-95</span></p>
              </div>
            </div>
          </a>
        </div>

        <div className={styles.item}>
          <div className="corner top"></div>
          <a onClick={() => { router.push(`${router.asPath}/item/25`)}} className={styles.link}>
            <div className="product">
              <div className="image">
                <img src="/assets_gaspardo/SetRatioSize300155-50_0_barbi.jpg" alt="50_0_barbi.jpg"/>
              </div>
              <div className="text">
                <h2>BARBI</h2>
                <h3></h3>
                <p>Working width: <span>100-120-140-160-175</span></p>
              </div>
            </div>
          </a>
        </div>

        <div className={styles.item}>
          <div className="corner top"></div>
          <a onClick={() => { router.push(`${router.asPath}/item/26`)}} className={styles.link}>
            <div className="product">
              <div className="image">

                <img src="/assets_gaspardo/SetRatioSize300155-49_0_birba.jpg" alt="49_0_birba.jpg"/>

              </div>
              <div className="text">
                <h2>BIRBA</h2>
                <h3></h3>
                <p>Working width: <span>115-135-155-95</span></p>
              </div>
            </div>
          </a>
        </div>

        <div className={styles.item}>
          <div className="corner top"></div>
          <a onClick={() => { router.push(`${router.asPath}/item/27`)}} className={styles.link}>
            <div className="product">
              <div className="image">

                <img src="/assets_gaspardo/SetRatioSize300155-51_0_brava.jpg" alt="51_0_brava.jpg"/>

              </div>
              <div className="text">
                <h2>BRAVA</h2>
                <h3></h3>
                <p>Working width: <span>115-135-155-173-195-230-257</span></p>
              </div>
            </div>
          </a>
        </div>


        <div className={styles.item}>
          <div className="corner top"></div>
          <a onClick={() => { router.push(`${router.asPath}/item/28`)}} className={styles.link}>
            <div className="product">
              <div className="image">

                <img src="/assets_gaspardo/SetRatioSize300155-54_0_bella.jpg" alt="54_0_bella.jpg"/>

              </div>
              <div className="text">
                <h2>BELLA</h2>
                <h3></h3>
                <p>Working width: <span>135-155-170-190-210</span></p>
              </div>
            </div>
          </a>
        </div>

        <div className={styles.item}>
          <div className="corner top"></div>
          <a onClick={() => { router.push(`${router.asPath}/item/29`)}} className={styles.link}>
            <div className="product">
              <div className="image">

                <img src="/assets_gaspardo/SetRatioSize300155-55_0_corazza.jpg" alt="55_0_corazza.jpg"/>

              </div>
              <div className="text">
                <h2>CORAZZA</h2>
                <h3></h3>
                <p>Working width: <span>155-170-190-210-230</span></p>
              </div>
            </div>
          </a>
        </div>


        <div className={styles.item}>
          <div className="corner top"></div>
          <a onClick={() => { router.push(`${router.asPath}/item/30`)}} className={styles.link}>
            <div className="product">
              <div className="image">

                <img src="/assets_gaspardo/SetRatioSize300155-56_0_tigre.jpg" alt="56_0_tigre.jpg"/>

              </div>
              <div className="text">
                <h2>TIGRE</h2>
                <h3></h3>
                <p>Working width: <span>210-226-257-276-298</span></p>
              </div>
            </div>
          </a>
        </div>


        <div className={styles.item}>
          <div className="corner top"></div>
          <a onClick={() => { router.push(`${router.asPath}/item/31`)}} className={styles.link}>
            <div className="product">
              <div className="image">

                <img src="/assets_gaspardo/SetRatioSize300155-BISONTE-REV00-R02.303.png" alt="BISONTE REV00 R02.303"/>

              </div>
              <div className="text">
                <h2>BISONTE</h2>
                <h3></h3>
                <p>Working width: <span>226-257-276-298</span></p>
              </div>
            </div>
          </a>
        </div>


        <div className={styles.item}>
          <a onClick={() => { router.push(`${router.asPath}/item/32`)}} className={styles.link}>
            <div className="product">
              <div className="image">

                <img src="/assets_gaspardo/SetRatioSize300155-61_0_chiara.jpg" alt="61_0_chiara.jpg"/>

              </div>
              <div className="text">
                <h2>CHIARA</h2>
                <h3></h3>
                <p>Working width: <span>155-185-205-235-255</span></p>
              </div>
            </div>
          </a>
        </div>

        <div className={styles.item}>
          <a onClick={() => { router.push(`${router.asPath}/item/33`)}} className={styles.link}>
            <div className="product">
              <div className="image">
                <img src="/assets_gaspardo/SetRatioSize300155-62_0_tornado.jpg" alt="62_0_tornado.jpg"/>
              </div>
              <div className="text">
                <h2>TORNADO</h2>
                <h3></h3>
                <p>Working width: <span>230-250-280-310</span></p>
              </div>
            </div>
          </a>
        </div>

        <div className={styles.item}>
          <a onClick={() => { router.push(`${router.asPath}/item/34`)}} className={styles.link}>
            <div className="product">
              <div className="image">
                <img src="/assets_gaspardo/SetRatioSize300155-7375_0_leopard.jpg" alt="7375_0_leopard.jpg"/>
              </div>
              <div className="text">
                <h2>LEOPARD</h2>
                <h3></h3>
                <p>Working width: <span>320</span></p>
              </div>
            </div>
          </a>
        </div>

        <div className={styles.item}>
          <a onClick={() => { router.push(`${router.asPath}/item/35`)}} className={styles.link}>
            <div className="product">
              <div className="image">
                <img src="/assets_gaspardo/SetRatioSize300155-8454_0_gemella.jpg" alt="8454_0_gemella.jpg"/>
              </div>
              <div className="text">
                <h2>GEMELLA</h2>
                <h3></h3>
                <p>Working width: <span>465-620</span></p>
              </div>
            </div>
          </a>
        </div>

      </div>


      <h2 className={styles.subcategory}>Глубокорыхлители</h2>
      <div className={styles.container}>
        <div className={styles.item}>
          <a onClick={() => { router.push(`${router.asPath}/item/36`)}} className={styles.link}>
            <div className="product">
              <div className="image">
                <img src="/assets_gaspardo/SetRatioSize300155-MPINOCCHIO-CSSF5.jpg" alt="MPINOCCHIO CSSF5"/>

              </div>
              <div className="text">
                <h2>PINOCCHIO</h2>
                <h3></h3>
                <p>Working width: <span>130-170-200-250-300</span></p><p>Working depth: <span>45</span></p>
              </div>
            </div>
          </a>
        </div>


        <div className={styles.item}>
          <a onClick={() => { router.push(`${router.asPath}/item/37`)}} className={styles.link}>
            <div className="product">
              <div className="image">

                <img src="/assets_gaspardo/SetRatioSize300155-MATTILA-CSSF2.JPG" alt="MATTILA CSSF2"/>

              </div>
              <div className="text">
                <h2>ATTILA</h2>
                <p>Working width: <span>250-300</span></p><p>Working depth: <span>50</span></p>
              </div>
            </div>
          </a>
        </div>


        <div className={styles.item}>
          <div className="corner top"></div>
          <a onClick={() => { router.push(`${router.asPath}/item/38`)}} className={styles.link}>
            <div className="product">
              <div className="image">

                <img src="/assets_gaspardo/SetRatioSize300155-20170530attilahydropneumatics2.jpg"
                     alt="20170530attilahydropneumatics2"/>

              </div>
              <div className="text">
                <h2>ATTILA HYDRO</h2>
                <h3></h3>
                <p>Working width: <span>250-300-400</span></p><p>Working depth: <span>50</span></p>
              </div>
            </div>
          </a>
        </div>




        <div className={styles.item}>
          <a onClick={() => { router.push(`${router.asPath}/item/39`)}} className={styles.link}>
            <div className="product">
              <div className="image">

                <img src="/assets_gaspardo/SetRatioSize300155-MARTIGLIO-CSSF4.JPG" alt="MARTIGLIO CSSF4"/>

              </div>
              <div className="text">
                <h2>ARTIGLIO</h2>
                <h3></h3>
                <p>Working width: <span>250-300-400-500</span></p><p>Working depth: <span>55</span></p>
              </div>
            </div>
          </a>

        </div>


        <div className={styles.item}>
          <a onClick={() => { router.push(`${router.asPath}/item/40`)}} className={styles.link}>
            <div className="product">
              <div className="image">
                <img src="/assets_gaspardo/SetRatioSize300155-20160303artigliohydropneumatics2.jpg"
                     alt="20160303artigliohydropneumatics2"/>
              </div>
              <div className="text">
                <h2>ARTIGLIO HYDRO</h2>
                <h3></h3>
                <p>Working width: <span>250-300-400</span></p><p>Working depth: <span>55</span></p>
              </div>
            </div>
          </a>

        </div>


        <div className={styles.item}>
          <div className="corner top"></div>
          <a onClick={() => { router.push(`${router.asPath}/item/41`)}} className={styles.link}>
            <div className="product">
              <div className="image">

                <img src="/assets_gaspardo/SetRatioSize300155-MARTIGLIO-MAGNUMF2.jpg" alt="MARTIGLIO MAGNUMF2"/>

              </div>
              <div className="text">
                <h2>ARTIGLIO MAGNUM</h2>
                <p>Working width: <span>250-300-400</span></p><p>Working depth: <span>70</span></p>
              </div>
            </div>
          </a>

        </div>





        <div className={styles.item}>
          <div className="corner top"></div>
          <a onClick={() => { router.push(`${router.asPath}/item/42`)}} className={styles.link}>
            <div className="product">
              <div className="image">

                <img src="/assets_gaspardo/SetRatioSize300155-20170823diablos2.JPG" alt="20170823diablos2"/>

              </div>
              <div className="text">
                <h2>DIABLO</h2>
                <p>Working depth: <span>45</span></p>
              </div>
            </div>
          </a>

        </div>
      </div>
      {/* end sub cat */
      }


      <h2 className={styles.subcategory}>Дисковые бороны</h2>
      <div className={styles.container}>

        <div className={styles.item}>
          <a onClick={() => { router.push(`${router.asPath}/item/43`)}} className={styles.link}>
            <div className="product">
              <div className="image">
                <img src="/assets_gaspardo/SetRatioSize300155-ufocpreview.jpg" alt="MPRESTOSDFIXF"/>
              </div>
              <div className="text">
                <h2>UFO TZAR</h2>
                <h3></h3>
                <p>Working width: <span>600</span></p><p>Working depth: <span>da 6 a 12</span></p>
              </div>
            </div>
          </a>
        </div>

        <div className={styles.item}>
          <a onClick={() => { router.push(`${router.asPath}/item/44`)}} className={styles.link}>
            <div className="product">
              <div className="image">

                <img src="/assets_gaspardo/SetRatioSize300155-MPRESTOSDFIXF.jpg" alt="MPRESTOSDFIXF"/>

              </div>
              <div className="text">
                <h2>VELOCE</h2>
                <h3></h3>
                <p>Working width: <span>185-250-300-350-400</span></p><p>Working depth: <span>3-10</span></p>
              </div>
            </div>
          </a>
        </div>


        <div className={styles.item}>
          <a onClick={() => { router.push(`${router.asPath}/item/45`)}} className={styles.link}>
            <div className="product">
              <div className="image">

                <img src="/assets_gaspardo/SetRatioSize300155-veloce-pp.jpg" alt="veloce pp"/>

              </div>
              <div className="text">
                <h2>VELOCE FOLDING</h2>
                <p>Working width: <span>400-500-600</span></p><p>Working depth: <span>3-10</span></p>
              </div>
            </div>
          </a>

        </div>




        <div className={styles.item}>
          <a onClick={() => { router.push(`${router.asPath}/item/46`)}} className={styles.link}>
            <div className="product">
              <div className="image">

                <img src="/assets_gaspardo/SetRatioSize300155-VELOCE-M65770201-00-SHARED-REV00-R02.3.png"
                     alt="VELOCE M65770201 00 SHARED REV00 R02.3"/>

              </div>
              <div className="text">
                <h2>VELOCE SEMI-MOUNTED</h2>
                <p>Working width: <span>500-600-700</span></p><p>Working depth: <span>3-10</span></p>
              </div>
            </div>
          </a>

        </div>


        <div className={styles.item}>
          <a onClick={() => { router.push(`${router.asPath}/item/47`)}} className={styles.link}>
            <div className="product">
              <div className="image">

                <img src="/assets_gaspardo/SetRatioSize300155-ufo-forwebcorr2.jpg" alt="ufo forwebcorr2"/>

              </div>
              <div className="text">
                <h2>UFO</h2>
                <p>: <span>10-11½-13-8</span></p>
              </div>
            </div>
          </a>

        </div>

        <div className={styles.item}>
          <a onClick={() => { router.push(`${router.asPath}/item/48`)}} className={styles.link}>
            <div className="product">
              <div className="image">
                <img src="/assets_gaspardo/SetRatioSize300155-MADMIRALF15.jpg" alt="MADMIRALF15"/>
              </div>
              <div className="text">
                <h2>ADMIRAL</h2>
                <p>Working width: <span>850</span></p><p>Working depth: <span>8-15</span></p>
              </div>
            </div>
          </a>

        </div>
      </div>
      {/* end sub cat */
      }


      <h2 className={styles.subcategory}>Культиваторы для предпосевной подготовки почвы</h2>
      <div className={styles.container}>
        <div className={styles.item}>
          <a onClick={() => { router.push(`${router.asPath}/item/49`)}} className={styles.link}>
            <div className="product">
              <div className="image">

                <img src="/assets_gaspardo/SetRatioSize300155-MGRATORF2.jpg" alt="MGRATORF2"/>

              </div>
              <div className="text">
                <h2>GRATOR</h2>
                <p>Working depth: <span>10</span></p>
              </div>
            </div>
          </a>

        </div>


        <div className={styles.item}>
          <a onClick={() => { router.push(`${router.asPath}/item/50`)}} className={styles.link}>
            <div className="product">
              <div className="image">

                <img src="/assets_gaspardo/SetRatioSize300155-MSANDOKAN2F.jpg" alt="MSANDOKAN2F"/>

              </div>
              <div className="text">
                <h2>SANDOKAN</h2>
                <h3></h3>
                <p>Working depth: <span>10</span></p>
              </div>
            </div>
          </a>

        </div>
      </div>
      {/* end sub cat */
      }


      <h2 className={styles.subcategory}>Зубчатые культиваторы</h2>
      <div className={styles.container}>

        <div className={styles.item}>
          <div className="corner top"></div>
          <a className="productLink" href="https://www2.maschio.com/catalog/product/terremoto-3/ru_RU">
            <div className="product">
              <div className="image">

                <img src="/assets_gaspardo/SetRatioSize300155-MTERREMOTO3FOLDF.jpg" alt="MTERREMOTO3FOLDF"/>

              </div>
              <div className="text">
                <h2>TERREMOTO 3</h2>
                <h3></h3>
                <p>Working depth: <span>25</span></p>
              </div>
            </div>
          </a>

        </div>


        <div className={styles.item}>
          <div className="corner top"></div>
          <a className="productLink" href="https://www2.maschio.com/catalog/product/dracula/ru_RU">
            <div className="product">
              <div className="image">

                <img src="/assets_gaspardo/SetRatioSize300155-MDRACULAF3.jpg" alt="MDRACULAF3"/>

              </div>
              <div className="text">
                <h2>DRACULA HYDRO</h2>
                <h3></h3>
                <p>Working width: <span>400-600</span></p>
              </div>
            </div>
          </a>

        </div>
      </div>
      {/* end sub cat */
      }


      <h2 className={styles.subcategory}>Плуги с параллелограммной системой настройки первого корпуса плуга</h2>
      <div className={styles.container}>

        <div className={styles.item}>
          <div className="corner top"></div>
          <a className="productLink" href="https://www2.maschio.com/catalog/product/unico/ru_RU">
            <div className="product">
              <div className="image">

                <img src="/assets_gaspardo/SetRatioSize300155-MUNICO-L.jpg" alt="MUNICO L"/>

              </div>
              <div className="text">
                <h2>UNICO</h2>
                <h3></h3>

              </div>
            </div>
          </a>

        </div>
      </div>
      {/* end sub cat */
      }


      <h2 className={styles.subcategory}>ПОЛУНАВЕСНЫЕ ПЛУГИ</h2>
      <div className={styles.container}>

        <div className={styles.item}>
          <div className="corner top"></div>
          <a className="productLink" href="https://www2.maschio.com/catalog/product/mirco/ru_RU">
            <div className="product">
              <div className="image">

                <img src="/assets_gaspardo/SetRatioSize300155-MMIRCOR2017.jpg" alt="MMIRCOR2017"/>

              </div>
              <div className="text">
                <h2>MIRCO</h2>
                <h3></h3>

              </div>
            </div>
          </a>

        </div>
      </div>
    </>
  )
}

export default Pochva;
