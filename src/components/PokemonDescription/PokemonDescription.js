import './PokemonDescription.css'
function PokemonDescription({pokemon, pokemonSpecies, firstPokemonResult}) {
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