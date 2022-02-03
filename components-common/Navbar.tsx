import Image from "next/image";
import styles from './Navbar.module.scss'
import {useRouter} from "next/router";
import {useEffect} from "react";

const Navbar = () => {
  const router = useRouter();

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

  return (
    <div id="navbar" className={styles.navbar}>
      <div className={styles.brand}>
        <Image
          className={styles.navimg}
          id="navimg"
          onClick={() => router.push('/')}
          src="/assets/brand.svg"
          alt="название брэнда"
          width="236" height="35"
          >
        </Image>
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
        <a onClick={() => router.push('/zapch')} className={styles.ml15} href="#">ЗАПЧАСТИ</a>
        <a onClick={() => router.push('/service')} className={styles.ml15} href="#">СЕРВИС</a>
        <a onClick={() => router.push('/contacts')} className={styles.ml15} href="#">КОНТАКТЫ</a>
      </div>
    </div>
  )
}

export default Navbar;
