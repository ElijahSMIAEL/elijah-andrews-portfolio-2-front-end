import styles from './Works.module.css'
import AddWorkForm from '../../components/AddWorkForm/AddWorkForm'
import WorkCard from '../../components/WorkCard/WorkCard'
import * as workService from '../../services/workService'
import { useState, useEffect } from 'react'


const Works = (props) => {
  const isOwner = props.profile === '65a1c702e60eeb52b1b8ba94'
  const works = props.works

  return(
    <>
      <div className={styles.overlay}>
        <main>
          { isOwner ?
            <AddWorkForm handleAddWork={props.handleAddWork}/>
            :
            <></>
          }
            { works.length ?          
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
      </div>
    </>
  )
}

export default Works