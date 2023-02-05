import styles from "@/styles/Spare.module.scss";
import React, {useState, useEffect} from "react";
import {useRouter} from "next/router";
import menu from '../public/assets/aside.json';

const Menu = () => {
  if (typeof window === "undefined") return null;
  const menuKeys = Object.keys(menu);
  const router = useRouter();
  const startBrandIdx = 13;
  const brandPath = router.route.substring(startBrandIdx);
  const end = brandPath.indexOf('/');
  const path = end == -1 ? brandPath: brandPath.substring(0, end);

  // const [path, setPath] = useState('maschio');
  const [openC, setOpenC] = useState(false);
  const [openL, setOpenL] = useState(false);
  const [openG, setOpenG] = useState(false);
  const [openM, setOpenM] = useState(false);
  const [openB, setOpenB] = useState(false);
  const [closeSh, setCloseSh] = useState(true);
  console.log('router: ', path);

  const [size, setSize] = useState({
    x: window.innerWidth,
    y: window.innerHeight
  });
  const updateSize = () =>
    setSize({
      x: window.innerWidth,
      y: window.innerHeight
    });

  useEffect(() => {
    // setOpenC(sessionStorage.getItem('claas') == '1' ? true: false);
    setCloseSh(size.x <= 768)
    window.onresize = updateSize
  }, [])

  useEffect(() => console.log(size.x), [size.x]);

  const clickItem = async (ev) => {
    const brand = ev.target.getAttribute('data-name');
    // setPath(brand);
    // getPath(brand);
    await router.push('/spare-parts/' + brand);
  }

  /*
  * Как различить клики???
  * */

  const goTo = (brand, key, isOpen) => {
    return menu[key].map((el, idx) => {
      const onClick = function (e) {
        e.stopPropagation();
        router.push(`/spare-parts/${this.brand}/item/${this.idx}`);
      }.bind({brand, idx})

      return <div
        onClick={onClick}
        key={idx}
        data-name="claas"
        className={styles.item + ' ' + styles.item_sub + ' ' + (isOpen ? styles.open : '')}>{el}</div>
      }
    )
  }

  return (
    <aside className={styles.aside}>
      <div className={styles.menu + ' ' + (closeSh ? styles.close: '')}>
        <div data-name="maschio" onClick={clickItem}
             className={styles.item + ' ' +(path == 'maschio' ? styles.active : '')}>{menuKeys[0]}</div>
        <div data-name="claas"  onClick={clickItem}
             className={styles.item  + ' ' + (path == 'claas' ? styles.active : '')}>{menuKeys[1]}
          <span
            onClick={(e) => {
                e.stopPropagation();
              sessionStorage.setItem('claas', !openC ? '1' : '0');
              setOpenC(!openC);
              }
            }
            className={styles.chevron + ' ' + (openC ? styles.down: '')}></span>
        </div>
        { goTo('claas', menuKeys[1], openC) }

        <div data-name="lemken" onClick={clickItem}
             className={styles.item + ' ' + (path == 'lemken' ? styles.active : '')}>{menuKeys[2]}
          <span
            onClick={(e) => {
              e.stopPropagation();
              sessionStorage.setItem('lemken', !openL ? '1' : '0');
              setOpenL(!openL);
            }}
            className={styles.chevron + ' ' + (openL ? styles.down : '')}></span>
        </div>
        { goTo('lemken', menuKeys[2], openL) }

        <div data-name="grimme" onClick={clickItem}
             className={styles.item  + ' ' + (path == 'grimme' ? styles.active : '')}>{menuKeys[3]}
          <span
            onClick={(e) => {
              e.stopPropagation();
              sessionStorage.setItem('grimme', !openG ? '1' : '0');
              setOpenG(!openG);
            }
            }
            className={styles.chevron + ' ' + (openG ? styles.down: '')}></span>
        </div>
        { goTo('grimme', menuKeys[3], openG) }

        <div data-name="amazone" onClick={clickItem}
             className={styles.item  + ' ' + (path == 'amazone' ? styles.active : '')}>{menuKeys[4]}</div>
        <div data-name="john" onClick={clickItem}
             className={styles.item  + ' ' + (path == 'john' ? styles.active : '')}>{menuKeys[5]}</div>
        <div data-name="bobcat" onClick={clickItem}
             className={styles.item  + ' ' + (path == 'bobcat' ? styles.active : '')}>{menuKeys[6]}
          <span
            onClick={(e) => {
              e.stopPropagation();
              sessionStorage.setItem('bobcat', !openB ? '1' : '0');
              setOpenB(!openB);
            }
            }
            className={styles.chevron + ' ' + (openB ? styles.down: '')}></span>
        </div>
        { goTo('bobcat', menuKeys[6], openB) }

        <div data-name="manitou" onClick={clickItem}
             className={styles.item  + ' ' + (path == 'manitou' ? styles.active : '')}>{menuKeys[7]}
          <span
            onClick={(e) => {
              e.stopPropagation();
              sessionStorage.setItem('man', !openM ? '1' : '0');
              setOpenM(!openM);
            }
            }
            className={styles.chevron + ' ' + (openM ? styles.down: '')}></span>
        </div>
        { goTo('manitou', menuKeys[7], openM) }

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
      <div className={styles.shtorka + ' ' + (closeSh ? styles.close_sh: '')}
           onClick={(e) => {
             e.stopPropagation();
             sessionStorage.setItem('shtorka', !closeSh ? '1' : '0');
             setCloseSh(!closeSh);
           }
           }
      >
        <div className={styles.toggler}>
          <span className={styles.chevron_sh + ' ' + (closeSh ? styles.sh_toggle: '')}></span>
        </div>
      </div>
    </aside>
)}

export default Menu;
