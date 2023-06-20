import React, { useContext } from 'react'
import { PokemonContext } from '../../context/PokemonContext'
import './SearchResultCard.css'

function SearchResultCard({ results }) {
  const { setActive, setPokemon, pokemon } = useContext(PokemonContext)
  const inactive = pokemon === results.name

  return (
    <>
      <div
        className={!inactive ? 'search-result-card' : 'search-result-card hidden'}
        onClick={() => {
          setPokemon(results.name)
          setActive(false)
        }}
      >
        {results.name}
      </div>
    </>
  )
}

export default SearchResultCard
