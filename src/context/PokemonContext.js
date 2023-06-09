import React, { createContext, useState } from "react";

export const PokemonContext = createContext({})

function PokemonContextComponent({children}) {
  function pokemonId(max) {
    return Math.floor(Math.random() * max)
  }

  const data = {
    pokemonId:pokemonId,

  }

  return (
    <PokemonContext.Provider value={data}>
      {children}
      </PokemonContext.Provider>
  )
}

export default PokemonContextComponent