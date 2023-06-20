import React from 'react'
import logobanner from '../../assets/pokemon.svg'
import SearchBar from '../../components/SearchBar/SearchBar'
import SearchResults from '../../components/SearchResult/SearchResult'
import PokemonContainer from '../../components/PokemonContainer/PokemonContainer'
import PokemonDescription from '../../components/PokemonDescription/PokemonDescription'
import './Home.css'
import HomePageFooter from '../../components/HomeFooter/HomePageFooter'

function Home() {
  return (
    <>
      <div className="App">
        <header className="header-logo">
          <img src={logobanner} alt="logo" />
        </header>
      </div>
      <section>
        <SearchBar />
        <SearchResults />
      </section>
      <div className="wrapper">
        <PokemonContainer />
        <PokemonDescription />
      </div>
      <HomePageFooter />
    </>
  )
}

export default Home
