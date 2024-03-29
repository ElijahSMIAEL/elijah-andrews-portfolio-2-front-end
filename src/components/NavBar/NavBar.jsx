import { Link } from 'react-router-dom'
import styles from './NavBar.module.css'

const NavBar = ({ user, handleLogout }) => {
  return (
    <>
        <nav>
          <div className={styles.navContainer}>
            { user &&
              <Link className={styles.link} to="" onClick={handleLogout}>LOG OUT</Link>
            }
            <Link className={styles.link} to="">About Me</Link>
            <Link className={styles.link} to="/works">Works</Link>
            <Link className={styles.link} to="/resume">Resume</Link>
            <Link className={styles.link} to="/contact">Contact Me</Link>
          </div>
        </nav>
    </>
  )
}

export default NavBar
