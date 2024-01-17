import styles from './Contact.module.css'

const Contact = () => {

  return(
    <main className={styles.container}>
        <div className={styles.contact}>
          <a className={styles.contactIcon} href="https://github.com/ElijahSMIAEL" target="_blank" rel="noopener noreferrer"><img src="/images/GitHub-Mark.png" alt="github" /></a>
          <div className={styles.contactText}>
            <h3>GitHub</h3>
            <p>See more of my ongoing code or projects</p>
          </div>
        </div>
        <div className={styles.contact}>
          <a className={styles.contactIcon} href="https://www.linkedin.com/in/elijahcandrews/" target="_blank" rel="noopener noreferrer"><img src="/images/LinkedInLogo.png" alt="github" /></a>
          <div className={styles.contactText}>
            <h3>LinkedIn</h3>
            <p>Follow what I am working on</p>
          </div>
        </div>
        <div className={styles.contact}>
          <a href="mailto:elijah.smiael@gmail.com" className={styles.contactIcon}><img src="/images/EmailLogo.png" alt="Email" className={styles.emailIcon}/></a>
          <div className={styles.contactText}>
            <h3>elijah.smiael</h3>
            <p>Send me an email directly</p>
          </div>
        </div>
    </main>
  )
}

export default Contact