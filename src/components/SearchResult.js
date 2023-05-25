import React from 'react';
import './SearchResult.css'
import SearchResultCard from './SearchResultCard';
function SearchResults({results, setPokemon, pokemon}) {
  return (
    <>
        <div className='result'>
     {
      results.map((result, id) => {
        return <SearchResultCard results={result} key={id} setPokemon={setPokemon} pokemon={pokemon}/>
      })
     }
    </div>
    </>
  );
}

export default SearchResults;