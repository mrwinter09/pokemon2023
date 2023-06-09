import React, { useContext } from 'react';
import './HomePageFooter.css'
import { useHistory } from "react-router-dom/";
import { AuthContext } from '../../context/AuthContext';
import { Link } from 'react-router-dom';


function HomePageFooter({firstPokemonResult, secondPokemonResult, pokemon, setPokemonBattleId, setPokemonHpScoreA, setPokemonHpScoreB}) {
  const {isAuthMan} = useContext(AuthContext);
  const inactive = pokemon === firstPokemonResult.pokemonName
  const history = useHistory();

  function pokemonIdSelector(max) {
    return Math.floor(Math.random() * max)
  }

  function pokemonHpStartScore() {
    setPokemonHpScoreB(secondPokemonResult.pokemonStatsB);
    setPokemonHpScoreA(firstPokemonResult.pokemonStats)
  }

  return (
    <>
    <footer className={inactive ? 'App-footer' : ' hidden'} >
      {isAuthMan ?
      <>
      <p className='battle-slogan'>Let's battle with {pokemon}</p>
        <button
        type="button"
        onClick={() => {history.push('/battlepage'); setPokemonBattleId(pokemonIdSelector(1000)); pokemonHpStartScore()}}
        className='start-btn'
        >
         Start Battle
        </button>
        </>
        :
        <>
       <p className='signin-top'>Wanna see {pokemon} in a battle</p>
       <p className='signin-bottom'><Link to="/signin">Log in</Link> ore register </p>
       <button
         type="button"
         onClick={() => {history.push('/signup');}}
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

export default HomePageFooter;

