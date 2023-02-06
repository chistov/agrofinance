import styles from "../styles/Claas.module.scss";

export default function Oils() {

  return (
    <div className={styles.container}>
      <div className={styles.oil_hdr}>Масло</div>
      <div className={styles.subcontainer}>
        <div className={styles.item}>
          <table className={styles.table}>
            <tbody>
            <tr>
              <td  className={styles.table} width="100">
                <div className="wpmd">
                  <div>
                    <img className={styles.logo}
                      src="/assets/total-logo-top.png" alt={'total logo'} width="153" height="42" />
                  </div>
                </div>
              </td>
              <td  className={styles.table} width="284">
                <div className="wpmd">
                  <div >Наименование</div>
                </div>
              </td>
              <td  className={styles.table} width="91">
                <div className="wpmd">
                  <div >Объем</div>
                </div>
              </td>
              <td className={styles.table}  width="100">
                <div className="wpmd">
                  <div >Наличие на складе</div>
                </div>
              </td>
            </tr>
            <tr>
              <td className={styles.table}  rowSpan={8} width="100">
                <div className="wpmd">
                  <div >
                    <img className={styles.oil_big}
                      src="/assets/oil_big.jpg" width="161" alt={'Масло бочка'} height="252"/>
                    <img src="/assets/oil_mid.jpg" width="80" alt={'Масло канистра'} height="106"/></div>
                </div>
              </td>
              <td className={styles.table}  width="284">
                <div className="wpmd">
                  <div ><b>Масло моторное </b></div>
                  <div ><b>TOTAL RUBIA TIR 7400 15W40</b></div>
                  <div ><br></br></div>
                </div>
              </td>
              <td className={styles.table}  width="91">
                <div className="wpmd">
                  <div >20л</div>
                  <div >208л</div>
                </div>
              </td>
              <td className={styles.table}  width="100">
                <div className="wpmd">
                  <div ><b>в наличии</b></div>
                </div>
              </td>
            </tr>
            <tr>
              <td className={styles.table}  width="284">
                <div className="wpmd">
                  <div ><b>Масло моторное </b></div>
                  <div ><b>TOTAL RUBIA TIR 8600 10W40</b></div>
                </div>
              </td>
              <td className={styles.table}  width="91">
                <div className="wpmd">
                  <div >20л</div>
                  <div >208л</div>
                  <div ><br></br></div>
                </div>
              </td>
              <td className={styles.table}  width="100">
                <div className="wpmd">
                  <div ><b>в наличии</b></div>
                </div>
              </td>
            </tr>
            <tr>
              <td className={styles.table}  width="284">
                <div className="wpmd">
                  <div ><b>Масло гидравлическое </b></div>
                  <div ><b>TOTAL EQUIVIS ZS 46</b></div>
                </div>
              </td>
              <td className={styles.table}  width="91">
                <div className="wpmd">
                  <div >20л</div>
                  <div >208л</div>
                  <div ><br></br></div>
                </div>
              </td>
              <td className={styles.table}  width="100">
                <div className="wpmd">
                  <div ><b>в наличии</b></div>
                </div>
              </td>
            </tr>
            <tr>
              <td className={styles.table}  width="284">
                <div className="wpmd">
                  <div ><b>Масло трансмиссионное TOTAL TM80W90</b></div>
                  <div ><br></br></div>
                </div>
              </td>
              <td className={styles.table}  width="91">
                <div className="wpmd">
                  <div >20л</div>
                  <div >208л</div>
                </div>
              </td>
              <td className={styles.table}  width="100">
                <div className="wpmd">
                  <div ><b>в наличии</b></div>
                </div>
              </td>
            </tr>
            <tr>
              <td className={styles.table}  width="284">
                <div className="wpmd">
                  <div ><b>Масло трансмиссионное&nbsp; TOTAL DYNATRANS DA
                    80W-90</b></div>
                  <div ><b><br></br></b></div>
                </div>
              </td>
              <td className={styles.table}  width="91">
                <div className="wpmd">
                  <div >20л</div>
                  <div >208л</div>
                </div>
              </td>
              <td className={styles.table}  width="100">
                <div className="wpmd">
                  <div ><b>в наличии</b></div>
                </div>
              </td>
            </tr>
            <tr>
              <td className={styles.table}  width="284">
                <div className="wpmd">
                  <div ><b>Масло трансмиссионно-гидравлическое TOTAL DYNATRANS MPV</b>
                  </div>
                </div>
              </td>
              <td className={styles.table}  width="91">
                <div className="wpmd">
                  <div >20л</div>
                  <div >208л</div>
                </div>
              </td>
              <td className={styles.table}  width="100">
                <div className="wpmd">
                  <div ><b>в наличии</b></div>
                </div>
              </td>
            </tr>
            <tr>
              <td className={styles.table}  width="284">
                <div className="wpmd">
                  <div ><b>Масло в АКПП</b></div>
                  <div ><b>TOTAL FLUID G3</b></div>
                  <div ><b><br></br></b></div>
                </div>
              </td>
              <td className={styles.table}  width="91">
                <div className="wpmd">
                  <div >20л</div>
                  <div >208л</div>
                </div>
              </td>
              <td className={styles.table}  width="100">
                <div className="wpmd">
                  <div ><b>в наличии</b></div>
                </div>
              </td>
            </tr>
            <tr>
              <td className={styles.table}  width="284">
                <div className="wpmd">
                  <div ><b>Антифриз </b></div>
                  <div ><b>50/50 TOTAL GLACELF AUTO SUPRA</b></div>
                </div>
              </td>
              <td className={styles.table}  width="91">
                <div className="wpmd">
                  <div >20л</div>
                  <div >208л</div>
                </div>
              </td>
              <td className={styles.table}  width="100">
                <div className="wpmd">
                  <div ><b>в наличии</b></div>
                </div>
              </td>
            </tr>
            <tr>
              <td className={styles.table}  width="100">
                <div className="wpmd">
                  <div ><img src="/assets/смазка.jpg" alt={'смазка'} width="88"  height="88" /></div>
                </div>
              </td>
              <td className={styles.table}  width="284">
                <div className="wpmd">
                  <div ><b>Смазка</b></div>
                  <div ><b> TOTAL LICAL EP2</b></div>
                </div>
              </td>
              <td className={styles.table}  width="91">
                <div className="wpmd">
                  <div >400гр</div>
                </div>
              </td>
              <td className={styles.table}  width="100">
                <div className="wpmd">
                  <div ><b>в наличии</b></div>
                </div>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
