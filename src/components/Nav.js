import React, { useContext } from 'react';
import logo from '../assets/Poké_Ball_icon.svg.png';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import './Nav.css'
import { useHistory } from "react-router-dom/";

function Nav() {
  const { signOutFunction, isAuthMan} = useContext(AuthContext);
  const history = useHistory();
  const {username} = useContext(AuthContext)

  function signinOut() {
    signOutFunction()
    history.push('/')
  }

  return (
    <nav className='nav-display-mobile'>
        <Link to="/">
          <span className="logo-container">
            <img src={logo} alt="logo"/>
            <h3>
            welcome {username}
            </h3>
          </span>
        </Link>

      <div className='nav-mobile'>
        {isAuthMan ?
        <button
          type="button"
          onClick={signinOut}
        >
          Uitlog
        </button>
        :
        <>
        <button
         type="button"
         onClick={() => history.push('/signin')}
       >
         Log in
       </button>
       <button
         type="button"
         onClick={() => history.push('/signup')}
       >
         Registreren
       </button>
       </>
        }
      </div>
    </nav>
  );
}

export default Nav;