import styles from './Landing.module.css'

const Landing = () => {

  return (
    <main className={styles.container}>
      <div className={styles.heading}>
      <img src="/images/ElijahAndrews(1).jpg" alt="Elijah" className={styles.profilePic}/>
      <h1 className={styles.header}>Elijah Andrews</h1>
      </div>
      <div className={styles.bio}>
        <h3>I am a recent software-engineering bootcamp graduate. I greatly enjoy working on React projects, but I am always looking for new challenges that widen my perspective on tech.</h3>
      </div>
    </main>
  )
}

export default Landing
