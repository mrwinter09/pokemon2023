import React from 'react';
import './SearchResult.css'
import SearchResultCard from '../SearchResultCard/SearchResultCard';



function SearchResults({results, setPokemon, pokemon, setActive }) {
  const inactive = pokemon === '';
  return (
    <>
        <div className={!inactive ? 'result' : 'result hidden'}>
     {
      results.map((result, id) => {
        return <SearchResultCard setActive={setActive} results={result} key={id} setPokemon={setPokemon} pokemon={pokemon}/>
      })
     }
    </div>
    </>
  );
}

export default SearchResults;