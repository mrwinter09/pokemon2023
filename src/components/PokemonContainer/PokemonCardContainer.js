import './PokemonCardContainer.css'
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

function PokemonCardContainer({pokemon, firstPokemonResult}) {
const inactive = pokemon === firstPokemonResult.pokemonName

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

const icons = {
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

const icon = icons[firstPokemonResult.pokemonType]
const color = colors[firstPokemonResult.pokemonType]


  return (
    <>
<div className={inactive ? 'pokemonCardContainer' : 'pokemonCardContainer hidden'}>
    <div style={{border: '5px solid'+ color}} className="card card--charizard">
      
      <div className="card-image">
        <div className="card-image-container">
          <img src={firstPokemonResult.pokemonResultImage} alt={firstPokemonResult.pokemonName}/>
        </div>
      </div>

      <div className="card-content">

        <div className="main">
          <div className="title has-text-white">{firstPokemonResult.pokemonName}</div>
          <hr style={{backgroundColor: color}} />
          <div className="hp">{firstPokemonResult.pokemonHp} {firstPokemonResult.pokemonStats}</div>
        </div>
        
        <div className="stats columns is-mobile">
          <div className="column nudge">
          <img className='symbol' src={icon} alt={firstPokemonResult.pokemonType}></img>
            <span style={{backgroundColor: color}} className="tag is-warning">Type</span>
          </div>

          <div className="column center-column">{firstPokemonResult.pokemonWeight} lbs
            <span style={{backgroundColor: color}} className="tag is-warning">Weight</span>
          </div>
          <div className="column">{firstPokemonResult.pokemonHeight} m
            <span style={{backgroundColor: color}} className="tag is-warning">Height</span>
          </div>
        </div>
      </div>
    </div>
    </div>
    </>
  );
}

export default PokemonCardContainer;