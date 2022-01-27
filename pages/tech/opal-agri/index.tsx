import React, {useState} from "react";
import {NextPage} from "next";
import Kultivaciya from "../../../components/opal/kultivaciya";
import styles from "../../../styles/Opal.module.scss"
import DefaultLayout from "../../../components-common/defaultLayout";
import Aside from "../../../components-common/Aside";
import Vspashka from "../../../components/opal/Vspashka";

const OpalAgri: NextPage = () => {
  let [idx, setIdx] = useState(0);

  const changeMenuItem = (curr:number) => {
    console.log('cb: ', curr);
    setIdx(curr);
  }

  return (
      <DefaultLayout>
        <DefaultLayout.Header/>
        <DefaultLayout.Body>
          <Aside
            change={changeMenuItem}
            items={['Культивация', 'Вспашка' , 'Подрыв', 'Прикатывание']}/>
          {idx == 0 && <Kultivaciya/> }
          {idx == 1 && <Vspashka/> }
        </DefaultLayout.Body>
      </DefaultLayout>
  )
}

export default OpalAgri
