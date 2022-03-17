//@ts-nocheck
import {NextPage} from "next";
import cookie from "js-cookie";
import DefaultLayout from "../../../components-common/defaultLayout";
import React, {useEffect, useState} from "react";
import Aside from "../../../components-common/Aside";
import Pochva from "../../../components/gaspardo/Pochva";
import Posev from "../../../components/gaspardo/Posev";
import Zagotovka from "../../../components/gaspardo/Zagotovka";
import Urozhay from "../../../components/gaspardo/Urozhay";

const Gaspardo: NextPage = () => {
  let [idx, setIdx] = useState();

  const changeMenuItem = (curr: number) => {
    setIdx(curr);
    localStorage.setItem('idx', curr)
    window.scrollTo({top: 0});
  }

  useEffect(() => {
    // Perform localStorage action
    const item = localStorage.getItem('idx') || 0;
    setIdx(item);
  }, [])

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

export default Gaspardo;
