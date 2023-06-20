import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import { useHistory } from 'react-router-dom'
import './SignIn.css'
import axios from 'axios'

function SignIn() {
  const navigate = useHistory()
  const { setRegisterUserName, valueEmail, valuePassword, signInFunction } = useContext(AuthContext)
  const [loginEmail, setLoginEmail] = useState('')
  const [loginPassword, setLoginPassword] = useState('')
  // eslint-disable-next-line
  const [warning, setWarning] = useState(false)

  function handleSubmit(e) {
    if (loginEmail === valueEmail && loginPassword === valuePassword) {
      e.preventDefault()
      return navigate.push('/')
    } else {
      setWarning(true)
    }
  }

  async function signUserip() {
    try {
      const response = await axios.post('http://localhost:3000/login', {
        email: loginEmail,
        password: loginPassword,
      })
      setRegisterUserName(true)
      signInFunction(response.data.accessToken)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <div>
        <header className="App-header">
          <h1 className="signin-title">Log in</h1>
          <p className="signin-title">Ready to Battle</p>
        </header>
        <div className="singin-form">
          <form onSubmit={handleSubmit}>
            <label>
              Email:
              <input type="text" name="name" id="details-name" onChange={(e) => setLoginEmail(e.target.value)}></input>
            </label>
            <label>
              Password:
              <input
                type="password"
                name="email"
                id="details-email"
                onChange={(e) => setLoginPassword(e.target.value)}
              ></input>
            </label>
            <button type="submit" className="submit-button" onClick={signUserip}>
              Log in
            </button>
          </form>
        </div>
        <div className="signin-footer">
          <p>
            Don't have an account yet? <Link to="/signup">Sign</Link> up here.
          </p>
        </div>
      </div>
    </>
  )
}

export default SignIn
