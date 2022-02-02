import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from "../components-common/Navbar";
import styles from '../styles/Home.module.scss'

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
        <div>АгроФинансСтрой</div>
      </main>
    </div>
  )
}

export default Home
