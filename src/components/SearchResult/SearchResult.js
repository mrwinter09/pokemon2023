import React from 'react'
import './SearchResult.css'
import SearchResultCard from '../SearchResultCard/SearchResultCard'
import { useContext } from 'react'
import { PokemonContext } from '../../context/PokemonContext'

function SearchResults() {
  const { pokemon, results } = useContext(PokemonContext)

  const inactive = pokemon === ''
  return (
    <>
      <div className={!inactive ? 'search-result' : 'search-result hidden'}>
        {results.map((result) => {
          return <SearchResultCard results={result} />
        })}
      </div>
    </>
  )
}

export default SearchResults
