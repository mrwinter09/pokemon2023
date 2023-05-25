import './SearchResultCard.css'
function SearchResultCard({results, setPokemon, pokemon}) {
  const inactive = pokemon === results.name;


  return (
    <>
   <div className={!inactive ? 'search-result' : 'search-result hidden'} onClick={() => setPokemon(results.name)}>{results.name}</div>
    </>
  );
}

export default SearchResultCard;