import Link from "next/link";
import styles from "../../components-common/404.module.scss";
import React from "react";

export default function Custom404() {
  return <div className={styles.container}>
    <img className={styles.img} data-lazy-type="img" src="/assets/broken.jpg" alt='404 not found'/>
    <h2>404 - Страница не найдена</h2>
    <Link href='/'>
        <a className={styles.link}>Перейти на главную</a>
    </Link>
  </div>
}
