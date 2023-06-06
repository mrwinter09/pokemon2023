import React from 'react';
import logobanner from '../../assets/pokemon.svg';
import SearchBar from '../../components/SearchBar/SearchBar';
import SearchResults from '../../components/SearchResult/SearchResult';
import PokemonContainer from '../../components/PokemonContainer/PokemonContainer';
import PokemonDescription from '../../components/PokemonDescription/PokemonDescription'
import './Home.css'
import HomeFooter from '../../components/HomeFooter/HomeFooter';


function Home({firstPokemonResult, pokemonHpScoreB, pokemonStatsB, setPokemonHpScoreB, setPokemonHpScoreA, setPokemonBattleId, setActive, active, pokemon, setPokemon, pokemonResult, results, pokemonHeight, pokemonWeight, pokemonStats, pokemonHp, pokemonResultImage, pokemonType, pokemonSpecies,abilityDescription }) {

  

  return (
    <>
  <div className="App">
      <header className="App-header">
        <img src={logobanner} alt="logo" />
      </header>
    </div>
    <section>
        <SearchBar setActive={setActive}  active={active} pokemon={pokemon} setPokemon={setPokemon} pokemonResult={pokemonResult} />
        <SearchResults setPokemonBattleId={setPokemonBattleId} setActive={setActive} results={results} setPokemon={setPokemon} pokemon={pokemon}/>
      </section>
    <div className='wrapper'>
        <PokemonContainer firstPokemonResult={firstPokemonResult} pokemon={pokemon} pokemonResult={pokemonResult}/>
        <PokemonDescription pokemonSpecies={pokemonSpecies} abilityDescription={abilityDescription} pokemonResult={pokemonResult} pokemon={pokemon}/>
    </div>
        <HomeFooter firstPokemonResult={firstPokemonResult} pokemonHpScoreB={pokemonHpScoreB} pokemonStatsB={pokemonStatsB} setPokemonHpScoreB={setPokemonHpScoreB} pokemonStats={pokemonStats} setPokemonHpScoreA={setPokemonHpScoreA} setPokemonBattleId={setPokemonBattleId} pokemonResult={pokemonResult} pokemon={pokemon} />
    </>
  );
}

export default Home;