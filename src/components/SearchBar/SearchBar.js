import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import './SearchBar.css'

function SearchBar({ pokemon, setPokemon, firstPokemonResult, setActive, active }) {
  const inactive = pokemon === firstPokemonResult.pokemonName

  return (
    <>
    <p className={!inactive ? 'pokemonCardContainer' : 'pokemonCardContainer hidden'}>Which Pokemon do you want to catch...</p>
    <div className={active ? 'search active' : 'search'}>
      <input type='text' className='input' placeholder='....Type to search' value={pokemon} onChange={(e) => setPokemon(e.target.value)}></input>
      <button onClick={()=> setActive(!active)} className='btn btn-style'><FontAwesomeIcon className='icon-color' icon={faSearch} /></button>
    </div>
    </>
  )
}

export default SearchBar;