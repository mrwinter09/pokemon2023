import React, { useState } from 'react';
import bug from '../../assets/icons/bug.png'
import dark from '../../assets/icons/dark.png'
import dragon from '../../assets/icons/dragon.png'
import electric from '../../assets/icons/electric.png'
import fairy from '../../assets/icons/fairy.png'
import fighting from '../../assets/icons/fighting.png'
import fire from '../../assets/icons/fire.png'
import flying from '../../assets/icons/flying.png'
import ghost from '../../assets/icons/ghost.png'
import grass from '../../assets/icons/grass.png'
import ground from '../../assets/icons/ground.png'
import ice from '../../assets/icons/ice.png'
import normal from '../../assets/icons/normal.png'
import poison from '../../assets/icons/poison.png'
import psychic from '../../assets/icons/psychic.png'
import rock from '../../assets/icons/rock.png'
import steel from '../../assets/icons/steel.png'
import water from '../../assets/icons/water.png'
import './BattlePage.css'


function BattlePage({setPokemonHpScoreB, pokemonHpScoreB, setPokemonHpScoreA, pokemonHpScoreA, setPokemonBattleId, pokemonHeightB, pokemonWeightB, pokemonStatsB, pokemonHpB, pokemonTypeB, pokemonResultB ,pokemonResultImageB, pokemonBattleIconB, pokemonBattleIcon, pokemonSpeciesName, abilityDescription, pokemonResultImage, pokemonResult, pokemonType, pokemonHp, pokemonStats, pokemonWeight, pokemonHeight}) {
  const totalProgressBars = 1;
  const progressStatusArray = [1, 2, 3, 4, 5, 6];
  const progressStatusArrayLength = progressStatusArray.length;

  const [startButton, setStartButton] = useState(false)
  const [battleStatsA, setBattleStatsA] = useState(6)
  const [battleStatsB, setBattleStatsB] = useState(6)
  const [totalScore, setTotalScore] = useState(0)
  const gameover = battleStatsA === 0 || battleStatsB === 0;

  function reset(){
    setStartButton(false)
    setBattleStatsA(6)
    setBattleStatsB(6)
  }
  
  function scoreCount() {
    if (battleStatsB === 0) {
      return setTotalScore(totalScore + 1)
    }
  }

  function pokemonId(max) {
    return Math.floor(Math.random() * max)
  }

  const winnerA = battleStatsB === 0
  const winnerB = battleStatsA === 0

  let numberA = battleStatsA;
  let numberB = battleStatsB;

  let testCountA = (pokemonStats / 6 * pokemonStatsB / pokemonStats).toFixed(0)
  let testCountB = (pokemonStatsB / 6 * pokemonStats / pokemonStatsB).toFixed(0)
 console.log(testCountB ) 
 console.log(testCountA ) 


  const ProgressDivs = ({ backgroundColorStyle, flexValue }) => {
  return (
    <div
      style={{
        display: "flex",
        backgroundColor: backgroundColorStyle,
        flex: flexValue,
        padding: "1.5%"
      }}
    />
  );
};

function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let randomNum = generateRandomNumber(1, 2);


  const player = {
    1: pokemonResult.name,
    2: pokemonResultB.name
  }

  const colors = {
    fire:'#ffdec1',
    grass:'#c8ffcc',
    electric:'#fff5c4',
    water:'#c5edff',
    ground:'#f6dbc1',
    rock:'#d3d3b3',
    fairy:'#f8d3ff',
    poison:'#7dd78f',
    bug:'#fac984',
    dragon:'#78a0e9',
    psychic:'#e5e97b',
    flying:'#e4c0c0',
    fighting:'#d9c499',
    normal:'#ecf0f1',
    dark:'#7dd78f',
    ghost:'#f6dbc1',
    ice:'#d9c499',
    steel:'#c8ffcc',
  }
  
  const icon = {
    fire: fire,
    grass: grass,
    electric: electric,
    water: water,
    ground: ground,
    rock: rock,
    fairy: fairy,
    poison: poison,
    bug: bug,
    dragon: dragon,
    psychic: psychic,
    flying: flying,
    fighting: fighting,
    normal: normal,
    dark: dark,
    ghost: ghost,
    ice: ice,
    steel: steel,
    }
  const symbols =icon[pokemonType]
  const color = colors[pokemonType]

  return (
    <>
    <div className="App">
      <header className="App-header">
        <h1 className='battle'>Battle Page</h1>
      </header>
      <div className="split-bar">
       <div>
        <p className='titleNameA'>{pokemonHp} {pokemonHpScoreA}<img src={pokemonBattleIcon} alt=''></img><span className={winnerA ? '' : 'hidden'}>{pokemonSpeciesName}</span></p>
       <div className='energyBar'>
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
       <p className='titleNameB'><span className={winnerB ? '' : 'hidden'}>{pokemonSpeciesName}</span><img src={pokemonBattleIconB} alt=''></img>{pokemonHpB} {pokemonHpScoreB}</p>
        <div
          className='energyBar'
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
          <div style={{border: '5px solid'+ color}} className="card card--charizard">
           <div className="card-image">
             <div className="card-image-container">
               <img src={pokemonResultImage} alt={pokemonResult.name}/>
             </div>
           </div>
           <div className="card-content">
             <div className="main">
               <div className="title has-text-white">{pokemonResult.name}</div>
               <hr style={{backgroundColor: color}} />
               <div className="hp">{pokemonHp} {pokemonStats}</div>
             </div>
             <div className="stats columns is-mobile">
               <div className="column nudge">
               <img className='symbol' src={symbols} alt={pokemonType}></img>
                 <span style={{backgroundColor: color}} className="tag is-warning">Type</span>
               </div>

               <div className="column center-column">{pokemonWeight} lbs
                 <span style={{backgroundColor: color}} className="tag is-warning">Weight</span>
               </div>
               <div className="column">{pokemonHeight} m
                 <span style={{backgroundColor: color}} className="tag is-warning">Height</span>
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
          <div style={{border: '5px solid'+ color}} className="card card--charizard">
           <div className="card-image">
             <div className="card-image-container">
               <img src={pokemonResultImageB} alt={pokemonResultB.name}/>
             </div>
           </div>
           <div className="card-content">
             <div className="main">
               <div className="title has-text-white">{pokemonResultB.name}</div>
               <hr style={{backgroundColor: color}} />
               <div className="hp">{pokemonHpB} {pokemonStatsB}</div>
             </div>
             <div className="stats columns is-mobile">
               <div className="column nudge">
               <img className='symbol' src={symbols} alt={pokemonTypeB}></img>
                 <span style={{backgroundColor: color}} className="tag is-warning">Type</span>
               </div>

               <div className="column center-column">{pokemonWeightB} lbs
                 <span style={{backgroundColor: color}} className="tag is-warning">Weight</span>
               </div>
               <div className="column">{pokemonHeightB} m
                 <span style={{backgroundColor: color}} className="tag is-warning">Height</span>
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
          <button onClick={() => {reset(); scoreCount(); setPokemonBattleId(pokemonId(1000)); setPokemonHpScoreA(pokemonStats); setPokemonHpScoreB(pokemonStatsB)}} className={gameover ? 'start-btn' : 'hidden'}>Reset</button>
          
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