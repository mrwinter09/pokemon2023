import './SearchResultCard.css'
function SearchResultCard({results, setPokemon, pokemon, setActive}) {
  const inactive = pokemon === results.name;

  return (
    <>
   <div className={!inactive ? 'search-result-card' : 'search-result-card hidden'} onClick={() => {setPokemon(results.name); setActive(false)}}>{results.name}</div>
    </>
  );
}

export default SearchResultCard;