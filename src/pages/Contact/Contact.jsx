import styles from './Contact.module.css'

const Contact = () => {

  return(
    <main className={styles.container}>
      <h1 className={styles.header}>Contact Me</h1>
      <div className={styles.contactsContainer}>
        <a className={styles.contactIcon} href="https://github.com/ElijahSMIAEL" target="_blank" rel="noopener noreferrer"><img src="/images/GitHub-Mark.png" alt="github" /></a>
        <a className={styles.contactIcon} href="https://www.linkedin.com/in/elijahcandrews/" target="_blank" rel="noopener noreferrer"><img src="/images/LinkedInLogo.png" alt="github" /></a>
      </div>
    </main>
  )
}

export default Contact