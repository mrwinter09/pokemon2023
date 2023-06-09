import React, { useState, useContext } from 'react';
import {PokemonContext} from '../../context/PokemonContext'
import './BattlePage.css'


function BattlePage({firstPokemonResult, secondPokemonResult, setPokemonHpScoreB, pokemonHpScoreB, setPokemonHpScoreA, pokemonHpScoreA, setPokemonBattleId, pokemonSpeciesName, abilityDescription}) {
  const {startButton, setStartButton, battleStatsA, setBattleStatsA, battleStatsB, setBattleStatsB, reset, gameover, scoreCount, winnerA, winnerB, numberA, numberB, pokemonId, generateRandomNumber, randomNum, ProgressDivs, icons, colors } = useContext(PokemonContext)

  const totalProgressBars = 1;
  const progressStatusArray = [1, 2, 3, 4, 5, 6];
  const progressStatusArrayLength = progressStatusArray.length;
 

  const player = {
      1: firstPokemonResult.pokemonName,
      2: secondPokemonResult.pokemonNameB
    }

  let testCountA = (firstPokemonResult.pokemonStats / 6 * secondPokemonResult.pokemonStatsB / firstPokemonResult.pokemonStats).toFixed(0)
  let testCountB = (secondPokemonResult.pokemonStatsB / 6 * firstPokemonResult.pokemonStats / secondPokemonResult.pokemonStatsB).toFixed(0)

  const firstSymbols = icons[firstPokemonResult.pokemonType]
  const firstColor = colors[firstPokemonResult.pokemonType]
  const secondSymbols = icons[secondPokemonResult.pokemonTypeB]
  const secondColor = colors[secondPokemonResult.pokemonTypeB]

  return (
    <>
    <div className="App">
      <header className="App-header">
        <h1 className='battle-title'>Battle Page</h1>
      </header>
      <div className="split-bar">
       <div>
        <p className='pokemonScoreFirst'>{firstPokemonResult.pokemonHp} {pokemonHpScoreA}<img src={firstPokemonResult.pokemonBattleIcon} alt=''></img><span className={winnerA ? '' : 'hidden'}>{pokemonSpeciesName}</span></p>
       <div className='power-bar'>
          {progressStatusArray.map((item, index) => {
            return (
              <ProgressDivs
                key={item}
                backgroundColorStyle={index < numberA ? "red" : "black"}
                flexValue={
                  totalProgressBars / progressStatusArrayLength - 0.005
                }
              />
            );
          })}
        </div>
       </div>
       <div>
       <p className='pokemonScoreSecond'><span className={winnerB ? '' : 'hidden'}>{pokemonSpeciesName}</span><img src={secondPokemonResult.pokemonBattleIconB} alt=''></img>{secondPokemonResult.pokemonHpB} {pokemonHpScoreB}</p>
        <div
          className='power-bar'
        >
          {progressStatusArray.map((item, index) => {
            return (
              <ProgressDivs
                key={item}
                backgroundColorStyle={index < numberB ? "red" : "black"}
                flexValue={
                  totalProgressBars / progressStatusArrayLength - 0.005
                }
              />
            );
          })}
        </div>
       </div>

      </div>
        <div className='pokemonCardContainerBattlePage'>

        <div className="split">
              <div className="left">
          <div style={{border: '5px solid'+ firstColor}} className="card card--pokemon">
           <div className="card-image">
             <div className="card-image-container">
               <img src={firstPokemonResult.pokemonResultImage} alt={firstPokemonResult.pokemonName}/>
             </div>
           </div>
           <div className="card-content">
             <div className="main">
               <div className="title ">{firstPokemonResult.pokemonName}</div>
               <hr style={{backgroundColor: firstColor}} />
               <div className="pokemon-hp">{firstPokemonResult.pokemonHp} {firstPokemonResult.pokemonStats}</div>
             </div>
             <div className="stats">
               <div className="column nudge">
               <img className='symbol' src={firstSymbols} alt={firstPokemonResult.pokemonType}></img>
                 <span style={{backgroundColor: firstColor}} className="tag is-warning">Type</span>
               </div>

               <div className="column center-column">{firstPokemonResult.pokemonWeight} lbs
                 <span style={{backgroundColor: firstColor}} className="tag is-warning">Weight</span>
               </div>
               <div className="column">{firstPokemonResult.pokemonHeight} m
                 <span style={{backgroundColor: firstColor}} className="tag is-warning">Height</span>
               </div>
             </div>
           </div>
        </div>
          </div>
          <p className="abilityDescriptionText">{abilityDescription}</p>
            </div>

          <div className="center">
          <header className="App-header">
          <h1 className='battle vs'>VS</h1>
          </header>
          </div>

            <div className="split">
            <p className="abilityDescriptionText">{abilityDescription}</p>
              <div className="right">
          <div style={{border: '5px solid'+ secondColor}} className="card card--pokemon">
           <div className="card-image">
             <div className="card-image-container">
               <img src={secondPokemonResult.pokemonResultImageB} alt={secondPokemonResult.pokemonNameB}/>
             </div>
           </div>
           <div className="card-content">
             <div className="main">
               <div className="title ">{secondPokemonResult.pokemonNameB}</div>
               <hr style={{backgroundColor: secondColor}} />
               <div className="pokemon-hp">{secondPokemonResult.pokemonHpB} {secondPokemonResult.pokemonStatsB}</div>
             </div>
             <div className="stats">
               <div className="column nudge">
               <img className='symbol' src={secondSymbols} alt={secondPokemonResult.pokemonTypeB}></img>
                 <span style={{backgroundColor: secondColor}} className="tag is-warning">Type</span>
               </div>

               <div className="column center-column">{secondPokemonResult.pokemonWeightB} lbs
                 <span style={{backgroundColor: secondColor}} className="tag is-warning">Weight</span>
               </div>
               <div className="column">{secondPokemonResult.pokemonHeightB} m
                 <span style={{backgroundColor: secondColor}} className="tag is-warning">Height</span>
               </div>
             </div>
           </div>
        </div>
          </div>
            </div>
          </div>

      <section>

        <div className={!startButton ? 'button-start' : 'button-start hidden'}>
           <h2 className='title-margin'>Press Start</h2>
           <button onClick={() => {setStartButton(!startButton)}} type='button' className='start-btn'>START</button>
        </div>

        <div className={startButton ? 'button-ab' : 'button-ab hidden'}>
          <h2 className={gameover ? 'title-margin' : 'title-margin hidden'}>Game Over</h2>
          <button onClick={() => {reset(); scoreCount(); setPokemonBattleId(pokemonId(1000)); setPokemonHpScoreA(firstPokemonResult.pokemonStats); setPokemonHpScoreB(secondPokemonResult.pokemonStatsB)}} className={gameover ? 'start-btn' : 'hidden'}>Reset</button>

          <div className={gameover ? 'hidden' : ''}>
          <div className="center">
          <header className="App-header">
          <h1 className='battleplayer'>{player[randomNum]}</h1>
          </header>
          </div>
          <button disabled={randomNum === 2} onClick={() => {setBattleStatsB(battleStatsB - 1); setPokemonHpScoreB(pokemonHpScoreB - testCountA); generateRandomNumber(1, 2)}} type='button' className={randomNum === 1 ? 'video-game-button' : 'video-game-disable'}>A</button>
           <button disabled={randomNum === 1} onClick={() => {setBattleStatsA(battleStatsA - 1); setPokemonHpScoreA(pokemonHpScoreA - testCountB); generateRandomNumber(1, 2)}} type='button' className={randomNum === 2 ? 'video-game-button' : 'video-game-disable'}>B</button>
          </div>
        </div>



      </section>
      </div>
    </>
  );
}

export default BattlePage;