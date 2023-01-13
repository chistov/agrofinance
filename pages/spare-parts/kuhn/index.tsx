import styles from '../../../styles/Spare.module.scss';

import DefaultLayout from "@/components-common/defaultLayout";
import Menu from "@/components-common/Menu";
import React from "react";
import Kuhn from "@/components/Kuhn";

export default function KuhnPreview(props = null) {
  return (
    <DefaultLayout>
      <DefaultLayout.Header>
      </DefaultLayout.Header>
      <DefaultLayout.Body>
        <Menu></Menu>
        <section className={styles.tech}>
          <Kuhn/>
        </section>
      </DefaultLayout.Body>
    </DefaultLayout>
  )
}
