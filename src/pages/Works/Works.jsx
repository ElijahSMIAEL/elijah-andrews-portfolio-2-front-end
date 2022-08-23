import styles from './Works.module.css'
import AddWorkForm from '../../components/AddWorkForm/AddWorkForm'
import WorkCard from '../../components/WorkCard/WorkCard'
import * as workService from '../../services/workService'
import { useState, useEffect } from 'react'

const Works = (props) => {
  const isOwner = props.profile === '62ed37e4bd59c21ec5b6352e'
  const works = props.works

  return(
    <>
      <main>
        { isOwner ?
          <AddWorkForm handleAddWork={props.handleAddWork}/>
          :
          <></>
        }
          { !(works === []) ?          
          <div className={styles.worksContainer}>
          {works.map(work =>
            <WorkCard
            key={work._id}
            work={work}
            />
            )}
          </div>
          :
          <h1 className={styles.loadMessage}>Loading Works...</h1>
        }
      </main>
    </>
  )
}

export default Works