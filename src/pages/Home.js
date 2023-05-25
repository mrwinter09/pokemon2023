import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import logobanner from '../assets/pokemon.svg';
import SearchIcon from '../components/SearchIcon';
import SearchResults from '../components/SearchResult';
import axios from 'axios';
import './Home.css'

function Home() {

  const [results, setResults] = useState([])
  const [pokemon, setPokemon] = useState("")
  const [pokemonResult, setPokemonResult] = useState("")
  const [pokemonResultImage, setPokemonResultImage] = useState("")

  useEffect(()=> {
    const fetchData = (value) => {
      fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
        .then(response => response.json())
        .then((json) => {
          console.log(json.results)
          const results = json.results.filter((user)=> {
            return value && user && user.name && user.name.toLowerCase().includes(value.toLowerCase())
          })
          setResults(results);
        })
    }

    console.log(pokemon)
    if(pokemon){
      fetchData(pokemon)
    }
  },[pokemon]);

  useEffect(() => {
    async function fetchDataPokemon() {
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
        console.log(response.data);
        setPokemonResult(response.data)
        setPokemonResultImage(response.data.sprites.front_default)
        console.log(response.data.sprites.front_default);
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
    <div className='pokemon'><img src={pokemonResultImage} alt={pokemonResult.name}></img></div>
      <section>
        <p>Which Pokemon do you want to catch...</p>
        <SearchIcon pokemon={pokemon} setPokemon={setPokemon} />
        <SearchResults results={results} setPokemon={setPokemon} pokemon={pokemon}/>
      </section>
    </>
  );
}

export default Home;