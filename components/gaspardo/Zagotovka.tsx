import styles from './Zagotovka.module.scss';
import React from 'react';
import {useRouter} from "next/router";

const Zagotovka = () => {
  const router = useRouter();

  return (
    <>
      <h2 className={styles.subcategory}>Рулонные пресс-подборщики</h2>
      <div className={styles.container}>

        <div className={styles.item}>
          <div className='corner top'></div>
          <a onClick={() => { router.push(`${router.asPath}/item/76`)}} className={styles.link}>
            <div >
              <div className='image'>


                <img src='/assets_gaspardo/SetRatioSize300155-20160722-entry-120-29.jpg'
                     alt='20160722 entry 120 29'/>

              </div>
              <div className='text'>
                <h2>ENTRY 120/150</h2>
                <h3></h3>

              </div>
            </div>
          </a>
          <div className='corner'></div>
        </div>


        <div className={styles.item}>
          <div className='corner top'></div>
          <a onClick={() => { router.push(`${router.asPath}/item/77`)}} className={styles.link}>
            <div>
              <div className='image'>


                <img src='/assets_gaspardo/SetRatioSize300155-20160722-trotter-125-05-4.jpg/'
                     alt='20160722 trotter 125 05 4'/>

              </div>
              <div className='text'>
                <h2>TROTTER 125</h2>
                <h3></h3>

              </div>
            </div>
          </a>
          <div className='corner'></div>
        </div>


        <div className={styles.item}>
          <div className='corner top'></div>
          <a onClick={() => { router.push(`${router.asPath}/item/78`)}} className={styles.link}>
            <div>
              <div className='image'>


                <img src='/assets_gaspardo/SetRatioSize300155-20160722-duetto-28-copia2.jpg'
                     alt='20160722 duetto 28 copia2'/>

              </div>
              <div className='text'>
                <h2>DUETTO 125</h2>
                <h3></h3>

              </div>
            </div>
          </a>
          <div className='corner'></div>
        </div>

        <div className={styles.item}>
          <div className='corner top'></div>
          <a onClick={() => { router.push(`${router.asPath}/item/79`)}} className={styles.link}>
            <div>
              <div className='image'>


                <img src='/assets_gaspardo/SetRatioSize300155-20160722-mondiale-120-2.jpg'
                     alt='20160722 mondiale 120 2'/>

              </div>
              <div className='text'>
                <h2>MONDIALE 120</h2>
                <h3></h3>

              </div>
            </div>
          </a>
          <div className='corner'></div>
        </div>


        <div className={styles.item}>
          <div className='corner top'></div>
          <a onClick={() => { router.push(`${router.asPath}/item/80`)}} className={styles.link}>
            <div>
              <div className='image'>


                <img src='/assets_gaspardo/SetRatioSize300155-20161109mondialecombis2.jpg'
                     alt='20161109mondialecombis2'/>

              </div>
              <div className='text'>
                <h2>MONDIALE 120 COMBI</h2>
                <h3></h3>

              </div>
            </div>
          </a>
          <div className='corner'></div>
        </div>


        <div  className={styles.item}>
          <div className='corner top'></div>
          <a onClick={() => { router.push(`${router.asPath}/item/81`)}} className={styles.link}>
            <div>
              <div className='image'>


                <img src='/assets_gaspardo/SetRatioSize300155-MEXTREME265HF3.jpg' alt='MEXTREME265HF3'/>

              </div>
              <div className='text'>
                <h2>EXTREME 1</h2>
                <h3></h3>

              </div>
            </div>
          </a>
          <div className='corner'></div>
        </div>

        <div className={styles.item}>
          <div className='corner top'></div>
          <a onClick={() => { router.push(`${router.asPath}/item/82`)}} className={styles.link}>
            <div>
              <div className='image'>


                <img src='/assets_gaspardo/SetRatioSize300155-EXTREME-286-HTU4.jpg' alt='EXTREME 286 HTU4'/>

              </div>
              <div className='text'>
                <h2>EXTREME 2</h2>
                <h3></h3>

              </div>
            </div>
          </a>
          <div className='corner'></div>
        </div>


        <div className={styles.item}>
          <div className='corner top'></div>
          <a onClick={() => { router.push(`${router.asPath}/item/83`)}} className={styles.link}>
            <div>
              <div className='image'>


                <img src='/assets_gaspardo/SetRatioSize300155-Untitled12.jpg' alt='Untitled12'/>

              </div>
              <div className='text'>
                <h2>EXTREME 3</h2>
                <h3></h3>

              </div>
            </div>
          </a>
        </div>
      </div>
    </>
)}

export default Zagotovka;
