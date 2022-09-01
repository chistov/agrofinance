import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from "../components-common/Navbar";
import styles from '../styles/Home.module.scss'
import {Image} from "react-bootstrap";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Navbar/>
      <Head>
        <title>АгроФинансСтрой</title>
        {/*<meta name="description" content="Generated by create next app" />*/}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <header className={styles.hdr_wrapper}>
          <div className={styles.hdr}>АгроФинансCтрой</div>
        </header>
        <div className={styles.intro}>
          Компания Агрофинансстрой (ООО "АФС") поставляет запасные части к импортной сельскохозяйственной технике и спецтехнике.
          <p>Отгрузка производится самовывозом по адресу г.Нижний Новгород, ул.Федосеенко, д.55. Доставку запасных частей в другие регионы осуществляем транспортными компаниями.</p>
          Опыт наших специалистов и сотрудничество с ведущими заводами-производителями запасных частей позволяет нам доставлять запасные части в кратчайшие сроки и по оптимальным ценам
        </div>

      </main>

      <section className={styles.section}>
        <div className={styles.off_dealers}>Официальные дилеры</div>
        <div className={styles.balls_root}>
          <span className={styles.dot}>
            <Image className={styles.maschio_logo} src={'/assets/maschio-logo.png'} alt={'mascio logo'} />
          </span>
          <span className={styles.dot}>
            <Image className={styles.gates_logo} src={'/assets/gates-logo.png'} alt={'gates logo'} />
          </span>
          <span className={styles.dot}>
            <Image className={styles.pwgroup_logo} src={'/assets/pwgroup-logo.png'} alt={'pwgroup logo'} />
          </span>
          <span className={styles.dot}>
            <Image className={styles.frank_logo} src={'/assets/frank-original-logo.jpg'} alt={'frank logo'} />
          </span>
          <span className={styles.dot}>
            <Image className={styles.lemken_logo} src={'/assets/lemken-logo.png'} alt={'lemken logo'} />
          </span>
          <span className={styles.dot}>
            <Image className={styles.grimme_logo} src={'/assets/grimme-logo.png'} alt={'grimme logo'} />
          </span>
        </div>
      </section>
    </div>
  )
}

export default Home;
