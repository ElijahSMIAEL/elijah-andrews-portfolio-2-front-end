import { useState } from 'react'
import { useSpring, animated } from 'react-spring'
import styles from './WorkCard.module.css'
import useMeasure from "react-use-measure"

const WorkCard = (props) => {
  const work = props.work
  const [showMore, setShowMore] = useState(false)
  const [ref, bounds] = useMeasure()



  function mouseOn() {
    setShowMore(true)
  }

  function mouseOff() {
    setTimeout(function() {
      setShowMore(false)
    }, 300)
  }

  const cardContentAnimatedStyle = useSpring({
    height: showMore ? bounds.height : 0,
    overflow: "hidden"
  })
  
  return(
    <>
    <div className="card" style={{width: 18 + 'rem'}} onMouseEnter={mouseOn} onMouseLeave={mouseOff}>
      <img className={styles.cardImgTop} src={work.photo} alt="Card cap"/>
      <h5 className="card-title">{work.title}</h5>
      <animated.div style={cardContentAnimatedStyle}>
      <div ref={ref}>
      <div className="card-body">
        <p className="card-text">{work.description}</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item"><a href={work.githubLink} className="card-link">GitHub Repository</a></li>
        <li className="list-group-item"><a href={work.deployedLink} className="card-link">Deployed Site</a></li>
      </ul>
      </div>
      </animated.div>
    </div>
    </>
  )
}

export default WorkCard