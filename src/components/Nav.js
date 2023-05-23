import React, { useContext } from 'react';
import logo from '../assets/pokemon.svg';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import './Nav.css'
import { useHistory } from "react-router-dom/";

function Nav() {
  const { signOutFunction, isAuthMan} = useContext(AuthContext);
  const history = useHistory();

  function signinOut() {
    signOutFunction()
    history.push('/')
  }

  return (
    <nav>
        <Link to="/">
          <span className="logo-container">
            <img src={logo} alt="logo"/>
            <h3>
              Pokemon
            </h3>
          </span>
        </Link>

      <div>
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