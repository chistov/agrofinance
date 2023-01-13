import styles from "./OpalKultivaciya.module.scss";
import {useRouter} from "next/router";

const Kultivaciya = () => {
  const router = useRouter();
  return (
      <div className={styles.product_container}>
        <div className={styles.product_box}>
          <a onClick={() => { router.push(`${router.asPath}/brand/1`)}} className={styles.link}>
            <div className="product-brand-image">
              <img src="/assets/68a25651-36f4-4e7f-871d-00856bef998f@w400.webp.png" alt="PEGAS II"/>
            </div>
            <div className="product-brand-text">

              <div className="product-brand-title">
                <h3 className="red-title">PEGAS II </h3>
                <h4 className="red-title">БОРОНА / ДИСКОВАЯ</h4>
              </div>
              <div className="perex">Это универсальный инструмент для
                послеуборочной обработки почвы посредством лущения.
                Машину также можно применять для предпосевной подготовки.
              </div>
            </div>
          </a>
        </div>
        <div className={styles.product_box}>
          <a onClick={() => { router.push(`${router.asPath}/brand/2`)}} className={styles.link}>
            <div className="product-brand-image">
              <img src="/assets/b953a933-a528-4588-bf0c-03104aa3b880@w400.webp.png" alt="PEGAS II SM"/>
            </div>
            <div className="product-brand-text">

              <div className="product-brand-title">
                <h3 className="red-title">PEGAS II SM</h3>
                <h4 className="red-title">БОРОНА / ДИСКОВАЯ</h4>
              </div>
              <div className="perex">Это универсальный инструмент для
                послеуборочной обработки почвы посредством лущения.
                Машину также можно применять для предпосевной подготовки.
              </div>
            </div>
          </a>
        </div>
        <div className={styles.product_box}>
          <a onClick={() => { router.push(`${router.asPath}/brand/3`)}} className={styles.link}>
            <div className="product-brand-image">
              <img src="/assets/1eaf3e5f-e6ba-4849-9a81-3754e08b84a0@w400.webp.png" alt="NEPTUN-PEGAS II"/>
            </div>
            <div className="product-brand-text">

              <div className="product-brand-title">
                <h3 className="red-title">NEPTUN-PEGAS II</h3>
                <h4 className="red-title">БОРОНА / ДИСКОВАЯ</h4>
              </div>
              <div className="perex">Это универсальный инструмент для
                послеуборочной обработки почвы посредством лущения.
                Машину также можно применять для предпосевной подготовки.
              </div>
            </div>
          </a>
        </div>
        <div className={styles.product_box}>
          <a onClick={() => { router.push(`${router.asPath}/brand/4`)}} className={styles.link}>
            <div className="product-brand-image">
              <img src="/assets/1699625f-c73d-4b78-b2b1-a8afa3af2ff4@w400.webp.png" alt="NEPTUN-MERKUR IV"/>
            </div>
            <div className="product-brand-text">

              <div className="product-brand-title">
                <h3 className="red-title">NEPTUN-MERKUR IV</h3>
                <h4 className="red-title">КУЛЬТИВАТОР / СТЕРНЕВОЙ</h4>
              </div>
              <div className="perex">Он предназначен для подготовки почвы после уборки, и особенно подходит для лущения
                стерни.
              </div>
            </div>
          </a>
        </div>
        <div className={styles.product_box}>
          <a onClick={() => { router.push(`${router.asPath}/brand/5`)}} className={styles.link}>
            <div className="product-brand-image">
              <img src="/assets/d240889a-1702-43d5-9e97-e9f6182607a4@w400.webp.png" alt="SATURN IV"/>
            </div>
            <div className="product-brand-text">

              <div className="product-brand-title">
                <h3 className="red-title">SATURN IV</h3>
                <h4 className="red-title">КУЛЬТИВАТОР / КОМБИНИРОВАННЫЙ</h4>
              </div>
              <div className="perex">Культиваторы NEPTUN-SATURN IV являются представителями машин, у которых разработана
                единичная технология расположения рабочих элементов в целях...
              </div>
            </div>
          </a>
        </div>
        <div className={styles.product_box}>
          <a onClick={() => { router.push(`${router.asPath}/brand/6`)}} className={styles.link}>
            <div className="product-brand-image">
              <img src="/assets/d82b1db6-5da4-432c-b7c9-4e74b5919fe1@w400.webp.png" alt="NEPTUN-SATURN IV"/>
            </div>
            <div className="product-brand-text">

              <div className="product-brand-title">
                <h3 className="red-title">NEPTUN-SATURN IV</h3>
                <h4 className="red-title">КУЛЬТИВАТОР / КОМБИНИРОВАННЫЙ</h4>
              </div>
              <div className="perex">NEPTUN-SATURN IV, благодаря ширинам захвата 8 или 10 м, подходит для тракторов
                мощностью от 210 л.с.
              </div>
            </div>
          </a>
        </div>
        <div className={styles.product_box}>
          <a onClick={() => { router.push(`${router.asPath}/brand/7`)}} className={styles.link}>
            <div className="product-brand-image">
              <img src="/assets/4b249737-6fe7-4e07-911c-49d67602ddbf@w300.webp.png" alt="TRITON II"/>
            </div>
            <div className="product-brand-text">

              <div className="product-brand-title">
                <h3 className="red-title">TRITON II</h3>
                <h4 className="red-title">КУЛЬТИВАТОР / СТЕРНЕВОЙ</h4>
              </div>
              <div className="perex">Трехрядный стерневой культиватор TRITON II предназначен для совершения различных
                рабочих операций – начиная с лущения, вплоть до глубокого...
              </div>
            </div>
          </a>
        </div>
        <div className={styles.product_box}>
          <a onClick={() => { router.push(`${router.asPath}/brand/8`)}} className={styles.link}>
            <div className="product-brand-image">
              <img src="/assets/b9fc3980-ee3d-4b71-8a08-df1c26976aa8@w300.webp.png" alt="VESTA I"/>
            </div>
            <div className="product-brand-text">

              <div className="product-brand-title">
                <h3 className="red-title">VESTA I</h3>
              </div>
              <div className="perex">Vesta – это комбинированная машина, предназначенная для предпосевной подготовки
                посевного ложа.
              </div>
            </div>
          </a>
        </div>
      </div>
  )
}

export default Kultivaciya;
