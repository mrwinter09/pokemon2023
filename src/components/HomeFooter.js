import './HomeFooter.css'

function HomeFooter({pokemonResult, pokemon,}) {
  const inactive = pokemon === pokemonResult.name
 


  return (
    <>
    <footer className={inactive ? 'App-footer' : ' hidden'} >
      <p>Stress test this pokemon to a other Pokemon</p>
      <button type='button'>Bench Mark</button>
    </footer>
    </>
  );
}

export default HomeFooter;

