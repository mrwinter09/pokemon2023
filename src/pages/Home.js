import React, {useState, useEffect} from 'react';
// eslint-disable-next-line
import { Link } from 'react-router-dom';
import logobanner from '../assets/pokemon.svg';
import SearchIcon from '../components/SearchIcon';
import SearchResults from '../components/SearchResult';
import PokemonContainer from '../components/PokemonContainer';
import axios from 'axios';
import './Home.css'
import HomeText from '../components/HomeText';

function Home() {

  const [results, setResults] = useState([])
  const [pokemon, setPokemon] = useState("")
  const [pokemonResult, setPokemonResult] = useState("")
  const [pokemonResultImage, setPokemonResultImage] = useState("")
  const [pokemonType, setPokemonType] = useState("")
  const [pokeNames, setPokeNames] = useState([])

  const [pokeAbility, setpokeAbility] = useState([])
  const [abilityDescription, setAbilityDescription] = useState("")

  const [pokeAbilityName, setpokeAbilityName] = useState("")
  const [pokemonHp, setPokemonHp] = useState("")
  const [pokemonWeight, setPokemonWeight] = useState("")
  const [pokemonHeight, setPokemonHeight] = useState("")
  const [pokemonStats, setPokemonStats] = useState("")

  const [active, setActive] = useState(false)

  useEffect(() => {
    function callPokemon(value) {
      const results = pokeNames.filter((user)=> {
        return value && user && user.name && user.name.toLowerCase().includes(value.toLowerCase())
      })
      setResults(results);
      // console.log(results)
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
        console.log(response.data);
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
        console.log(response.data);
        setPokemonResult(response.data)
        setPokemonResultImage(response.data.sprites.other['official-artwork'].front_default)
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

  return (
    <>
      <div className="App">
      <header className="App-header">
        <img src={logobanner} alt="logo" />
      </header>
    </div>
    <section>
        <SearchIcon setActive={setActive}  active={active} pokemon={pokemon} setPokemon={setPokemon} pokemonResult={pokemonResult} />
        <SearchResults setActive={setActive} results={results} setPokemon={setPokemon} pokemon={pokemon}/>
      </section>
    <div className='wrapper'>    
    <PokemonContainer pokemon={pokemon} pokemonHeight={pokemonHeight} pokemonWeight={pokemonWeight} pokemonStats={pokemonStats} pokemonHp={pokemonHp} pokemonResultImage={pokemonResultImage} pokemonResult={pokemonResult} pokemonType={pokemonType}/>
    <HomeText abilityDescription={abilityDescription} pokemonResult={pokemonResult} pokemon={pokemon}/>
</div>
      
    </>
  );
}

export default Home;