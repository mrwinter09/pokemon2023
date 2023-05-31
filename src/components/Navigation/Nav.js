import React, { useContext, useState } from 'react';
import logo from '../../assets/Poké_Ball_icon.svg.png';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import './Nav.css'
import { useHistory } from "react-router-dom/";

function Nav({setPokemon}) {
  const { registerUserName, setregisterUserName, valueTestName, signOutFunction, isAuthMan} = useContext(AuthContext);
  const history = useHistory();

  function signinOut() {
    signOutFunction()
    setregisterUserName(false)
    history.push('/')
  }

  return (
    <nav className='nav-display-mobile'>
        <Link to="/">
          <span onClick={() => setPokemon('')} className="logo-container">
            <img src={logo} alt="logo"/>
            <h3>
            welcome <span className={registerUserName ? '' : 'hidden'}>{valueTestName}</span>
            </h3>
          </span>
        </Link>
      <div className='nav-mobile'>
        {isAuthMan ?
        <>
        <button
          type="button"
          onClick={signinOut}
          className='loggOff'
        >
          Log out
        </button>
        <button
         type="button"
         onClick={() => history.push('/profile')}
         className='profile'
       >
         Profile
       </button>
        </>
        :
        <>
        <button
         type="button"
         onClick={() => history.push('/signin')}
         className='registration'
       >
         Log in
       </button>
       </>
        }
      </div>
    </nav>
  );
}

export default Nav;