import React, { useContext } from 'react'
import logo from '../../assets/Poké_Ball_icon.svg.png'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import './Navigation.css'
import { useHistory } from 'react-router-dom/'
import { PokemonContext } from '../../context/PokemonContext'

function Nav() {
  const { registerUserName, setRegisterUserName, valueName, signOutFunction, isAuthMan } = useContext(AuthContext)
  const { setPokemon } = useContext(PokemonContext)
  const history = useHistory()

  function signOutButton() {
    signOutFunction()
    setRegisterUserName(false)
    history.push('/')
  }

  return (
    <nav className="nav-logo">
      <Link to="/">
        <span onClick={() => setPokemon('')} className="logo-container">
          <img src={logo} alt="logo" />
          <h3>
            welcome <span className={registerUserName ? '' : 'hidden'}>{valueName}</span>
          </h3>
        </span>
      </Link>
      <div className="nav-button">
        {isAuthMan ? (
          <>
            <button type="button" onClick={signOutButton} className="sign-out">
              Log out
            </button>
            <button type="button" onClick={() => history.push('/profile')} className="profile">
              Profile
            </button>
          </>
        ) : (
          <>
            <button type="button" onClick={() => history.push('/signin')} className="registration">
              Log in
            </button>
          </>
        )}
      </div>
    </nav>
  )
}

export default Nav
