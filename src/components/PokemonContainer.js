import './PokemonContainer.css'
import fire from '../assets/icons/fire.png'
import grass from '../assets/icons/grass.png'
import electric from '../assets/icons/electric.png'
import water from '../assets/icons/water.png'
import ground from '../assets/icons/ground.png'
import rock from '../assets/icons/rock.png'
import fairy from '../assets/icons/fairy.png'
import poison from '../assets/icons/poison.png'
import bug from '../assets/icons/bug.png'
import dragon from '../assets/icons/dragon.png'
import psychic from '../assets/icons/psychic.png'
import flying from '../assets/icons/flying.png'
import fighting from '../assets/icons/fighting.png'
import normal from '../assets/icons/normal.png'
import { useState } from 'react';

function PokemonContainer({pokemonResultImage, pokemonResult, pokemonType, pokemonHp, pokemonStats, pokemonWeight, pokemonHeight}) {
const [inactive, setinactive] = useState(false)

const colors = {
  fire:'#ffd0d0',
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
  normal:'F5F5F5',
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
  }

const symbols =icon[pokemonType]
const color = colors[pokemonType]


  return (
    <>
<div className={!inactive ? 'pokemonCardContainer' : 'pokemonCardContainer hidden'}>
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

          <div className="column center-column">{pokemonWeight}lbs
            <span style={{backgroundColor: color}} className="tag is-warning">Weight</span>
          </div>
          <div className="column">{pokemonHeight}m
            <span style={{backgroundColor: color}} className="tag is-warning">Height</span>
          </div>
        </div>
      </div>
    </div>
    </div>
    </>
  );
}

export default PokemonContainer;