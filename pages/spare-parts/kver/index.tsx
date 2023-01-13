import styles from '../../../styles/Spare.module.scss';

import DefaultLayout from "@/components-common/defaultLayout";
import Menu from "@/components-common/Menu";
import React from "react";
import Kverneland from "@/components/Kverneland";

export default function KverPreview(props = null) {
  return (
    <DefaultLayout>
      <DefaultLayout.Header>
      </DefaultLayout.Header>
      <DefaultLayout.Body>
        <Menu></Menu>
        <section className={styles.tech}>
          <Kverneland/>
        </section>
      </DefaultLayout.Body>
    </DefaultLayout>
  )
}
