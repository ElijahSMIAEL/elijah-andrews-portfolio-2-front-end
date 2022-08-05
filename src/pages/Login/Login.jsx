import { useState } from 'react'
import LoginForm from '../../components/LoginForm/LoginForm'
import SignupForm from '../../components/SignupForm/SignupForm'
import styles from './Login.module.css'

const LoginPage = props => {
  const [message, setMessage] = useState([''])
  const [message2, setMessage2] = useState([''])

  const updateMessage = msg => {
    setMessage(msg)
  }

  const updateMessage2 = msg => {
    setMessage2(msg)
  }

  return (
    <main className={styles.container}>
      <h1>Log In</h1>
      <p>{message}</p>
      <LoginForm
        handleSignupOrLogin={props.handleSignupOrLogin}
        updateMessage={updateMessage}
      />
      <h2>Or</h2>
      <h1>Sign in</h1>
      <p>{message2}</p>
      <SignupForm 
        handleSignupOrLogin={props.handleSignupOrLogin}
        updateMessage={updateMessage2}
      />
    </main>
  )
}

export default LoginPage
