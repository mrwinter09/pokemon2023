import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import { useHistory } from 'react-router-dom'
import './SignIn.css'
import axios from 'axios'

function SignIn() {
  const navigate = useHistory()
  const { setRegisterUserName, valueName, valuePassword, signInFunction } = useContext(AuthContext)
  const [loginEmail, setLoginEmail] = useState('')
  const [loginPassword, setLoginPassword] = useState('')
  // eslint-disable-next-line
  const [warning, setWarning] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    if (loginEmail === valueName && loginPassword === valuePassword) {
      signUserin()
      return navigate.push('/')
    } else {
      setWarning(true)
    }
  }

  async function signUserin() {
    try {
      const response = await axios.post('https://frontend-educational-backend.herokuapp.com/api/auth/signin', {
        username: valueName,
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
              Username:
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
            <button type="submit" className="submit-button">
              Log in
            </button>
          </form>
        </div>
        <div className="signin-footer">
          <p className={warning ? 'not-hidden' : 'hidden'}>
            Oepss...Dit you register?? ore did you type your password wrong
          </p>
          <p>
            Don't have an account yet? <Link to="/signup">Sign</Link> up here.
          </p>
        </div>
      </div>
    </>
  )
}

export default SignIn
