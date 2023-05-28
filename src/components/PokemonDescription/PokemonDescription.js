import './PokemonDescription.css'
function HomeText({abilityDescription, pokemonResult, pokemon, pokemonSpecies}) {
  const inactive = pokemon === pokemonResult.name
 


  return (
    <>
    <div className='homeTextContainer'>
    <div className='homeTextContainerContent'>
    {/* <p className={inactive ? '' : ' hidden'} >{abilityDescription}</p> */}
    <p className={inactive ? '' : ' hidden'} >{pokemonSpecies}</p>
    </div>
    </div>
    
    </>
  );
}

export default HomeText;