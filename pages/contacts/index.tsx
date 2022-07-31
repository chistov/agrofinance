import styles from '../../styles/Contacts.module.scss';
import React from 'react';
import {YMaps, Map, Placemark} from 'react-yandex-maps';
import Navbar from '../../components-common/Navbar';

export default function Contacts(props = null) {

  const workers = [
    {
      name: "СЕРГЕЙ",
      surname: "СОКОЛОВ",
      info: 'Запчасти к прицепной технике Lemken, Amazone, погрузчикам Manitou',
      phone: "8-910-891-14-95",
      email: "sokolov@afs-nn.ru",
    },
    {
      name: "ИГОРЬ",
      surname: "КУЛИК",
      info: 'Запчасти к сельскохозяйственной  технике Claas',
      phone: "8-910-129-17-71",
      email: "kulik@afs-nn.ru",
    },
    {
      name: "АЛЕКСАНДР",
      surname: "УРАКОВ",
      info: 'Запчасти к сельскохозяйственной  технике Claas',
      phone: "8-915-950-07-67",
      email: "urakov@afs-nn.ru",
    },
    {
      name: "ВИТАЛИЙ",
      surname: "АНТОНОВ",
      info: 'Запчасти к сельскохозяйственной  технике Claas',
      phone: "8-910-880-10-96",
      email: "antonov@afs-nn.ru",
    },
    {
      name: "РОМАН",
      surname: "ГРАЧЕВ",
      info: 'Запчасти к сельскохозяйственной  технике John Deere, Claas, Kuhn, Kverneland, Krone спецтехнике JCB, Komatsu, Hitachi',
      phone: "8-910-391-00-15",
      email: "grachev@afs-nn.ru",
    },
    {
      name: "МАРИЯ",
      surname: "ДЕГОЕВА",
      info: 'Запчасти к прицепной технике Lemken, Amazone',
      phone: "8-910-880-10-96",
      email: "degoeva@afs-nn.ru",
    },
    {
      name: "МАКСИМ",
      surname: "ШАЛЫГАНОВ",
      info: 'Техника Maschio Gaspardo, сервисное обслуживание',
      phone: "8-910-795-11-71",
      email: "shalyganov@afs-nn.ru",
    },
  ]

  return (
    <div>
      <Navbar/>
      <div className={styles.container}>
        <h2>Контакты</h2>
        <div>ООО 'АФС'</div>
        <div className={styles.mb15}>г.Н.Новгород, ул.Федосеенко д.55</div>
        <YMaps>
          <div>
            <Map width='100%' height='50vh' defaultState={{center: [56.338474, 43.809498], zoom: 17}}>
              <Placemark geometry={[56.338474, 43.809498]}></Placemark>
            </Map>
          </div>
        </YMaps>

        <div className={styles.visit}>
        {
          workers.map( w => (
            <div className={styles.card}>
              <div className="left">
                <span className={styles.name}>{w.name} </span><span className={styles.surname}>{w.surname}</span>
                <div className={styles.role}>{w.info}</div>
              </div>
              <div className={styles.contacts}>
                <div>{w.phone}</div>
                <div>{w.email}</div>
              </div>
            </div>
            )
          )
        }
        </div>

      </div>
    </div>
  )
}
