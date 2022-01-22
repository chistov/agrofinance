import Image from "next/image";
import styles from './Navbar.module.scss'
import {useRouter} from "next/router";

const Navbar = () => {
  const router = useRouter();
  return (
    <div className={styles.navbar}>
      <div className={styles.brand}>
        <Image
          onClick={() => router.push('/')}
          src="/assets/brand.svg"
          alt="название брэнда"
          width="300px"
          height="45px">
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
