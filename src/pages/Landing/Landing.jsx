import styles from './Landing.module.css'

const Landing = () => {

  return (
    <div className={styles.overlay}>
    <main className={styles.container}>
      <div className={styles.heading}>
      <h1 className={styles.header}>Elijah Andrews</h1>
      </div>
      <div className={styles.bio}>
        <h3>I am a Chicago-based developer working mainly with computer hardware and accessories 
        </h3>
        <h3>Developing software provides new challenges that I seek to learn from</h3>
        <h3>I enjoy writing web applications, especially using React, however I will not shy away from unfamiliar territory</h3>
      </div>
    </main>
    </div>
  )
}

export default Landing
