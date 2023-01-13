import styles from "@/styles/Spare.module.scss";
import React, {useState} from "react";
import {useRouter} from "next/router";
import menu from '../public/assets/aside.json';

const Menu = () => {
  const menuKeys = Object.keys(menu);
  const router = useRouter();
  const startBrandIdx = 13;
  const brandPath = router.route.substring(startBrandIdx);
  const end = brandPath.indexOf('/');
  const path = end == -1 ? brandPath: brandPath.substring(0, end);

  // const [path, setPath] = useState('maschio');
  console.log('router: ', path);

  const clickItem = async (ev) => {
    const brand = ev.target.getAttribute('data-name');
    // setPath(brand);
    // getPath(brand);
    await router.push('/spare-parts/' + brand);
  }

  /*
  * Как различить клики???
  * */

  const goTo = (brand, key) => {
    return menu[key].map((el, idx) => {
      const onClick = function (e) {
        e.stopPropagation();
        router.push(`/spare-parts/${this.brand}/item/${this.idx}`);
      }.bind({brand, idx})

      return <div
        onClick={onClick}
        key={idx}
        data-name="claas"
        className={styles.sbitem}>{el}</div>
      }
    )
  }

  return (
    <aside className={styles.aside}>
      <div className={styles.menu}>
        <div data-name="maschio" onClick={clickItem}
             className={styles.item + ' ' +(path == 'maschio' ? styles.active : '')}>{menuKeys[0]}</div>
        <div data-name="claas"  onClick={clickItem}
             className={styles.item  + ' ' + (path == 'claas' ? styles.active : '')}>{menuKeys[1]}
          <div className={styles.submenu + ' ' + 'claas'}>
            { goTo('claas', menuKeys[1]) }
          </div>
        </div>
        <div data-name="lemken" onClick={clickItem}
             className={styles.item + ' ' + (path == 'lemken' ? styles.active : '')}>{menuKeys[2]}
          <div className={styles.submenu + ' ' + styles.lem}>
            { goTo('lemken', menuKeys[2]) }
          </div>
        </div>
        <div data-name="grimme" onClick={clickItem}
             className={styles.item  + ' ' + (path == 'grimme' ? styles.active : '')}>{menuKeys[3]}
          <div className={styles.submenu + ' ' + styles.grim}>
            { goTo('grimme', menuKeys[3]) }
          </div>
        </div>
        <div data-name="amazone" onClick={clickItem}
             className={styles.item  + ' ' + (path == 'amazone' ? styles.active : '')}>{menuKeys[4]}</div>
        <div data-name="john" onClick={clickItem}
             className={styles.item  + ' ' + (path == 'john' ? styles.active : '')}>{menuKeys[5]}</div>
        <div data-name="bobcat" onClick={clickItem}
             className={styles.item  + ' ' + (path == 'bobcat' ? styles.active : '')}>{menuKeys[6]}
          <div className={styles.submenu + ' ' + styles.bob}>
            { goTo('bobcat', menuKeys[6]) }
          </div>
        </div>
        <div data-name="manitou" onClick={clickItem}
             className={styles.item  + ' ' + (path == 'manitou' ? styles.active : '')}>{menuKeys[7]}
          <div className={styles.submenu + ' ' + styles.bob}>
            { goTo('manitou', menuKeys[7]) }
          </div>
        </div>
        <div data-name="kver" onClick={clickItem}
             className={styles.item  + ' ' + (path == 'kver' ? styles.active : '')}>{menuKeys[8]}</div>
        <div data-name="kuhn" onClick={clickItem}
             className={styles.item  + ' ' + (path == 'kuhn' ? styles.active : '')}>{menuKeys[9]}</div>
        <div data-name="krone" onClick={clickItem}
             className={styles.item  + ' ' + (path == 'krone' ? styles.active : '')}>{menuKeys[10]}</div>
        <div data-name="tyres" onClick={clickItem}
             className={styles.item  + ' ' + (path == 'tyres' ? styles.active : '')}>{menuKeys[11]}</div>
        <div data-name="oil" onClick={clickItem}
             className={styles.item  + ' ' + (path == 'oil' ? styles.active : '')}>{menuKeys[12]}</div>
      </div>
    </aside>
)}

export default Menu;
