
import React, { useContext, useState, useEffect } from 'react';
import {Redirect, Switch, Route } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import BattlePage from './pages/BattlePage/BattlePage';
import Home from './pages/Home/Home';
import Profile from './pages/Profile/Profile'
import SignIn from './pages/Signin/SignIn';
import SignUp from './pages/SignUp/SignUp';
import { AuthContext } from './context/AuthContext';
import { PokemonContext } from './context/PokemonContext'
import axios from 'axios';
import './App.css';

function App() {
  const { pokemonBattleId, setPokemonHpScoreB} = useContext(PokemonContext);
  const { isAuthMan } = useContext(AuthContext);

// set Result
  const [pokemon, setPokemon] = useState("")

// Data pull first
  const [results, setResults] = useState([])
  const [pokeNames, setPokeNames] = useState([])

// eslint-disable-next-line
  const [abilityDescription, setAbilityDescription] = useState("")
  const [pokemonSpecies, setPokemonSpecies] = useState([])
  const [pokemonSpeciesName, setPokemonSpeciesName] = useState('')

// Pokemon A
  const [firstPokemonResult, setFirstPokemonResult] = useState({})

// Pokemon B
   const [secondPokemonResult, setSecondPokemonResult] = useState({})


   
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
        const responseAbility = await axios.get(`https://pokeapi.co/api/v2/ability/${firstPokemonResult.pokeAbilityName}`);
        setAbilityDescription(responseAbility.data.effect_entries['1'].effect)
      } catch (e) {
        console.error(e);
      }
    }
    if(pokemon){
      fetchDataPokemonAbility()
    }
  },[pokemon]);

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
        const secondPokemonApiResult = {
          pokemonResultB: responsePokemonBattle.data,
          pokemonNameB: responsePokemonBattle.data.name,
          pokemonResultImageB: responsePokemonBattle.data.sprites.other['official-artwork'].front_default,
          pokemonBattleIconB: responsePokemonBattle.data.sprites.versions['generation-vii'].icons.front_default,
          pokemonTypeB: responsePokemonBattle.data.types['0'].type.name,
          pokemonHpB: responsePokemonBattle.data.stats['0'].stat.name,
          pokemonWeightB: responsePokemonBattle.data.weight,
          pokemonHeightB: responsePokemonBattle.data.height,
          pokemonStatsB: responsePokemonBattle.data.stats['0'].base_stat,
          pokeAbilityNameB: responsePokemonBattle.data.abilities['0'].ability.name,
        }
        setSecondPokemonResult(secondPokemonApiResult)
        setPokemonHpScoreB(responsePokemonBattle.data.stats['0'].base_stat)
      } catch (e) {
        console.error(e);
      }
    }
    if(pokemonBattleId){
      fetchDataPokemon()
    }
  },[pokemonBattleId]);


  return (
    <>
    <Navigation setPokemon={setPokemon} />
    <div className="content">
      <Switch>
        <Route exact path="/">
          <Home firstPokemonResult={firstPokemonResult} secondPokemonResult={secondPokemonResult} pokemon={pokemon} setPokemon={setPokemon} results={results} pokemonSpecies={pokemonSpecies} />
        </Route>
        <Route path="/profile">
        {isAuthMan ? <Profile firstPokemonResult={firstPokemonResult} /> : <Redirect to="/" />}
        </Route>
        <Route path="/battlepage">
        {isAuthMan ? <BattlePage firstPokemonResult={firstPokemonResult} secondPokemonResult={secondPokemonResult} pokemonSpeciesName={pokemonSpeciesName} abilityDescription={abilityDescription}  pokemon={pokemon}/> : <Redirect to="/" />}
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