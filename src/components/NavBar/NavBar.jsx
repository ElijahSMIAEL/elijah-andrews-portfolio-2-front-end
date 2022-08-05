import { Link } from 'react-router-dom'
import styles from './NavBar.module.css'

const NavBar = ({ user, handleLogout }) => {
  return (
    <>
        <nav>
          <div className={styles.navContainer}>
            <Link to="/contact">Contact Me</Link>
            <Link to="" onClick={handleLogout}>LOG OUT</Link>
            <Link to="/works">Works</Link>
            <Link to="/resume">Resume</Link>
          </div>
        </nav>
    </>
  )
}

export default NavBar
