import React from 'react';
import './SearchResult.css'
import SearchResultCard from '../SearchResultCard/SearchResultCard';
import { useContext } from 'react'
import {PokemonContext} from '../../context/PokemonContext'



function SearchResults({results }) {
  const { pokemon } = useContext(PokemonContext)
 
  const inactive = pokemon === '';
  return (
    <>
        <div className={!inactive ? 'search-result' : 'search-result hidden'}>
     {
      results.map((result, id) => {
        return <SearchResultCard results={result} key={id}/>
      })
     }
    </div>
    </>
  );
}

export default SearchResults;