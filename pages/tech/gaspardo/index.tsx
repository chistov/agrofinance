import {NextPage} from "next";
import DefaultLayout from "../../../components-common/defaultLayout";
import React, {useState} from "react";
import Aside from "../../../components-common/Aside";
import Pochva from "../../../components/gaspardo/Pochva";
import Posev from "../../../components/gaspardo/Posev";

const Gaspardo: NextPage = () => {
  let [idx, setIdx] = useState(0);

  const changeMenuItem = (curr: number) => {
    console.log('cb: ', curr);
    setIdx(curr);
  }
  return (
    <DefaultLayout>
      <DefaultLayout.Header/>
      <DefaultLayout.Body>
        <Aside
          chosen={idx}
          change={changeMenuItem}
          items={['Подготовка почвы', 'Посев - удобрение', 'Заготовка сена', 'Уход за урожаем']}/>
        {idx == 0 && <Pochva/>}
        {idx == 1 && <Posev/>}

      </DefaultLayout.Body>
    </DefaultLayout>
  )
}

export default Gaspardo
