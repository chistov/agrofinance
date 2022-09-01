import styles from '../../styles/Address.module.scss';
import React from 'react';
import {YMaps, Map, Placemark} from 'react-yandex-maps';
import Navbar from '../../components-common/Navbar';

export default function Address(props = null) {

  return (
    <div>
      <Navbar/>
      <div className={styles.container}>
        <h2 >Схема проезда</h2>
        <div>ООО 'АФС'</div>
        <div className={styles.mb15}>г.Н.Новгород, ул.Федосеенко д.55</div>
        <YMaps>
          <div>
            <Map width='100%' height='50vh' defaultState={{center: [56.338474, 43.809498], zoom: 17}}>
              <Placemark geometry={[56.338474, 43.809498]}></Placemark>
            </Map>
          </div>
        </YMaps>
      </div>
    </div>
  )
}
