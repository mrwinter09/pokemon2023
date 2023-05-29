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


function BattlePage({abilityDescription, pokemon, pokemonResultImage, pokemonResult, pokemonType, pokemonHp, pokemonStats, pokemonWeight, pokemonHeight}) {
  console.log(abilityDescription);
  console.log(pokemonResultImage);

  const [password, setPassword] = useState(true)


  function setPas(){
    setPassword(!password)
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
          {/* <p className="abilityDescriptionText">{abilityDescription}</p> */}
            </div>

          <div className="center">

          <header className="App-header">
          <h1 className='battle vs'>VS</h1>
          </header>

          </div>
          
            <div className="split">
              {/* <p className="abilityDescriptionText">{abilityDescription}</p> */}
              <div className="right">
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
          
            </div>
    </div>
      <section>
        <h2>Gegevens</h2>
        <p><strong>{pokemon}</strong> </p>
        <p><strong>Email: </strong>{}</p>
        <p><strong>Wachtwoord: </strong><span className={password === true ? 'hidden' : 'no-hidden'}>{}</span></p>
        <button type='button' onClick={setPas}>Show wachtwoord</button>
      </section>
      </div>
    </>
  );
}

export default BattlePage;