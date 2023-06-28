import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import './SignUp.css'

function SignUp() {
  const { valueName, valueEmail, valuePassword, valueInputName, valueInputEmail, valueInputPassword } =
    useContext(AuthContext)
  const navigate = useHistory()
  const disabledButton = !valueName || !valueEmail || valuePassword < 6

  function onSubmit() {
    navigate.push('/signin')
  }

  async function signUserUp() {
    try {
      // eslint-disable-next-line
      const response = await axios.post('https://frontend-educational-backend.herokuapp.com/api/auth/signup', {
        username: valueName,
        email: valueEmail,
        password: valuePassword,
        role: ['user'],
      })
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <header className="App-header">
        <h1 className="signup-title">Register</h1>
        <p className="signup-title">to Battle</p>
      </header>
      <div className="signup-form">
        <form onSubmit={onSubmit}>
          <label>
            Username:
            <input type="text" name="name" id="details-name" onChange={(e) => valueInputName(e.target.value)}></input>
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              id="details-email"
              onChange={(e) => valueInputEmail(e.target.value)}
            ></input>
          </label>
          <label>
            Password:
            <input
              type="password"
              name="password"
              id="details-password"
              onChange={(e) => valueInputPassword(e.target.value)}
            ></input>
          </label>
          <button
            disabled={disabledButton}
            type="submit"
            className={disabledButton ? 'submit-button-disable' : 'submit-button'}
            onClick={signUserUp}
          >
            Sign up
          </button>
        </form>
      </div>
      <div className="signup-footer">
        <p>
          Already have an account? <Link to="/signin">Login</Link>
        </p>
      </div>
    </>
  )
}

export default SignUp
