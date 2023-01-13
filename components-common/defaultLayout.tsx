import Navbar from "./Navbar";
import styles from "../styles/Layout.module.scss";

const Header = (props:any) => null

const Body = (props:any) => null

const Footer = (props:any) => null

const DefaultLayout  = ({ children }) => {

  const header = children.find((el: { type: () => null; }) => el.type === Header)
  const body = children.find((el: { type: () => null; }) => el.type === Body)
  const footer = children.find((el: { type: () => null; }) => el.type === Footer)

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
