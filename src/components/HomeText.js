import './HomeText.css'
function HomeText({abilityDescription, pokemonResult, pokemon}) {
  const inactive = pokemon === pokemonResult.name
 


  return (
    <>
    <div className='homeTextContainer'>
    <p className={inactive ? '' : ' hidden'} >{abilityDescription}</p>
    </div>
    
    </>
  );
}

export default HomeText;