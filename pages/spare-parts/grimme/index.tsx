import styles from '../../../styles/Spare.module.scss';

import DefaultLayout from "@/components-common/defaultLayout";
import Menu from "@/components-common/Menu";
import React from "react";
import Grimme from "@/components/Grimme";

export default function GrimPreview(props = null) {
  return (
    <DefaultLayout>
      <DefaultLayout.Header>
      </DefaultLayout.Header>
      <DefaultLayout.Body>
        <Menu></Menu>
        <section className={styles.tech}>
          <Grimme/>
        </section>
      </DefaultLayout.Body>
    </DefaultLayout>
  )
}
