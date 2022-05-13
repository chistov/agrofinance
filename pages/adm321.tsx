import { useRouter } from 'next/router';
import React, {useEffect, useState} from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Form } from "react-bootstrap";
import styles from "../styles/Common.module.scss";
import Navbar from "../components-common/Navbar";

const Admin = () => {
  const [admin, setAdmin] = useState(false);
  const router = useRouter();
  useEffect(() => {
    if (typeof localStorage !== 'undefined') {
      const token = localStorage.getItem('token');
      console.log('token: ', token);
      console.log('admin: ', admin);
      if(token && admin) { // rm extra auth req
        console.log('return')
        return;
      }
      console.log('after true');

      if(token) {
        fetch('/api/auth', {
          method: 'POST',
          headers: {'Content-type': 'application/json'},
          body: JSON.stringify({token})
        })
          .then(async rsp => {
            console.log('rsp: ', rsp)
            // @ts-ignore
            if(rsp.status == 200) {
              setAdmin(true);
            }
            else {
              await router.push('/auth/signin');
            }
          })
          .catch(e => console.log('err: ', e));

      }
    else {
      (async () => await router.push('/auth/signin'))();
    }
    }}, [typeof localStorage])


  const [hdr, setHdr] = useState('');
  const [body, setBody] = useState('');
  const [brand, setBrand] = useState('');
  const [picture, setPicture] = useState('');
  const [key, setKey] = useState(0);

  const handleText = (key: string, newVal: string) => {
    switch (key) {
      case 'hdr':
        setHdr(newVal);
        break;
      case 'body':
        setBody(newVal);
        break;
    }
  }

  const handleChange = (e:any) => {
    if(e.target.files && e.target.files[0]) {
      console.log('file found', e.target.files[0])
      setPicture( e.target.files[0]);
    }
  };

  function save() {
    const formData = new FormData();
    formData.append('picture', picture);
    formData.append('brand', brand);
    formData.append('hdr', hdr);
    formData.append('body', body);

    const token = localStorage.getItem('token');
    formData.append('token', token as string);

    console.log('save', {picture, brand, hdr, body, token});
    fetch('/api/add-card', {
      method: 'POST',
      // headers: {'Content-type': 'application/json'},
      // body: JSON.stringify({picture, brand, hdr, body, token})
      body: formData
    })
      .then(res => console.log('resp: ', res))
      .then(() => {
        setHdr('');
        setBody('');
        setBrand('');
        setPicture('');
        setKey(key + 1);
      })

  }

  if(admin) {
    return (
      <div>
        <Navbar/>
        <div className={styles.wrapper}>
          <div className="container mt-3 mt-md-5">
            <div className="row d-flex justify-content-center">
              <div className="col-6">
                <div className={styles.adm_form}>
                  <div className={styles.hdr}>Заголовок:</div>
                  <input className={styles.hdr_input} value={hdr}
                         onChange={(val) => handleText('hdr', val.target.value)}/>
                  <div className={styles.hdr}>Брэнд:</div>
                  <Form.Select value={brand} aria-label="Default select example" onChange={(val) => setBrand(val.target.value)}>
                    <option>Выбрать из списка:</option>
                    <option value="pwgroup">PWGroup</option>
                    <option value="maschio">Maschio</option>
                  </Form.Select>
                  <div className={styles.hdr}>Основной блок текста:</div>
                  <textarea className={styles.textarea} value={body}
                            onChange={(val) => handleText('body', val.target.value)}/>
                  <div className={styles.hdr}>Выберите фото:</div>
                  <input key={key} type="file" accept="image/*" onChange={handleChange}/>

                  <div className={styles.hdr}>
                    <button onClick={() => save()} className="btn btn-secondary">Добавить</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  else {
    return null;
  }

}

export default Admin;

