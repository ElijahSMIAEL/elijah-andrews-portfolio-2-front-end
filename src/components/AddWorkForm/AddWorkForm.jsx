import { useState } from 'react'
import styles from './AddWorkForm.module.css'

const AddWorkForm = (props) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    githubLink: '',
    deployedLink: '',
  })
  const [photoData, setPhotoData] = useState({})

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleChangePhoto = (e) => {
    setPhotoData({ photo: e.target.files[0] })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      props.handleAddWork(formData, photoData.photo)
    } catch (err) {
      console.log(err)
    }
  }

  const {title, description, githubLink, deployedLink} = formData
  const isFormInvalid = () => {
    return !(title, description, githubLink, deployedLink)
  }

  return(
    <>
    <main>
      <form
        onSubmit={handleSubmit}
        autoComplete='off'
      >
      <label htmlFor="title-input">Title:</label>
      <input 
        type="text" 
        name="title" 
        id="title-input" 
        value={formData.title}
        onChange={handleChange}
      />
      <label htmlFor="description-input">Description:</label>
      <input 
        type="text"
        name='description' 
        id='description-input'
        value={formData.description}
        onChange={handleChange}
      />
      <label htmlFor="deployedLink-input">GitHub Link:</label>
      <input 
        type="text" 
        name='githubLink'  
        id='githubLink-input'
        value={formData.githubLink}
        onChange={handleChange}
      />
      <label htmlFor="deployedLink-input">Deployed Link:</label>
      <input 
        type="text" 
        name='deployedLink' 
        id='deployedLink-input'
        value={formData.deployedLink}
        onChange={handleChange}
      />
      <label htmlFor="photo-upload">Photo:</label>
      <input
        type="file"
        className="form-control"
        id="photo-upload"
        name="photo"
        onChange={handleChangePhoto}
      />
      <button disabled={isFormInvalid()}>
        Add Work
      </button>
      </form>
    </main>
    </>
  )
}

export default AddWorkForm