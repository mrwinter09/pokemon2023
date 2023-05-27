import React, {useState, useEffect} from 'react';
// eslint-disable-next-line
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
        {/* <p>Which Pokemon do you want to catch...</p> */}
        <p>Pikachu is an Electric-type Pokémon introduced in Generation I. It evolves from Pichu when leveled up with high friendship and evolves into Raichu when exposed to a Thunder Stone. In Alola, Pikachu will evolve into Alolan Raichu when exposed to a Thunder Stone. Pikachu can Gigantamax into Gigantamax Pikachu if it has the Gigantamax Factor for its Gigantamax form. Pikachu with the Gigantamax Factor cannot evolve. In Pokémon Yellow, the starter Pikachu will refuse to evolve into Raichu unless it is traded and evolved on another save file. In Pokémon: Let's Go, Pikachu!, the player's partner Pikachu will also not evolve, and cannot be traded to become a Raichu. Pikachu is popularly known as the mascot of the Pokémon franchise and one of Nintendo's major mascots. It is also the game mascot and starter Pokémon of Pokémon Yellow and Let's Go, Pikachu!. It has made numerous appearances on the boxes of spin-off titles. Pikachu is also the starter Pokémon of Pokémon Rumble Blast and Pokémon Rumble World.</p>
        <SearchIcon pokemon={pokemon} setPokemon={setPokemon} />
        <SearchResults results={results} setPokemon={setPokemon} pokemon={pokemon}/>
      </section>
    </>
  );
}

export default Home;