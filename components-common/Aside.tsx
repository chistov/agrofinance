import styles from "./Aside.module.scss";
import React, {useEffect} from "react";

interface Props {
  items: string[];
  change: Function;
  chosen: number;
}

const Aside = ({items, change, chosen}: Props) => {
  let el: HTMLElement | null = null;
  const toggleBg = (e: React.MouseEvent<HTMLDivElement>, idx: number) => {
    for(let i = 0; i < 4; ++i) {
      if (el = document.querySelector('#aside' + i)) {
        el.style.backgroundColor = '#f6f6f6';
        el.style.color = 'black';
      }
    }

    if(e !== null) {
      //@ts-ignore
      e.target.style.backgroundColor = 'red';
      //@ts-ignore
      e.target.style.color = 'white';
    }

    change(idx);
  };

  // default
  useEffect(() => { // document not available outside useEffect
    const curr: HTMLElement | null = document.querySelector('#aside' + chosen);
    if( curr) {
      curr.style.backgroundColor = 'red';
      curr.style.color = 'white';
    }
  })

  return (
    <aside id="aside-id" className={styles.aside}>
      {
        items.map((name, idx) =>
          <div id={"aside" + idx}
            key={idx}
            className={styles.item}
            onClick={(e) => toggleBg(e, idx)}>{name}</div>
        )
      }
    </aside>
  )
}

export default Aside;
