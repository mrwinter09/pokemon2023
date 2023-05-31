import React, { useContext } from 'react';
import './HomeFooter.css'
import { useHistory } from "react-router-dom/";
import { AuthContext } from '../../context/AuthContext';
import { Link } from 'react-router-dom';


function HomeFooter({pokemonResult, pokemon,}) {
  const {isAuthMan} = useContext(AuthContext);
  const inactive = pokemon === pokemonResult.name
  const history = useHistory();

  // Trigger de math random

 


  return (
    <>
    <footer className={inactive ? 'App-footer' : ' hidden'} >
      {isAuthMan ?
      <>
      <p className='battle'>Let's battle with {pokemon}</p>
        <button
        type="button"
        onClick={() => history.push('/battlepage')}
        className='start-btn'
        >
          Battle
        </button>
        </>
        :
        <>
       <p className='bottom'>Wanna see {pokemon} in a battle</p>
       <p className='top'><Link to="/signin">Log in</Link> ore register </p>
       <button
         type="button"
         onClick={() => history.push('/signup')}
         className='registration'
       >
         Registreren
       </button>
       </>
        }
    </footer>
    </>
  );
}

export default HomeFooter;

