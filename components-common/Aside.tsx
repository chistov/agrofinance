import styles from "./Aside.module.scss";
import React, {useEffect} from "react";

interface Props {
  items: string[];
  change: Function;
}

const Aside = ({items, change}: Props) => {
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


  // default
  useEffect(() => {
      const el = document.querySelector('#aside0');
      console.log('works!: ', el);
      el.style.backgroundColor = 'red';
      el.style.color = 'white';
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
