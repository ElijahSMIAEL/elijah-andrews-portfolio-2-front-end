import { useState } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import * as authService from './services/authService'
import Contact from './pages/Contact/Contact'
import Resume from './pages/Resume/Resume'
import Works from './pages/Works/Works'

const App = () => {
  const [user, setUser] = useState(authService.getUser())
  const navigate = useNavigate()

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
          element={user ? <Contact /> : <Login handleSignupOrLogin={handleSignupOrLogin} from={'contact'}/>}
        />
        <Route
          path='/resume'
          element={user ? <Resume /> : <Login handleSignupOrLogin={handleSignupOrLogin} from={'resume'}/>}
        />
        <Route
          path='/works'
          element={<Works profile={user?.profile}/>}
        />
      </Routes>
    </>
  )
}

export default App
