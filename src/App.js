
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

  const [results, setResults] = useState([])
  const [pokemon, setPokemon] = useState("")
  const [pokemonResult, setPokemonResult] = useState("")
  const [pokemonResultImage, setPokemonResultImage] = useState("")
  const [pokemonBattleIcon, setPokemonBattleIcon] = useState("")
  const [pokemonType, setPokemonType] = useState("")
  const [pokeNames, setPokeNames] = useState([])

  const [pokeAbility, setpokeAbility] = useState([])
  const [abilityDescription, setAbilityDescription] = useState("")

  const [pokeAbilityName, setpokeAbilityName] = useState("")
  console.log(pokeAbility)
  const [pokemonHp, setPokemonHp] = useState("")
  const [pokemonWeight, setPokemonWeight] = useState("")
  const [pokemonHeight, setPokemonHeight] = useState("")
  const [pokemonStats, setPokemonStats] = useState("")
  const [pokemonSpecies, setPokemonSpecies] = useState([])
  const [pokemonSpeciesName, setPokemonSpeciesName] = useState('')

  const [active, setActive] = useState(false)

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
        const response = await axios.get(`https://pokeapi.co/api/v2/ability/${pokeAbilityName}`);
        setpokeAbility(response.data)
        setAbilityDescription(response.data.effect_entries['1'].effect)
      } catch (e) {
        console.error(e);
      }
    }
    if(pokeAbilityName){
      fetchDataPokemonAbility()
    }
  },[pokeAbilityName]);


  useEffect(() => {
    async function fetchDataPokemon() {
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
        setPokemonResult(response.data)
        setPokemonResultImage(response.data.sprites.other['official-artwork'].front_default)
        setPokemonBattleIcon(response.data.sprites.versions['generation-vii'].icons.front_default)
        console.log(response.data.sprites.versions['generation-vii'].icons)
        setPokemonType(response.data.types['0'].type.name)
        setPokemonHp(response.data.stats['0'].stat.name)
        setPokemonWeight(response.data.weight)
        setPokemonHeight(response.data.height)
        setPokemonStats(response.data.stats['0'].base_stat)
        setpokeAbilityName(response.data.abilities['0'].ability.name)
      } catch (e) {
        console.error(e);
      }
    }
    if(pokemon){
      fetchDataPokemon()
    }
  },[pokemon]);

  useEffect(() => {
    async function fetchDataPokemon() {
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${pokemon}`);
        setPokemonSpecies(response.data.flavor_text_entries['6'].flavor_text)
        setPokemonSpeciesName(response.data.names['0'].name)
        console.log(response.data)
      } catch (e) {
        console.error(e);
      }
    }
    if(pokemon){
      fetchDataPokemon()
    }
  },[pokemon]);



  const { isAuthMan } = useContext(AuthContext);
  return (
    <>
    <Nav />
    <div className="content">
      <Switch>
        <Route exact path="/">
          <Home setActive={setActive}  active={active} pokemon={pokemon} setPokemon={setPokemon} pokemonResult={pokemonResult} results={results} pokemonHeight={pokemonHeight} pokemonWeight={pokemonWeight} pokemonStats={pokemonStats} pokemonHp={pokemonHp} pokemonResultImage={pokemonResultImage} pokemonType={pokemonType} pokemonSpecies={pokemonSpecies} abilityDescription={abilityDescription} />
        </Route>
        <Route path="/profile">
        {isAuthMan ? <Profile /> : <Redirect to="/" />}
        </Route>
        <Route path="/battlepage">
        {isAuthMan ? <BattlePage pokemonBattleIcon={pokemonBattleIcon} pokemonSpeciesName={pokemonSpeciesName} abilityDescription={abilityDescription} pokemonResultImage={pokemonResultImage} pokemon={pokemon} pokemonResult={pokemonResult} pokemonType={pokemonType} pokemonHp={pokemonHp} pokemonStats={pokemonStats} pokemonWeight={pokemonWeight} pokemonHeight={pokemonHeight} /> : <Redirect to="/" />}
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