import React, { useContext } from 'react'
import './HomePageFooter.css'
import { useHistory } from 'react-router-dom/'
import { AuthContext } from '../../context/AuthContext'
import { PokemonContext } from '../../context/PokemonContext'
import { Link } from 'react-router-dom'

function HomePageFooter() {
  const {
    firstPokemonResult,
    secondPokemonResult,
    pokemonId,
    setPokemonBattleId,
    setPokemonHpScoreA,
    setPokemonHpScoreB,
    reset,
    pokemon,
  } = useContext(PokemonContext)
  const { isAuthMan } = useContext(AuthContext)
  const inactive = pokemon === firstPokemonResult.pokemonName
  const history = useHistory()

  function pokemonHpStartScore() {
    setPokemonHpScoreB(secondPokemonResult.pokemonStats)
    setPokemonHpScoreA(firstPokemonResult.pokemonStats)
  }

  return (
    <>
      <footer className={inactive ? 'App-footer' : ' hidden'}>
        {isAuthMan ? (
          <>
            <p className="battle-slogan">Let's battle with {pokemon}</p>
            <button
              type="button"
              onClick={() => {
                history.push('/battlepage')
                setPokemonBattleId(pokemonId(1000))
                reset()
                pokemonHpStartScore()
              }}
              className="start-btn"
            >
              Start Battle
            </button>
          </>
        ) : (
          <>
            <p className="signin-top">Wanna see {pokemon} in a battle</p>
            <p className="signin-bottom">
              <Link to="/signin">Log in</Link> ore register{' '}
            </p>
            <button
              type="button"
              onClick={() => {
                history.push('/signup')
              }}
              className="registration"
            >
              Registreren
            </button>
          </>
        )}
      </footer>
    </>
  )
}

export default HomePageFooter
