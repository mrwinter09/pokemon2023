
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
  const { pokemonBattleId, setPokemonHpScoreB, pokemon} = useContext(PokemonContext);
  const { isAuthMan } = useContext(AuthContext);

// set Result
 
// Data pull first
  const [results, setResults] = useState([])
  const [pokeNames, setPokeNames] = useState([])

// eslint-disable-next-line
  const [abilityDescription, setAbilityDescription] = useState('')
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


  useEffect(() => {
        function creatPlayer(value) {
           const playerObject =  {
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
             if(a) {
              const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${a}`);
              const playerOne = creatPlayer(response)
              setFirstPokemonResult(playerOne)
              const responseAbility = await axios.get(`https://pokeapi.co/api/v2/ability/${firstPokemonResult.pokeAbilityName}`);
              const abilities = responseAbility.data.effect_entries['1'].effect;
              setAbilityDescription(abilities)
             }
             if(b) {
               const responsePokemonBattle = await axios.get(`https://pokeapi.co/api/v2/pokemon/${b}`);
               const playerTwo = creatPlayer(responsePokemonBattle)
               setSecondPokemonResult(playerTwo)
               setPokemonHpScoreB(playerTwo.pokemonStats)
             }
           } catch (e) {
             console.error(e);
           }
        }
        if(pokemon){
           fetchDataPokemon(pokemon, pokemonBattleId )
        }
    },[pokemon, pokemonBattleId]);


  return (
    <>
    <Navigation/>
    <div className="content">
      <Switch>
        <Route exact path="/">
          <Home firstPokemonResult={firstPokemonResult} secondPokemonResult={secondPokemonResult} results={results} pokemonSpecies={pokemonSpecies} />
        </Route>
        <Route path="/profile">
        {isAuthMan ? <Profile firstPokemonResult={firstPokemonResult} /> : <Redirect to="/" />}
        </Route>
        <Route path="/battlepage">
        {isAuthMan ? <BattlePage firstPokemonResult={firstPokemonResult} secondPokemonResult={secondPokemonResult} pokemonSpeciesName={pokemonSpeciesName} abilityDescription={abilityDescription}/> : <Redirect to="/" />}
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