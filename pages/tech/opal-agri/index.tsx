import React from "react";
import {NextPage} from "next";
import Kultivaciya from "../../../components/opal/kultivaciya";
import styles from "../../../styles/Opal.module.scss"
import DefaultLayout from "../../../components-common/defaultLayout";
import Aside from "../../../components-common/Aside";

const OpalAgri: NextPage = () => {
  let curr = 0;

  return (
    <>
      <DefaultLayout>
        <DefaultLayout.Header/>
        <DefaultLayout.Body>
          <div className={styles.container}>
            <Aside/>
            <Kultivaciya/>
          </div>
        </DefaultLayout.Body>
      </DefaultLayout>
    </>
  )
}

export default OpalAgri
