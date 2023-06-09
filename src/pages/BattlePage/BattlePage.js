import React, { useContext } from 'react'
import { PokemonContext } from '../../context/PokemonContext'
import { useHistory } from 'react-router-dom'
import './BattlePage.css'

function BattlePage() {
  const navigate = useHistory()
  const {
    firstPokemonResult,
    secondPokemonResult,
    pokemonSpeciesName,
    abilityDescription,
    setPokemonHpScoreB,
    pokemonHpScoreB,
    setPokemonHpScoreA,
    pokemonHpScoreA,
    startButton,
    setPokemonBattleId,
    setStartButton,
    battleStatsA,
    setBattleStatsA,
    battleStatsB,
    setBattleStatsB,
    reset,
    gameover,
    scoreCount,
    winnerA,
    winnerB,
    numberA,
    numberB,
    pokemonId,
    generateRandomNumber,
    randomNum,
    ProgressDivs,
    icons,
    colors,
    totalProgressBars,
    progressStatusArrayLength,
    progressStatusArray,
  } = useContext(PokemonContext)

  const player = {
    1: firstPokemonResult.pokemonName,
    2: secondPokemonResult.pokemonName,
  }

  let testCountA = (
    ((firstPokemonResult.pokemonStats / 6) * secondPokemonResult.pokemonStats) /
    firstPokemonResult.pokemonStats
  ).toFixed(0)
  let testCountB = (
    ((secondPokemonResult.pokemonStats / 6) * firstPokemonResult.pokemonStats) /
    secondPokemonResult.pokemonStats
  ).toFixed(0)

  const firstSymbols = icons[firstPokemonResult.pokemonType]
  const firstColor = colors[firstPokemonResult.pokemonType]
  const secondSymbols = icons[secondPokemonResult.pokemonType]
  const secondColor = colors[secondPokemonResult.pokemonType]

  return (
    <>
      <div className="App">
        <header className="App-header">
          <h1 className="battle-title">Battle Page</h1>
        </header>
        <div className="split-bar">
          <div>
            <p className="pokemonScoreFirst">
              {firstPokemonResult.pokemonHp} {pokemonHpScoreA}
              <img src={firstPokemonResult.pokemonBattleIcon} alt=""></img>
              <span className={winnerA ? '' : 'hidden'}>{pokemonSpeciesName}</span>
            </p>
            <div className="power-bar">
              {progressStatusArray.map((item, index) => {
                return (
                  <ProgressDivs
                    key={item}
                    backgroundColorStyle={index < numberA ? 'red' : 'black'}
                    flexValue={totalProgressBars / progressStatusArrayLength - 0.005}
                  />
                )
              })}
            </div>
          </div>
          <div>
            <p className="pokemonScoreSecond">
              <span className={winnerB ? '' : 'hidden'}>{pokemonSpeciesName}</span>
              <img src={secondPokemonResult.pokemonBattleIcon} alt=""></img>
              {secondPokemonResult.pokemonHp} {pokemonHpScoreB}
            </p>
            <div className="power-bar">
              {progressStatusArray.map((item, index) => {
                return (
                  <ProgressDivs
                    key={item}
                    backgroundColorStyle={index < numberB ? 'red' : 'black'}
                    flexValue={totalProgressBars / progressStatusArrayLength - 0.005}
                  />
                )
              })}
            </div>
          </div>
        </div>
        <div className="pokemonCardContainerBattlePage">
          <div className="split">
            <div className="left">
              <div style={{ border: '5px solid' + firstColor }} className="card card--pokemon">
                <div className="card-image">
                  <div className="card-image-container">
                    <img src={firstPokemonResult.pokemonResultImage} alt={firstPokemonResult.pokemonName} />
                  </div>
                </div>
                <div className="card-content">
                  <div className="main">
                    <div className="title ">{firstPokemonResult.pokemonName}</div>
                    <hr style={{ backgroundColor: firstColor }} />
                    <div className="pokemon-hp">
                      {firstPokemonResult.pokemonHp} {firstPokemonResult.pokemonStats}
                    </div>
                  </div>
                  <div className="stats">
                    <div className="column nudge">
                      <img className="symbol" src={firstSymbols} alt={firstPokemonResult.pokemonType}></img>
                      <span style={{ backgroundColor: firstColor }} className="tag is-warning">
                        Type
                      </span>
                    </div>

                    <div className="column center-column">
                      {firstPokemonResult.pokemonWeight} lbs
                      <span style={{ backgroundColor: firstColor }} className="tag is-warning">
                        Weight
                      </span>
                    </div>
                    <div className="column">
                      {firstPokemonResult.pokemonHeight} m
                      <span style={{ backgroundColor: firstColor }} className="tag is-warning">
                        Height
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className="abilityDescriptionText">{abilityDescription}</p>
          </div>

          <div className="center">
            <header className="App-header">
              <h1 className="battle-title vs">VS</h1>
            </header>
          </div>

          <div className="split">
            <p className="abilityDescriptionText">{abilityDescription}</p>
            <div className="right">
              <div style={{ border: '5px solid' + secondColor }} className="card card--pokemon">
                <div className="card-image">
                  <div className="card-image-container">
                    <img src={secondPokemonResult.pokemonResultImage} alt={secondPokemonResult.pokemonName} />
                  </div>
                </div>
                <div className="card-content">
                  <div className="main">
                    <div className="title ">{secondPokemonResult.pokemonName}</div>
                    <hr style={{ backgroundColor: secondColor }} />
                    <div className="pokemon-hp">
                      {secondPokemonResult.pokemonHp} {secondPokemonResult.pokemonStats}
                    </div>
                  </div>
                  <div className="stats">
                    <div className="column nudge">
                      <img className="symbol" src={secondSymbols} alt={secondPokemonResult.pokemonType}></img>
                      <span style={{ backgroundColor: secondColor }} className="tag is-warning">
                        Type
                      </span>
                    </div>

                    <div className="column center-column">
                      {secondPokemonResult.pokemonWeight} lbs
                      <span style={{ backgroundColor: secondColor }} className="tag is-warning">
                        Weight
                      </span>
                    </div>
                    <div className="column">
                      {secondPokemonResult.pokemonHeightB} m
                      <span style={{ backgroundColor: secondColor }} className="tag is-warning">
                        Height
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section>
          <div className={!startButton ? 'button-start' : 'button-start hidden'}>
            <h2 className="title-margin">Press Start</h2>
            <button
              onClick={() => {
                setStartButton(!startButton)
              }}
              type="button"
              className="start-btn"
            >
              START
            </button>
          </div>

          <div className={startButton ? 'button-ab' : 'button-ab hidden'}>
            <h2 className={gameover ? 'title-margin' : 'title-margin hidden'}>Game Over</h2>
            <button
              onClick={() => {
                reset()
                scoreCount()
                setPokemonBattleId(pokemonId(1000))
                setPokemonHpScoreA(firstPokemonResult.pokemonStats)
                setPokemonHpScoreB(secondPokemonResult.pokemonStatsB)
              }}
              className={gameover ? 'start-btn' : 'hidden'}
            >
              Reset
            </button>
            <button
              onClick={() => {
                navigate.push('/')
              }}
              className={gameover ? 'start-btn' : 'hidden'}
            >
              New Pokemon
            </button>

            <div className={gameover ? 'hidden' : ''}>
              <div className="center">
                <header className="App-header">
                  <h1 className="battleplayer">{player[randomNum]}</h1>
                </header>
              </div>
              <button
                disabled={randomNum === 2}
                onClick={() => {
                  setBattleStatsB(battleStatsB - 1)
                  setPokemonHpScoreB(pokemonHpScoreB - testCountA)
                  generateRandomNumber(1, 2)
                }}
                type="button"
                className={randomNum === 1 ? 'video-game-button' : 'video-game-disable'}
              >
                A
              </button>
              <button
                disabled={randomNum === 1}
                onClick={() => {
                  setBattleStatsA(battleStatsA - 1)
                  setPokemonHpScoreA(pokemonHpScoreA - testCountB)
                  generateRandomNumber(1, 2)
                }}
                type="button"
                className={randomNum === 2 ? 'video-game-button' : 'video-game-disable'}
              >
                B
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default BattlePage
