import styles from "./Aside.module.scss";
import React, {useEffect} from "react";

interface Props {
  items: string[];
  change: Function;
  chosen: number;
}

const Aside = ({items, change, chosen}: Props) => {
  let el = null;
  const toggleBg = (e: MouseEvent, idx:number) => {
    for(let i = 0; i < 4; ++i) {
      el = document.querySelector('#aside' + i);
      el.style.backgroundColor = '#ffffff';
      el.style.color = 'black';
    }

    e.target.style.backgroundColor = 'red';
    e.target.style.color = 'white';

    change(idx);
  };

  console.log('init');


  // default
  useEffect(() => { // document not available outside useEffect
    const curr = document.querySelector('#aside' + chosen);
    console.log('works!: ', curr);
    curr.style.backgroundColor = 'red';
    curr.style.color = 'white';
  })

  return (
    <aside className={styles.aside}>
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
