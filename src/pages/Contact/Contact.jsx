import styles from './Contact.module.css'

const Contact = () => {

  return(
    <main className={styles.container}>
      <h1 className={styles.header}>Contact Me</h1>
      <div className={styles.contactsContainer}>
        <div className={styles.contact}>
          <a className={styles.contactIcon} href="https://github.com/ElijahSMIAEL" target="_blank" rel="noopener noreferrer"><img src="/images/GitHub-Mark.png" alt="github" /></a>
          <h3>GitHub</h3>
        </div>
        <div className={styles.contact}>
          <a className={styles.contactIcon} href="https://www.linkedin.com/in/elijahcandrews/" target="_blank" rel="noopener noreferrer"><img src="/images/LinkedInLogo.png" alt="github" /></a>
          <h3>LinkedIn</h3>
        </div>
        </div>
        <div className={styles.email}>
        <a href="mailto:elijah.smiael@gmail.com" className={styles.contactIcon}><img src="/images/EmailLogo.png" alt="Email" /></a>
        <div className={styles.emailName}>
        <h2>Email:</h2>
        <h3>elijah.smiael@gmail.com</h3>
        </div>
        </div>
    </main>
  )
}

export default Contact