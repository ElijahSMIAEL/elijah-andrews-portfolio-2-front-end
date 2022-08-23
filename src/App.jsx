import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import * as workService from './services/workService'
import * as authService from './services/authService'
import Contact from './pages/Contact/Contact'
import Resume from './pages/Resume/Resume'
import Works from './pages/Works/Works'

const App = () => {
  const [user, setUser] = useState(authService.getUser())
  const [works, setWorks] = useState([])
  const navigate = useNavigate()

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

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
  }

  
  return (
    <>
      <NavBar user={user} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route
          path="/login"
          element={<Login handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path='/contact'
          element={<Contact />}
        />
        <Route
          path='/resume'
          element={<Resume />}
        />
        <Route
          path='/works'
          element={<Works profile={user?.profile} handleAddWork={handleAddWork} works={works}/>}
        />
      </Routes>
    </>
  )
}

export default App
