import './PokemonDescription.css'
import { useContext } from 'react'
import {PokemonContext} from '../../context/PokemonContext'
function PokemonDescription() {
  const { pokemon, pokemonSpecies, firstPokemonResult } = useContext(PokemonContext)
  const inactive = pokemon === firstPokemonResult.pokemonName
 


  return (
    <>
    <div className='pokemonDescriptionContainer'>
    <div className='pokemonDescriptionContainerContent'>
    <p className={inactive ? '' : ' hidden'} >{pokemonSpecies}</p>
    </div>
    </div>
    </>
  );
}

export default PokemonDescription;