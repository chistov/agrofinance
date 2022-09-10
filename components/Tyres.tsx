import styles from "../styles/Claas.module.scss";

export default function Tyres() {

  return (
    <div className={styles.container}>
      <div className={styles.tyres_hdr}>Шины</div>
      <div className={styles.subcontainer}>
        <div className={styles.tyres}>
          <div className={styles.tyreCard}>
            <img className={styles.tyre} src="/assets/tyre1.jpg" alt="шины1"/>
            <div>СЕЛЬСКОХОЗЯЙСТВЕННЫЕ И САДОВЫЕ ШИНЫ</div>
          </div>

          <div className={styles.tyreCard}>
            <img className={styles.tyre} src="/assets/tyre2.jpg" alt="шины2"/>
            <div>ПРОМЫШЛЕННЫЕ И ИНДУСТРИАЛЬНЫЕ ШИНЫ</div>
          </div>

          <div className={styles.tyreCard}>
            <img className={styles.tyre} src="/assets/tyre3.jpg" alt="шины3"/>
            <div>ШИНЫ ДЛЯ СТРОИТЕЛЬНОЙ И ДОРОЖНО-СТРОИТЕЛЬНОЙ ТЕХНИКИ</div>
          </div>
        </div>
      </div>
    </div>
  );
}
