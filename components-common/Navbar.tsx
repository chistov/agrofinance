import Image from "next/image";
import styles from './Navbar.module.scss'
import {useRouter} from "next/router";
import {useEffect, useState} from "react";

const Navbar = () => {
  const router = useRouter();
  const [logged, setLogged] = useState(false);

  const [admin, setAdmin] = useState(false);
  useEffect(() => {
    if (typeof localStorage !== 'undefined') {
      const token = localStorage.getItem('token');
      if(token) {
        fetch('/api/auth', {
          method: 'POST',
          headers: {'Content-type': 'application/json'},
          body: JSON.stringify({token})
        })
          .then(async rsp => {
            // @ts-ignore
            if(rsp.status == 200) {
              setAdmin(true);
            }
          })
          .catch(e => console.log('err: ', e));

      }
    }}, [typeof localStorage])

  useEffect(() => { // document not available outside useEffect
    window.onscroll = function () {
      scrollFunction()
    };

    // const isExist = (needle: string): HTMLElement | null => {
    //   return
    // }

    function scrollFunction() {
      let el: HTMLElement | null = null;
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        (el = document.getElementById("navbar")) && (el.style.height = "50px");
        (el = document.getElementById("navimg")) && (el.style.transform = "scale(0.5)");
        (el = document.getElementById("aside-id")) && (el.style.top = "50px");
      } else {
        (el = document.getElementById("navbar")) && (el.style.height = "90px");
        (el = document.getElementById("navimg")) && (el.style.transform = "scale(1)");
        (el = document.getElementById("aside-id")) && (el.style.top = "50px");
      }
    }
  });

  const logOut = async () => {
    localStorage.removeItem('token');
    setAdmin(false);
    await router.push('/');
  }

  return (
    <div id="navbar" className={styles.navbar}>
      <div className={styles.brand}>
        <svg onClick={() => router.push('/')}
             className={styles.navimg}
             width="236" height="35" viewBox="0 0 236 35" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M197.66 24.5158H196.633C196.633 24.5158 177.834 14.9694 170.357 11.1727C169.675 10.8264 169.186 10.1175 169.049 9.27737C168.912 8.43727 169.145 7.57384 169.672 6.96903C169.896 6.71137 170.13 6.44345 170.369 6.16919C173.81 2.21916 178.479 0 183.346 0H235.592L227.191 9.64216H185.54L214.103 24.5158L209.287 30.0423C206.991 32.6775 203.877 34.1579 200.63 34.1579H145.853L154.255 24.5158H197.66Z" fill="white"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M72.5156 34.159L92.9054 10.3242C100.29 1.6915 104.284 0.0635986 118.188 0.0635986H168.132L157.996 11.6858H120.363C110.11 11.6858 107.469 12.6397 102.42 18.4964L88.9437 34.159H72.5156Z" fill="white"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M121.379 14.9146C111.126 14.9146 109.145 15.4596 104.524 20.8623L93.2217 34.1645H108.446L112.058 29.8515C114.194 27.2636 115.088 26.6278 120.175 26.6278H145.069L155.206 14.9146H121.379Z" fill="white"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M95.4001 0.330872L65.7625 34.2839H49.0036C49.0036 34.2839 59.2237 22.5756 64.8668 16.1109C65.2366 15.6873 65.2982 15.0255 65.0147 14.5221C64.7313 14.0187 64.1796 13.8101 63.6903 14.0214C50.8493 19.5655 16.7588 34.2839 16.7588 34.2839H0C0 34.2839 62.2683 7.39982 75.9885 1.47634C77.7428 0.718922 79.602 0.330872 81.4768 0.330872C86.256 0.330872 95.4004 0.330872 95.4004 0.330872H95.4001Z" fill="white"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M49.8138 30.8966H29.926C29.926 30.8966 44.7389 24.1625 48.8934 22.2739C49.6015 21.952 50.3564 21.7866 51.1181 21.7866C53.2887 21.7866 57.7658 21.7866 57.7658 21.7866L49.8138 30.8966Z" fill="white"/>
        </svg>

      </div>
      <div className={styles.menu}>
        <a href="#" onClick={() => router.push('/')}>ГЛАВНАЯ</a>
        <div className={styles.dropdown + ' ' + styles.ml15}>
          <a onClick={() => router.push('/')} className={styles.dropbtn}>ТЕХНИКА</a>
          <div className={styles.dropdown_content}>
            <a onClick={() => router.push('/tech/opal-agri')}>Opal Agri</a>
            <a onClick={() => router.push('/tech/gaspardo')}>Gaspardo</a>
          </div>
        </div>

        <div className={styles.dropdown + ' ' + styles.ml15}>
          <a onClick={() => router.push('/spare-parts')} className={styles.ml15} href="#">ЗАПЧАСТИ</a>
          <div className={styles.dropdown_content}>
            <a onClick={() => router.push('/spare-parts/maschio')}>Maschio</a>
            <a onClick={() => router.push('/spare-parts/pwgroup')}>PWGroup</a>
          </div>
        </div>

        <a onClick={() => router.push('/service')} className={styles.ml15} href="#">СЕРВИС</a>
        <a onClick={() => router.push('/contacts')} className={styles.ml15} href="#">КОНТАКТЫ</a>

      </div>
      {  admin ? <a onClick={logOut} className={styles.signout} href="#">Выйти</a> : null}
    </div>
  )
}

export default Navbar;
