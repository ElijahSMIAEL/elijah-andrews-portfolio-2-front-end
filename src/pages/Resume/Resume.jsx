import styles from './Resume.module.css'
import { motion } from 'framer-motion'
const Resume = () => {

  return(
    <main>
      <div className={styles.resumeContainer}>
      <a className={styles.resume} href="https://docs.google.com/document/d/1EBNw4IOjj9tg1ZdVhO-Cuc-TmvK5Jb4f04-Ea-Z4XB0/edit?usp=sharing" target='_blank' rel="noopener noreferrer" ><img src="/images/ECAResume.png" alt="Resume" /></a>
      </div>
    </main>
  )
}

export default Resume