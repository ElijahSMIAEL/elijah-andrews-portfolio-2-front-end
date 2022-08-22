import styles from './Works.module.css'
import AddWorkForm from '../../components/AddWorkForm/AddWorkForm'
import WorkCard from '../../components/WorkCard/WorkCard'
import * as workService from '../../services/workService'
import { useState, useEffect } from 'react'

const Works = (props) => {
  const isOwner = props.profile === '62ed37e4bd59c21ec5b6352e'
  const [works, setWorks] = useState([])

  useEffect(() => {
    const fetchAllWorks = async () => {
      const workData = await workService.getAll()
      setWorks(workData)
    }
    fetchAllWorks()
  }, [])

  const handleAddWork = async (workData, photo) => {
    const newWork = await workService.create(workData)
    setWorks([...works, newWork])
    if (photo) {
      newWork.photo = await workPhotoHelper(photo, newWork._id)
    }
  }

  const workPhotoHelper = async (photo, id) => {
    const photoData = new FormData()
    photoData.append('photo', photo)
    return await workService.addPhoto(photoData, id)
  }
  
  return(
    <>
      <main>
        { isOwner ?
          <AddWorkForm handleAddWork={handleAddWork}/>
          :
          <></>
        }
        { works ?          
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