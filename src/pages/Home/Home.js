import React from 'react';
import logobanner from '../../assets/pokemon.svg';
import SearchBar from '../../components/SearchBar/SearchBar';
import SearchResults from '../../components/SearchResult/SearchResult';
import PokemonContainer from '../../components/PokemonContainer/PokemonContainer'
import PokemonDescription from '../../components/PokemonDescription/PokemonDescription'
import './Home.css'
import HomePageFooter from '../../components/HomeFooter/HomePageFooter';


function Home({firstPokemonResult, secondPokemonResult, pokemonSpecies }) {

  

  return (
    <>
  <div className="App">
      <header className="header-logo">
        <img src={logobanner} alt="logo" />
      </header>
    </div>
    <section>
        <SearchBar firstPokemonResult={firstPokemonResult}/>
        <SearchResults/>
      </section>
    <div className='wrapper'>
        <PokemonContainer firstPokemonResult={firstPokemonResult}/>
        <PokemonDescription firstPokemonResult={firstPokemonResult} pokemonSpecies={pokemonSpecies}/>
    </div>
        <HomePageFooter firstPokemonResult={firstPokemonResult} secondPokemonResult={secondPokemonResult} />
    </>
  );
}

export default Home;