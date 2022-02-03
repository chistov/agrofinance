//@ts-nocheck
import {NextPage} from "next";
import DefaultLayout from "../../../components-common/defaultLayout";
import React, {useState} from "react";
import Aside from "../../../components-common/Aside";
import Pochva from "../../../components/gaspardo/Pochva";
import Posev from "../../../components/gaspardo/Posev";
import Zagotovka from "../../../components/gaspardo/Zagotovka";
import Urozhay from "../../../components/gaspardo/Urozhay";

const Gaspardo: NextPage = () => {
  let [idx, setIdx] = useState(0);

  const changeMenuItem = (curr: number) => {
    console.log('cb: ', curr);
    setIdx(curr);
    window.scrollTo({top: 0});
  }
  return (
    <DefaultLayout>
      <DefaultLayout.Header/>
      <DefaultLayout.Body>
        <Aside
          chosen={idx}
          change={changeMenuItem}
          items={['Подготовка почвы', 'Посев - удобрение', 'Заготовка сена', 'Уход за урожаем']}/>
        {idx == 0 && <div><Pochva/></div>}
        {idx == 1 && <div><Posev/></div>}
        {idx == 2 && <div><Zagotovka/></div>}
        {idx == 3 && <div><Urozhay/></div>}

      </DefaultLayout.Body>
    </DefaultLayout>
  )
}
