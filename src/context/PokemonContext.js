import React, { createContext, useState } from "react";

export const PokemonContext = createContext({})

function PokemonContextComponent({children}) {
  const [startButton, setStartButton] = useState(false)
  const [battleStatsA, setBattleStatsA] = useState(6)
  const [battleStatsB, setBattleStatsB] = useState(6)
  const [totalScore, setTotalScore] = useState(0)
  const gameover = battleStatsA === 0 || battleStatsB === 0;

  function scoreCount() {
    if (battleStatsB === 0) {
      return setTotalScore(totalScore + 1)
    }
  }


  function reset(){
    setStartButton(false)
    setBattleStatsA(6)
    setBattleStatsB(6)
  }

  const data = {
    startButton:startButton,
    setStartButton:setStartButton,
    battleStatsA:battleStatsA,
    setBattleStatsA:setBattleStatsA,
    battleStatsB:battleStatsB,
    setBattleStatsB:setBattleStatsB,
    reset:reset,
    gameover:gameover,
    scoreCount:scoreCount
  }

  return (
    <PokemonContext.Provider value={data}>
      {children}
      </PokemonContext.Provider>
  )
}

export default PokemonContextComponent