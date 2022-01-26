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
        <div className={styles.container}>
          <Aside/>
          <Pochva/>
        </div>
      </DefaultLayout.Body>
    </DefaultLayout>
  )
}

export default Gaspardo
