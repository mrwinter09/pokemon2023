import './SearchResultCard.css'
function SearchResultCard({results, setPokemon, pokemon}) {
  const inactive = pokemon === results.name;


  return (
    <>
   <div className='search-result' onClick={() => setPokemon(results.name)}>{results.name}</div>
   <div className={inactive ? 'search-result' : 'search-result hidden'}>{results.email}</div>
   <div className={inactive ? 'search-result' : 'search-result hidden'}>{results.phone}</div>
   <div className={inactive ? 'search-result' : 'search-result hidden'}>{results.username}</div>
   <div className={inactive ? 'search-result' : 'search-result hidden'}>{results.website}</div>
    </>
  );
}

export default SearchResultCard;