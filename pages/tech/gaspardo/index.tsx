import {NextPage} from "next";
import styles from "../../../styles/Gaspardo.module.css";
import DefaultLayout from "../../../components-common/defaultLayout";
import React from "react";
import Aside from "../../../components-common/Aside";
import Pochva from "../../../components/gaspardo/Pochva";

const Gaspardo: NextPage = () => {
  return (
    <DefaultLayout>
      <DefaultLayout.Header/>
      <DefaultLayout.Body>
          <Aside items={['Подготовка почвы', 'Посев - удобрение', 'Заготовка сена', 'Уход за урожаем']}/>
          <Pochva/>
      </DefaultLayout.Body>
    </DefaultLayout>
  )
}

export default Gaspardo
