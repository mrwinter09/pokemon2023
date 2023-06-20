import './PokemonContainer.css'
import { useContext } from 'react'
import { PokemonContext } from '../../context/PokemonContext'

function PokemonContainer() {
  const { icons, colors, pokemon, firstPokemonResult } = useContext(PokemonContext)
  const inactive = pokemon === firstPokemonResult.pokemonName
  const icon = icons[firstPokemonResult.pokemonType]
  const color = colors[firstPokemonResult.pokemonType]

  return (
    <>
      <div className={inactive ? 'pokemonCardContainer' : 'pokemonCardContainer hidden'}>
        <div style={{ border: '5px solid' + color }} className="card card--pokemon">
          <div className="card-image">
            <div className="card-image-container">
              <img src={firstPokemonResult.pokemonResultImage} alt={firstPokemonResult.pokemonName} />
            </div>
          </div>

          <div className="card-content">
            <div className="main">
              <div className="title">{firstPokemonResult.pokemonName}</div>
              <hr style={{ backgroundColor: color }} />
              <div className="pokemon-hp">
                {firstPokemonResult.pokemonHp} {firstPokemonResult.pokemonStats}
              </div>
            </div>
            <div className="stats">
              <div className="column nudge">
                <img className="icon" src={icon} alt={firstPokemonResult.pokemonType}></img>
                <span style={{ backgroundColor: color }} className="tag">
                  Type
                </span>
              </div>

              <div className="column center-column">
                {firstPokemonResult.pokemonWeight} lbs
                <span style={{ backgroundColor: color }} className="tag">
                  Weight
                </span>
              </div>
              <div className="column">
                {firstPokemonResult.pokemonHeight} m
                <span style={{ backgroundColor: color }} className="tag">
                  Height
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PokemonContainer
