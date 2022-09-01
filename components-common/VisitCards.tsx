import React from "react";
import styles from "../styles/VisitCards.module.scss";

const VisitCard = ({workers, width, height}) => {
  const style = {};

  if(width) {
    style['width'] = width;
  }

  if(height) {
    style['height'] = height;
  }

  return workers.map(w => {
    return (
        <div key={w.email} className={styles.card} style={style}>
          <div className="left">
            <span className={styles.name}>{w.name} </span><span className={styles.surname}>{w.surname}</span>
            <div className={styles.role}>{w.info}</div>
          </div>
          <div className={styles.contacts}>
            <div>{w.phone}</div>
            <div>{w.email}</div>
          </div>
        </div>
    )
 })
};

export default VisitCard;
