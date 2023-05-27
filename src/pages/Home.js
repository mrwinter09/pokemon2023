import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import logobanner from '../assets/pokemon.svg';
import SearchIcon from '../components/SearchIcon';
import SearchResults from '../components/SearchResult';
import PokemonContainer from '../components/PokemonContainer';
import axios from 'axios';
import './Home.css'

function Home() {

  const [results, setResults] = useState([])
  const [pokemon, setPokemon] = useState("")
  const [pokemonResult, setPokemonResult] = useState("")
  const [pokemonResultImage, setPokemonResultImage] = useState("")
  const [pokemonType, setPokemonType] = useState("")
  const [pokeNames, setPokeNames] = useState([])
  // console.log(pokeNames)
  const [pokemonHp, setPokemonHp] = useState("")
  const [pokemonWeight, setPokemonWeight] = useState("")
  const [pokemonHeight, setPokemonHeight] = useState("")
  const [pokemonStats, setPokemonStats] = useState("")

  useEffect(() => {
    function callPokemon(value) {
      const results = pokeNames.filter((user)=> {
        return value && user && user.name && user.name.toLowerCase().includes(value.toLowerCase())
      })
      setResults(results);
      console.log(results)
    }
    callPokemon(pokemon)
  }, [pokemon])

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
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
        console.log(response.data);
        setPokemonResult(response.data)
        setPokemonResultImage(response.data.sprites.other['official-artwork'].front_default)
        setPokemonType(response.data.types['0'].type.name)
        setPokemonHp(response.data.stats['0'].stat.name)
        setPokemonWeight(response.data.weight)
        setPokemonHeight(response.data.height)
        setPokemonStats(response.data.stats['0'].base_stat)
        console.log(response.data.sprites.other['official-artwork'].front_default);
      } catch (e) {
        console.error(e);
      }
    }
    if(pokemon){
      fetchDataPokemon()
    }
  },[pokemon]);


  return (
    <>
      <div className="App">
      <header className="App-header">
        <img src={logobanner} alt="logo" />
      </header>
    </div>
    <PokemonContainer pokemon={pokemon} pokemonHeight={pokemonHeight} pokemonWeight={pokemonWeight} pokemonStats={pokemonStats} pokemonHp={pokemonHp} pokemonResultImage={pokemonResultImage} pokemonResult={pokemonResult} pokemonType={pokemonType}/>
      <section>
        <p>Which Pokemon do you want to catch...</p>
        <SearchIcon pokemon={pokemon} setPokemon={setPokemon} />
        <SearchResults results={results} setPokemon={setPokemon} pokemon={pokemon}/>
      </section>
    </>
  );
}

export default Home;