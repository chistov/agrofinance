import styles from "./Aside.module.scss";
import React from "react";

const Aside = () => {
  const toggleBg = (e: MouseEvent) => {
    let el = null;
    for(let i = 0; i < 4; ++i) {
      el = document.querySelector('#aside' + i);
      el.style.backgroundColor = '#ffffff';
    }

    e.target.style.backgroundColor = 'red';
  };
  return (
    <aside className={styles.aside}>
      <div id="aside0" onClick={(e) => toggleBg(e)}>Культивация</div>
      <div id="aside1" onClick={(e) => toggleBg(e)}>Вспашка</div>
      <div id="aside2" onClick={(e) => toggleBg(e)}>Подрыв</div>
      <div id="aside3" onClick={(e) => toggleBg(e)}>Прикатывания</div>
    </aside>
  )
}

export default Aside;
