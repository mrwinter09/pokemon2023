import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios'
import bug from '../assets/icons/bug.png'
import dark from '../assets/icons/dark.png'
import dragon from '../assets/icons/dragon.png'
import electric from '../assets/icons/electric.png'
import fairy from '../assets/icons/fairy.png'
import fighting from '../assets/icons/fighting.png'
import fire from '../assets/icons/fire.png'
import flying from '../assets/icons/flying.png'
import ghost from '../assets/icons/ghost.png'
import grass from '../assets/icons/grass.png'
import ground from '../assets/icons/ground.png'
import ice from '../assets/icons/ice.png'
import normal from '../assets/icons/normal.png'
import poison from '../assets/icons/poison.png'
import psychic from '../assets/icons/psychic.png'
import rock from '../assets/icons/rock.png'
import steel from '../assets/icons/steel.png'
import water from '../assets/icons/water.png'

export const PokemonContext = createContext({})

function PokemonContextComponent({ children }) {
  // Pokemon API and Data call

  const [pokemon, setPokemon] = useState('')
  const [pokemonBattleId, setPokemonBattleId] = useState(0)
  const [results, setResults] = useState([])
  const [pokeNames, setPokeNames] = useState([])

  const [abilityDescription, setAbilityDescription] = useState('')
  const [pokemonSpecies, setPokemonSpecies] = useState([])
  const [pokemonSpeciesName, setPokemonSpeciesName] = useState('')

  // Pokemon A
  const [firstPokemonResult, setFirstPokemonResult] = useState({})

  // Pokemon B
  const [secondPokemonResult, setSecondPokemonResult] = useState({})

  useEffect(() => {
    function callPokemon(value) {
      const results = pokeNames.filter((user) => {
        return value && user && user.name && user.name.toLowerCase().includes(value.toLowerCase())
      })
      setResults(results)
    }
    callPokemon(pokemon)
  }, [pokemon])

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
        setPokeNames(response.data.results)
      } catch (e) {
        console.error(e)
      }
    }
    fetchData()
  }, [])

  useEffect(() => {
    async function fetchDataPokemon() {
      try {
        const responseSpecies = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${pokemon}`)
        setPokemonSpecies(responseSpecies.data.flavor_text_entries['6'].flavor_text)
        setPokemonSpeciesName(responseSpecies.data.names['0'].name)
      } catch (e) {
        console.error(e)
      }
    }
    if (pokemon) {
      fetchDataPokemon()
    }
  }, [pokemon])

  useEffect(() => {
    function creatPlayer(value) {
      const playerObject = {
        pokemonResult: value.data,
        pokemonName: value.data.name,
        pokemonResultImage: value.data.sprites.other['official-artwork'].front_default,
        pokemonBattleIcon: value.data.sprites.versions['generation-vii'].icons.front_default,
        pokemonType: value.data.types['0'].type.name,
        pokemonHp: value.data.stats['0'].stat.name,
        pokemonWeight: value.data.weight,
        pokemonHeight: value.data.height,
        pokemonStats: value.data.stats['0'].base_stat,
        pokeAbilityName: value.data.abilities['0'].ability.name,
      }
      return playerObject
    }
    async function fetchDataPokemon(a, b) {
      try {
        if (a) {
          const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${a}`)
          const playerOne = creatPlayer(response)
          setFirstPokemonResult(playerOne)
          const responseAbility = await axios.get(
            `https://pokeapi.co/api/v2/ability/${firstPokemonResult.pokeAbilityName}`
          )
          const abilities = responseAbility.data.effect_entries['1'].effect
          setAbilityDescription(abilities)
        }
        if (b) {
          const responsePokemonBattle = await axios.get(`https://pokeapi.co/api/v2/pokemon/${b}`)
          const playerTwo = creatPlayer(responsePokemonBattle)
          setSecondPokemonResult(playerTwo)
          setPokemonHpScoreB(playerTwo.pokemonStats)
        }
      } catch (e) {
        console.error(e)
      }
    }
    if (pokemon) {
      fetchDataPokemon(pokemon, pokemonBattleId)
    }
  }, [pokemon, pokemonBattleId])

  //Pokemon Battle State

  const [active, setActive] = useState(false)

  const [startButton, setStartButton] = useState(false)
  const [battleStatsA, setBattleStatsA] = useState(6)
  const [battleStatsB, setBattleStatsB] = useState(6)
  const [totalScore, setTotalScore] = useState(0)
  const gameover = battleStatsA === 0 || battleStatsB === 0
  const winnerA = battleStatsB === 0
  const winnerB = battleStatsA === 0

  const [pokemonHpScoreA, setPokemonHpScoreA] = useState(0)
  const [pokemonHpScoreB, setPokemonHpScoreB] = useState(0)

  const totalProgressBars = 1
  const progressStatusArray = [1, 2, 3, 4, 5, 6]
  const progressStatusArrayLength = progressStatusArray.length

  let numberA = battleStatsA
  let numberB = battleStatsB

  function pokemonId(max) {
    return Math.floor(Math.random() * max)
  }

  function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  let randomNum = generateRandomNumber(1, 2)

  function scoreCount() {
    if (battleStatsB === 0) {
      return setTotalScore(totalScore + 1)
    }
  }

  function reset() {
    setStartButton(false)
    setBattleStatsA(6)
    setBattleStatsB(6)
  }

  const ProgressDivs = ({ backgroundColorStyle, flexValue }) => {
    return (
      <div
        style={{
          display: 'flex',
          backgroundColor: backgroundColorStyle,
          flex: flexValue,
          padding: '1.5%',
        }}
      />
    )
  }

  const colors = {
    fire: '#ffdec1',
    grass: '#c8ffcc',
    electric: '#fff5c4',
    water: '#c5edff',
    ground: '#f6dbc1',
    rock: '#d3d3b3',
    fairy: '#f8d3ff',
    poison: '#7dd78f',
    bug: '#fac984',
    dragon: '#78a0e9',
    psychic: '#e5e97b',
    flying: '#e4c0c0',
    fighting: '#d9c499',
    normal: '#bcc3c4',
    dark: '#7dd78f',
    ghost: '#f6dbc1',
    ice: '#d9c499',
    steel: '#c8ffcc',
  }

  const icons = {
    fire: fire,
    grass: grass,
    electric: electric,
    water: water,
    ground: ground,
    rock: rock,
    fairy: fairy,
    poison: poison,
    bug: bug,
    dragon: dragon,
    psychic: psychic,
    flying: flying,
    fighting: fighting,
    normal: normal,
    dark: dark,
    ghost: ghost,
    ice: ice,
    steel: steel,
  }

  const data = {
    startButton: startButton,
    setStartButton: setStartButton,
    battleStatsA: battleStatsA,
    setBattleStatsA: setBattleStatsA,
    battleStatsB: battleStatsB,
    setBattleStatsB: setBattleStatsB,
    reset: reset,
    gameover: gameover,
    scoreCount: scoreCount,
    winnerA: winnerA,
    winnerB: winnerB,
    numberA: numberA,
    numberB: numberB,
    pokemonId: pokemonId,
    generateRandomNumber: generateRandomNumber,
    randomNum: randomNum,
    ProgressDivs: ProgressDivs,
    colors: colors,
    icons: icons,
    totalProgressBars: totalProgressBars,
    progressStatusArrayLength: progressStatusArrayLength,
    progressStatusArray: progressStatusArray,
    pokemonBattleId: pokemonBattleId,
    setPokemonBattleId: setPokemonBattleId,
    pokemonHpScoreA: pokemonHpScoreA,
    setPokemonHpScoreA: setPokemonHpScoreA,
    pokemonHpScoreB: pokemonHpScoreB,
    setPokemonHpScoreB: setPokemonHpScoreB,
    active: active,
    setActive: setActive,
    pokemon: pokemon,
    setPokemon: setPokemon,
    results: results,
    setResults: setResults,
    pokeNames: pokeNames,
    setPokeNames: setPokeNames,
    firstPokemonResult: firstPokemonResult,
    setFirstPokemonResult: setFirstPokemonResult,
    secondPokemonResult: secondPokemonResult,
    setSecondPokemonResult: setSecondPokemonResult,
    pokemonSpecies: pokemonSpecies,
    setPokemonSpecies: setPokemonSpecies,
    pokemonSpeciesName: pokemonSpeciesName,
    setPokemonSpeciesName: setPokemonSpeciesName,
    abilityDescription: abilityDescription,
    setAbilityDescription: setAbilityDescription,
  }

  return <PokemonContext.Provider value={data}>{children}</PokemonContext.Provider>
}

export default PokemonContextComponent
