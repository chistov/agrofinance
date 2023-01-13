import styles from '../../../styles/Spare.module.scss';

import DefaultLayout from "@/components-common/defaultLayout";
import Menu from "@/components-common/Menu";
import React from "react";
import Krone from "@/components/Krone";

export default function KronPreview(props = null) {
  return (
    <DefaultLayout>
      <DefaultLayout.Header>
      </DefaultLayout.Header>
      <DefaultLayout.Body>
        <Menu></Menu>
        <section className={styles.tech}>
          <Krone/>
        </section>
      </DefaultLayout.Body>
    </DefaultLayout>
  )
}
