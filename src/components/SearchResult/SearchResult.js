import React from 'react';
import './SearchResult.css'
import SearchResultCard from '../SearchResultCard/SearchResultCard';



function SearchResults({results, setPokemon, pokemon, setActive, setPokemonBattleId }) {
  const inactive = pokemon === '';
  return (
    <>
        <div className={!inactive ? 'search-result' : 'search-result hidden'}>
     {
      results.map((result, id) => {
        return <SearchResultCard setPokemonBattleId={setPokemonBattleId} setActive={setActive} results={result} key={id} setPokemon={setPokemon} pokemon={pokemon}/>
      })
     }
    </div>
    </>
  );
}

export default SearchResults;