import Navbar from "./Navbar";
import styles from "../styles/Layout.module.scss";

const Header = () => null

const Body = () => null

const Footer = () => null

const DefaultLayout  = ({ children }) => {

  const header = children.find(el => el.type === Header)
  const body = children.find(el => el.type === Body)
  const footer = children.find(el => el.type === Footer)

  return (
    <div>
      <header>
        <Navbar/>
        {header ? header.props.children : null}
      </header>
      <main>
        <div className={styles.container}>
          {body ? body.props.children : null}
        </div>
      </main>
      <footer>
        {footer ? footer.props.children : null}
      </footer>
    </div>
  )
}

DefaultLayout.Header = Header
DefaultLayout.Body = Body
DefaultLayout.Footer = Footer

export default DefaultLayout
