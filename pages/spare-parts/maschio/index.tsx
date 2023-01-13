import styles from '../../../styles/Spare.module.scss';

import DefaultLayout from "@/components-common/defaultLayout";
import Menu from "@/components-common/Menu";
import Gaspardo from "@/components/gaspardo";
import React from "react";

export default function MascPreview(props = null) {
  return (
    <DefaultLayout>
      <DefaultLayout.Header>
      </DefaultLayout.Header>
      <DefaultLayout.Body>
        <Menu></Menu>
        <section className={styles.tech}>
          <Gaspardo/>
        </section>
      </DefaultLayout.Body>
    </DefaultLayout>
  )
}
