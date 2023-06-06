
import React, { useContext, useState, useEffect } from 'react';
import {Redirect, Switch, Route } from 'react-router-dom';
import Nav from './components/Navigation/Nav';
import BattlePage from './pages/BattlePage/BattlePage';
import Home from './pages/Home/Home';
import Profile from './pages/Profile/Profile'
import SignIn from './pages/Signin/SignIn';
import SignUp from './pages/SignUp/SignUp';
import { AuthContext } from './context/AuthContext';
import axios from 'axios';
import './App.css';

function App() {
  const [active, setActive] = useState(false)
  const [results, setResults] = useState([])
  const [pokemon, setPokemon] = useState("")

// Pokemon A
  const [pokemonResult, setPokemonResult] = useState("")
  const [pokemonResultImage, setPokemonResultImage] = useState("")
  const [pokemonBattleIcon, setPokemonBattleIcon] = useState("")
  const [pokemonType, setPokemonType] = useState("")
  const [pokemonHp, setPokemonHp] = useState("")
  const [pokemonWeight, setPokemonWeight] = useState("")
  const [pokemonHeight, setPokemonHeight] = useState("")
  const [pokemonStats, setPokemonStats] = useState("")
  const [pokeAbilityName, setpokeAbilityName] = useState("")
  const [firstPokemonResult, setFirstPokemonResult] = useState({})



// Pokemon B
   const [pokemonResultB, setPokemonResultB] = useState("")
   const [pokemonResultImageB, setPokemonResultImageB] = useState("")
   const [pokemonBattleIconB, setPokemonBattleIconB] = useState("")
   const [pokemonTypeB, setPokemonTypeB] = useState("")
   const [pokemonHpB, setPokemonHpB] = useState("")
   const [pokemonWeightB, setPokemonWeightB] = useState("")
   const [pokemonHeightB, setPokemonHeightB] = useState("")
   const [pokemonStatsB, setPokemonStatsB] = useState("")
   const [pokeAbilityNameB, setpokeAbilityNameB] = useState("")

//Pokemon Datagrab
  const [pokeNames, setPokeNames] = useState([])
// eslint-disable-next-line
  const [pokeAbility, setpokeAbility] = useState([])
  const [abilityDescription, setAbilityDescription] = useState("")
  const [pokemonSpecies, setPokemonSpecies] = useState([])
  const [pokemonSpeciesName, setPokemonSpeciesName] = useState('')

  const [pokemonBattleId, setPokemonBattleId] = useState(0)

// battlesystem
const [pokemonHpScoreA, setPokemonHpScoreA ] = useState(0)
const [pokemonHpScoreB, setPokemonHpScoreB ] = useState(0)

  useEffect(() => {
    function callPokemon(value) {
      const results = pokeNames.filter((user)=> {
        return value && user && user.name && user.name.toLowerCase().includes(value.toLowerCase())
      })
      setResults(results);
    }
    callPokemon(pokemon)
  }, 
  // eslint-disable-next-line
  [pokemon])

  useEffect(()=> {
    const fetchData = () => {
      fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
        .then(response => response.json())
        .then((json) => {
          setPokeNames(json.results)
        })
    }
      fetchData()
  },[]);

  useEffect(() => {
    async function fetchDataPokemonAbility() {
      try {
        const responseAbility = await axios.get(`https://pokeapi.co/api/v2/ability/${pokeAbilityName}`);
        setpokeAbility(responseAbility.data)
        setAbilityDescription(responseAbility.data.effect_entries['1'].effect)
      } catch (e) {
        console.error(e);
      }
    }
    if(pokeAbilityName){
      fetchDataPokemonAbility()
    }
  },[pokeAbilityName]);

//Fetch Pokemon A
  useEffect(() => {
    async function fetchDataPokemon() {
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

        const firstPokemonApiResult = {
          pokemonResult: response.data,
          pokemonName: response.data.name,
          pokemonResultImage: response.data.sprites.other['official-artwork'].front_default,
          pokemonBattleIcon: response.data.sprites.versions['generation-vii'].icons.front_default,
          pokemonType: response.data.types['0'].type.name,
          pokemonHp: response.data.stats['0'].stat.name,
          pokemonWeight: response.data.weight,
          pokemonHeight: response.data.height,
          pokemonStats: response.data.stats['0'].base_stat,
          pokeAbilityName: response.data.abilities['0'].ability.name,
        }

        setFirstPokemonResult(firstPokemonApiResult)
    
        setPokemonResult(response.data)
        setPokemonResultImage(response.data.sprites.other['official-artwork'].front_default)
        setPokemonBattleIcon(response.data.sprites.versions['generation-vii'].icons.front_default)
        setPokemonType(response.data.types['0'].type.name)
        setPokemonHp(response.data.stats['0'].stat.name)
        setPokemonWeight(response.data.weight)
        setPokemonHeight(response.data.height)
        setPokemonStats(response.data.stats['0'].base_stat)
        setpokeAbilityName(response.data.abilities['0'].ability.name)

        // const pokemonResult = response.data;
        // const pokemonResultImage = response.data.sprites.other['official-artwork'].front_default;
        // const pokemonBattleIcon = response.data.sprites.versions['generation-vii'].icons.front_default;
        // const pokemonType = response.data.types['0'].type.name;
        // const pokemonHp = response.data.stats['0'].stat.name;
        // const pokemonWeight = response.data.weight;
        // const pokemonHeight = response.data.height;
        // const pokemonStats = response.data.stats['0'].base_stat;
        // const pokeAbilityName = response.data.abilities['0'].ability.name;
      } catch (e) {
        console.error(e);
      }
    }
    if(pokemon){
      fetchDataPokemon()
    }
  },[pokemon]);

  //Fetch Pokemon B
  useEffect(() => {
    async function fetchDataPokemon() {
      try {
        const responsePokemonBattle = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonBattleId}`);
        console.log(responsePokemonBattle.data)
        setPokemonResultB(responsePokemonBattle.data)
        setPokemonResultImageB(responsePokemonBattle.data.sprites.other['official-artwork'].front_default)
        setPokemonBattleIconB(responsePokemonBattle.data.sprites.versions['generation-vii'].icons.front_default)
        setPokemonTypeB(responsePokemonBattle.data.types['0'].type.name)
        setPokemonHpB(responsePokemonBattle.data.stats['0'].stat.name)
        setPokemonWeightB(responsePokemonBattle.data.weight)
        setPokemonHeightB(responsePokemonBattle.data.height)
        setPokemonStatsB(responsePokemonBattle.data.stats['0'].base_stat)
        setpokeAbilityNameB(responsePokemonBattle.data.abilities['0'].ability.name)
        setPokemonHpScoreB(responsePokemonBattle.data.stats['0'].base_stat)
      } catch (e) {
        console.error(e);
      }
    }
    if(pokemonBattleId){
      fetchDataPokemon()
    }
  },[pokemonBattleId]);


  useEffect(() => {
    async function fetchDataPokemon() {
      try {
        const responseSpecies = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${pokemon}`);
        setPokemonSpecies(responseSpecies.data.flavor_text_entries['6'].flavor_text)
        setPokemonSpeciesName(responseSpecies.data.names['0'].name)
      } catch (e) {
        console.error(e);
      }
    }
    if(pokemon){
      fetchDataPokemon()
    }
  },[pokemon]);

  // const firstPokemonApiResult = {
  //   pokemonResult: pokemonResult,
  //   pokemonResultImage: pokemonResultImage,
  //   pokemonBattleIcon: pokemonBattleIcon,
  //   pokemonType: pokemonType,
  //   pokemonHp: pokemonHp,
  //   pokemonWeight: pokemonWeight,
  //   pokemonHeight: pokemonHeight,
  //   pokemonStats: pokemonStats,
  //   pokeAbilityName: pokeAbilityName,
  // }

console.log(firstPokemonResult)

  const { isAuthMan } = useContext(AuthContext);
  return (
    <>
    <Nav setPokemon={setPokemon} />
    <div className="content">
      <Switch>
        <Route exact path="/">
          <Home firstPokemonResult={firstPokemonResult} pokemonHpScoreB={pokemonHpScoreB} pokemonStatsB={pokemonStatsB} setPokemonHpScoreB={setPokemonHpScoreB} setPokemonHpScoreA={setPokemonHpScoreA} setPokemonBattleId={setPokemonBattleId} setActive={setActive}  active={active} pokemon={pokemon} setPokemon={setPokemon} pokemonResult={pokemonResult} results={results} pokemonHeight={pokemonHeight} pokemonWeight={pokemonWeight} pokemonStats={pokemonStats} pokemonHp={pokemonHp} pokemonResultImage={pokemonResultImage} pokemonType={pokemonType} pokemonSpecies={pokemonSpecies} abilityDescription={abilityDescription} />
        </Route>
        <Route path="/profile">
        {isAuthMan ? <Profile pokemonBattleIcon={pokemonBattleIcon} /> : <Redirect to="/" />}
        </Route>
        <Route path="/battlepage">
        {isAuthMan ? <BattlePage setPokemonHpScoreB={setPokemonHpScoreB} pokemonHpScoreB={pokemonHpScoreB} setPokemonHpScoreA={setPokemonHpScoreA} pokemonHpScoreA={pokemonHpScoreA} setPokemonBattleId={setPokemonBattleId} pokeAbilityNameB={pokeAbilityNameB} pokemonHeightB={pokemonHeightB} pokemonWeightB={pokemonWeightB} pokemonStatsB={pokemonStatsB} pokemonHpB={pokemonHpB} pokemonTypeB={pokemonTypeB} pokemonResultB={pokemonResultB} pokemonResultImageB={pokemonResultImageB} pokemonBattleIconB={pokemonBattleIconB} pokemonBattleIcon={pokemonBattleIcon} pokemonSpeciesName={pokemonSpeciesName} abilityDescription={abilityDescription} pokemonResultImage={pokemonResultImage} pokemon={pokemon} pokemonResult={pokemonResult} pokemonType={pokemonType} pokemonHp={pokemonHp} pokemonStats={pokemonStats} pokemonWeight={pokemonWeight} pokemonHeight={pokemonHeight} /> : <Redirect to="/" />}
        </Route>
        <Route exact path="/signin">
          <SignIn />
        </Route>
        <Route exact path="/signup">
          <SignUp />
        </Route>
      </Switch>
    </div>
    </>
  );
}

export default App;