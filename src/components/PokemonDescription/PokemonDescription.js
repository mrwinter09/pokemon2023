import './PokemonDescription.css'
function HomeText({pokemon, pokemonSpecies, firstPokemonResult}) {
  const inactive = pokemon === firstPokemonResult.pokemonName
 


  return (
    <>
    <div className='homeTextContainer'>
    <div className='homeTextContainerContent'>
    <p className={inactive ? '' : ' hidden'} >{pokemonSpecies}</p>
    </div>
    </div>
    </>
  );
}

export default HomeText;