import Head from 'next/head'
import Navbar from "../../../../components-common/Navbar";
import {memo} from "react";
import styles from './GItem.module.scss';

interface IJson {
  techHdrs: string[];
  hdr: string;
  std: string[];
  access: string[];
  overview: string;
  picts: string[];
}

// @ts-ignore
const GaspardoItem = ({id}) => {
  console.log('curr id: ', id);
  let json = {} as IJson;
  json = require("/public/assets_item_gasp/" + id + ".json");
  // console.log('thdrs: ', json);
  const thdr = json.techHdrs;
  const jpg = id + '.jpg';
  const picts = json.picts;
  console.log('picts: ', picts);

  const maxIdx = 10;

  return (
    <div>
      <Navbar/>
      <Head>
        <title>АгроФинансСтрой</title>
        {/*<meta name="description" content="Generated by create next app" />*/}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h2 className={styles.hdr}>{json.hdr}</h2>
      <main className={styles.main}>
        <div className={styles.overview}>
          <img className={styles.img_main} src={"/assets_item_gasp/" + jpg} alt={'описание'}/>
          <div className={styles.overview_txt}>{json.overview}</div>
        </div>

        {
          picts.length &&
          (() => {
            return (
              <div className={styles.picts}>
                <h4>Фото</h4>
                <div className={styles.preview_wrap}>
                  {picts.map((p, idx) =>
                    <img key={p} className={styles.img_preview} src={"/assets_item_gasp/" + p} alt={p}/> )}
                </div>
              </div>
            )
          })()
        }

        <h4>Техническая информация</h4>
        <table className={styles.table} cellPadding="1" cellSpacing="1">
          <thead>
          <tr>
            {
              (() => {
                const th = [];
                th.push(thdr.map((it, idx) => {
                  if(it.includes('png')) {
                    return (
                      <th key={idx} colSpan={1} rowSpan={1} scope="col">
                        <div>
                          { idx == 2 ? 'РАБОЧАЯ ШИРИНА': idx == 3 ? 'ШИРИНА': idx == 4 ? 'РАБОЧАЯ ГРУБИНА': [5,6].includes(idx) ? 'НОМЕР ЛЕЗВИЯ': '' }
                        </div>
                        <img className={styles.img_main} src={"/assets_item_gasp/" + it} alt={'описание'}/>
                      </th>
                    )
                  }
                  else {
                    return <th key={idx} colSpan={1} rowSpan={1} scope="col">{it}</th>
                  }
                }))
                return th;
              })()
            }
          </tr>
          </thead>
          <tbody>
          {
            (() => {
              const tr = [];
              for(let i = 0; i < maxIdx; ++i) {
                // @ts-ignore
                const td = json["tech" + i] as string[];
                if(td) {
                  tr.push(<tr key={i}>{td.map((it, idx) => <td key={idx}>{it}</td>)}</tr>)
                }
                else {
                  break;
                }
              }
              return tr;
            })()
          }
          </tbody>
        </table>

        <h4>Стандартное оборудование</h4>
        <ul>
          { json.std.map((it, idx) => <li key={idx}>{it}</li>) }
        </ul>
        <h4>Аксессуары</h4>
          {
            (() => {
              const arr = json.access.map((it, idx) => <li key={idx}>{it}</li>)
              if(arr.length) {
                return (
                  <ul>{arr}</ul>
                )
              }
              return "Отсутствуют"
            })()
          }
      </main>
    </div>
  )
}

export default GaspardoItem;

export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  // const res = await fetch('https://.../posts')
  const ids = Array.from(Array(70).keys())

  // Get the paths we want to pre-render based on posts
  const paths = ids.map(id => ({
    params: { id: (id + 1) + '' },
  }))

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}

// This also gets called at build time
// @ts-ignore
export async function getStaticProps({ params: {id} }) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  if( !id ) id = 1;

  // Pass post data to the page via props
  return { props: {id}};
}
