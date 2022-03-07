import Head from 'next/head'
import Navbar from "../../../../components-common/Navbar";
import styles from './Item.module.scss';
import {useEffect, useState} from "react";
import {useRouter} from "next/router";

interface IJson {
  hdr: string;
  descr: string;
  p_descr: string[];
  url: string;
  base: string[];
  png: string;
  thdr: string[];
  tbody: Array<string[]>;
  extra: Array<{name: string, url: string}>
}

// @ts-ignore
const OpalItem = ({id}) => {
  console.log('curr id: ', id);

  const [currId, setCurrId] = useState(0);
  const [hdr, setHdr] = useState('');
  const [descr, setDescr] = useState('');
  const [url, setUrl] = useState('');
  const [thdr, setThdr] = useState(['']);
  const [tbody, setTbody] = useState([['']]);
  const [png, setPng] = useState('');
  const [base, setBase] = useState(['']);
  const [extra, setExtra] = useState([{name: '', url: ''}]);
  const [pDescr, setPdescr] = useState(['']);
  const [extraImg, setExtraImg] = useState('');

  let json = {} as IJson;


  useEffect(() => {
    // const { id } = router.query;
    // setCurrId(id ? +id : 0 );
    console.log('id: ', currId);

    json = require("/public/assets_item_opal/" + id + ".json");
    setHdr(json.hdr);
    setDescr(json.descr);
    setUrl(json.url);
    setThdr(json.thdr);
    setTbody(json.tbody);
    setPng(json.png);

    setExtra(json.extra);

    console.log('urL: ', extra[0].url);
    setExtraImg( extra[0].url );

    setPdescr(json.p_descr);
    setBase(json.base);

  } );

  useEffect(() => {
    setExtraImg(extraImg);

  }, [extraImg])

  return (
    <div className={styles.container}>
      <Navbar/>
      <Head>
        <title>АгроФинансСтрой</title>
        {/*<meta name="description" content="Generated by create next app" />*/}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h2 className={styles.hdr}>{hdr}</h2>
      <main className={styles.prod_descr}>
        <div className={styles.descr_wrap}>
          <div className={styles.descr}>{descr}</div>
          <img className={styles.img_main} src={"/assets_item_opal/" + png} alt={hdr}/>
          <ol className={styles.ol}>{pDescr?.map((it, idx) => <li className={styles.li} key={idx}>{it}</li>)}</ol>
        </div>
        { url !== '' &&
          <div className={styles.yt_wrapper}>
            <iframe className={styles.yt_url} src={url}></iframe>
          </div>
        }

        <h2>Комплектация</h2>
        <div className={styles.complect}>
          <div>
            <h4 className={styles.h4base}>Базовая комплектация</h4>
            <ul>{base?.map(it => <li key={it}>{it}</li>)}</ul>
          </div>
          <div>
            <h4 className={styles.h4base}>Дополнительная комплектация</h4>
            <ul>
              {extra?.map(it => <li key={it.name}><a className={styles.extra_href} onClick={() => setExtraImg(it.url)}>{it.name}</a></li>)}
            </ul>
          </div>
          <img className="" src={"/assets_item_opal/" + extraImg} alt={extraImg}/>
        </div>

        <div id="parameters" className="pux-container  pt-10">
          <h2 className="transform-none">Технические параметры</h2>
          <table className={styles.table} cellPadding="1" cellSpacing="1">
            <thead>
            <tr>
              {/*<th scope="col" style={{textAlign: 'left'}}>Технические параметры</th>*/}
              {thdr?.map((it, idx) => <th key={idx} colSpan={idx == thdr.length - 1 ? tbody[0].length - thdr.length + 1 : 1} rowSpan={1} scope="col">{it}</th>)}
            </tr>
            </thead>
            <tbody>
              {tbody?.map((tr, idx) => <tr key={idx}>{tr.map((td, idx) => <td key={idx}>{td}</td>)}</tr>)}
            </tbody>
          </table>
        </div>

      </main>
    </div>
  )
}

export default OpalItem;

export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  // const res = await fetch('https://.../posts')
  const ids = Array.from(Array(19).keys())

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