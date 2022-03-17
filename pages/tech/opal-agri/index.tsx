//@ts-nocheck
import React, {useEffect, useState} from "react";
import {NextPage} from "next";
import Kultivaciya from "../../../components/opal/kultivaciya";
import DefaultLayout from "../../../components-common/defaultLayout";
import Aside from "../../../components-common/Aside";
import Vspashka from "../../../components/opal/Vspashka";
import Podryv from "../../../components/opal/Podryv";
import Prikativanie from "../../../components/opal/Prikativanie";

const OpalAgri: NextPage = () => {
  let [idx, setIdx] = useState();

  const changeMenuItem = (curr:number) => {
    setIdx(curr);
    localStorage.setItem('idx_opal', curr)
    window.scrollTo({top: 0});
  }

  useEffect(() => {
    // Perform localStorage action
    const item = localStorage.getItem('idx_opal') || 0;
    setIdx(item);
  }, [])

  return (
      <DefaultLayout>
        <DefaultLayout.Header/>
        <DefaultLayout.Body>
          <Aside
            chosen={idx}
            change={changeMenuItem}
            items={['Культивация', 'Вспашка' , 'Подрыв', 'Прикатывание']}/>
          {idx == 0 && <Kultivaciya/> }
          {idx == 1 && <Vspashka/> }
          {idx == 2 && <Podryv/> }
          {idx == 3 && <Prikativanie/> }
        </DefaultLayout.Body>
      </DefaultLayout>
  )
}

export default OpalAgri
