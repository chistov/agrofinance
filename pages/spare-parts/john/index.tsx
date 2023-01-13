import styles from '../../../styles/Spare.module.scss';

import DefaultLayout from "@/components-common/defaultLayout";
import Menu from "@/components-common/Menu";
import React from "react";
import JohnDeere from "@/components/JohnDeere";

export default function JohnPreview(props = null) {
  return (
    <DefaultLayout>
      <DefaultLayout.Header>
      </DefaultLayout.Header>
      <DefaultLayout.Body>
        <Menu></Menu>
        <section className={styles.tech}>
          <JohnDeere/>
        </section>
      </DefaultLayout.Body>
    </DefaultLayout>
  )
}
