import styles from '../../styles/Spare.module.scss';
import React, {useState} from 'react';
import Navbar from '../../components-common/Navbar';
import {useRouter} from "next/router";
import Gaspardo from "../../components/gaspardo";
import VisitCard from "../../components-common/VisitCards";
import Claas from "../../components/Claas";
import Lemken from "../../components/Lemken";
import Grimme from "../../components/Grimme";
import Amazone from "../../components/Amazone";
import JohnDeere from "../../components/JohnDeere";
import Bobcat from "../../components/Bobcat";
import Manitou from "../../components/Manitou";
import Kverneland from "../../components/Kverneland";
import Kuhn from "../../components/Kuhn";
import Krone from "../../components/Krone";
import Oils from "../../components/Oils";

export default function Address(props = null) {

  /* TODO: поправить main с учетом навбар */

  const router = useRouter();
  const [path, setPath] = useState('maschio');

  const clickItem = (ev) => {
    console.log('name: ', ev.target.getAttribute('name') );
    setPath(ev.target.getAttribute('name'));
  }

  const tech = [
    {
      name: "СЕРГЕЙ",
      surname: "СОКОЛОВ",
      info: '',
      phone: "8-910-891-14-95",
      email: "sokolov@afs-nn.ru",
    }
  ];

  const spare = [
    {
      name: "ИГОРЬ",
      surname: "КУЛИК",
      info: '',
      phone: "8-910-129-17-71",
      email: "kulik@afs-nn.ru",
    }
  ]


  return (
    <div>
      <Navbar/>
      <main className={styles.container}>
        <aside className={styles.aside}>
          <div className={styles.menu}>
            <div name="maschio" onClick={clickItem}
                 className={styles.item + ' ' +(path == 'maschio' ? styles.active : '')}>Maschio Gaspardo</div>
            <div name="claas" onClick={clickItem}
                 className={styles.item  + ' ' + (path == 'claas' ? styles.active : '')}>Claas</div>
            <div name="lemken" onClick={clickItem}
                 className={styles.item + ' ' + (path == 'lemken' ? styles.active : '')}>Lemken</div>
            <div name="grimme" onClick={clickItem}
                 className={styles.item  + ' ' + (path == 'grimme' ? styles.active : '')}>Grimme</div>
            <div name="amazone" onClick={clickItem}
                 className={styles.item  + ' ' + (path == 'amazone' ? styles.active : '')}>Amazone</div>
            <div name="john" onClick={clickItem}
                 className={styles.item  + ' ' + (path == 'john' ? styles.active : '')}>JohnDeere</div>
            <div name="bob" onClick={clickItem}
                 className={styles.item  + ' ' + (path == 'bob' ? styles.active : '')}>Bobcat</div>
            <div name="man" onClick={clickItem}
                 className={styles.item  + ' ' + (path == 'man' ? styles.active : '')}>Manitou</div>
            <div name="kver" onClick={clickItem}
                 className={styles.item  + ' ' + (path == 'kver' ? styles.active : '')}>Kverneland</div>
            <div name="kuhn" onClick={clickItem}
                 className={styles.item  + ' ' + (path == 'kuhn' ? styles.active : '')}>Kuhn</div>
            <div name="krone" onClick={clickItem}
                 className={styles.item  + ' ' + (path == 'krone' ? styles.active : '')}>Krone</div>
            <div name="tyr" onClick={clickItem}
              className={styles.item  + ' ' + (path == 'tyr' ? styles.active : '')}>Шины</div>
            <div name="oil" onClick={clickItem}
              className={styles.item  + ' ' + (path == 'oil' ? styles.active : '')}>Масло</div>
          </div>
        </aside>
        <main className={styles.main}>
          <section className={styles.tech}>
            { (path == 'maschio') && <Gaspardo/> }
            { (path == 'claas') && <Claas/> }
            { (path == 'lemken') && <Lemken/> }
            { (path == 'grimme') && <Grimme/> }
            { (path == 'amazone') && <Amazone/> }
            { (path == 'john') && <JohnDeere/> }
            { (path == 'bob') && <Bobcat/> }
            { (path == 'man') && <Manitou/> }
            { (path == 'kver') && <Kverneland/> }
            { (path == 'kuhn') && <Kuhn/> }
            { (path == 'krone') && <Krone/> }
            { (path == 'oil') && <Oils/> }
          </section>
          <section className={styles.contacts}>
            { (path == 'maschio') &&
              <>
                <p className={styles.h2}>Заявка на технику:</p>
                <VisitCard workers={tech} width={'250px'} height={'130px'}/>
                <p className={styles.h2}>Заявка на запчасти:</p>
                <VisitCard workers={spare} width={'250px'} height={'130px'}/>
              </>
            }
          </section>
        </main>
      </main>
    </div>
  )
}