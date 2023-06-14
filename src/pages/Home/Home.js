import React from 'react';
import logobanner from '../../assets/pokemon.svg';
import SearchBar from '../../components/SearchBar/SearchBar';
import SearchResults from '../../components/SearchResult/SearchResult';
import PokemonContainer from '../../components/PokemonContainer/PokemonContainer'
import PokemonDescription from '../../components/PokemonDescription/PokemonDescription'
import './Home.css'
import HomePageFooter from '../../components/HomeFooter/HomePageFooter';


function Home({firstPokemonResult, secondPokemonResult, pokemon, results, pokemonSpecies }) {

  

  return (
    <>
  <div className="App">
      <header className="header-logo">
        <img src={logobanner} alt="logo" />
      </header>
    </div>
    <section>
        <SearchBar firstPokemonResult={firstPokemonResult} pokemon={pokemon}/>
        <SearchResults results={results} pokemon={pokemon}/>
      </section>
    <div className='wrapper'>
        <PokemonContainer firstPokemonResult={firstPokemonResult} pokemon={pokemon}/>
        <PokemonDescription firstPokemonResult={firstPokemonResult} pokemonSpecies={pokemonSpecies} pokemon={pokemon}/>
    </div>
        <HomePageFooter firstPokemonResult={firstPokemonResult} secondPokemonResult={secondPokemonResult} pokemon={pokemon} />
    </>
  );
}

export default Home;