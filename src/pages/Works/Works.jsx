import styles from './Works.module.css'
import AddWorkForm from '../../components/AddWorkForm/AddWorkForm'

const Works = (props) => {
  const isOwner = props.profile === '62ed37e4bd59c21ec5b6352e'

  return(
    <>
    <h1>Works Component</h1>

    { isOwner ?
      <AddWorkForm />
      :
      <h1>Nope</h1>
    }
    </>
  )
}

export default Works