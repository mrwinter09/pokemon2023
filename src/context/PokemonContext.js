import React, { createContext } from "react";

export const PokemonContext = createContext({})

function PokemonContextComponent({children}) {

  class PokemonMoves {
    constructor(name, move){
      this.name = name;
      this.move = move;
    }
    attackA() {
     const {name, move} = this;
     return `${name} is doing the ${move}`
    }
  }

  class PokemonA extends PokemonMoves {
    attackA() {
      return 'Take That!!!!'
    }
  }

  class PokemonB extends PokemonMoves {
    attackB() {
      return 'Take That!!!!'
    }
  }

  const data = {
   fight: PokemonMoves
  }

  return (
    <PokemonContext.Provider value={data}>
      {children}
      </PokemonContext.Provider>
  )
}

export default PokemonContextComponent