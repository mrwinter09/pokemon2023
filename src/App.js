
import React, { useContext } from 'react';
import {Redirect, Switch, Route } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import BattlePage from './pages/BattlePage/BattlePage';
import Home from './pages/Home/Home';
import Profile from './pages/Profile/Profile'
import SignIn from './pages/Signin/SignIn';
import SignUp from './pages/SignUp/SignUp';
import { AuthContext } from './context/AuthContext';
import { PokemonContext } from './context/PokemonContext'
import './App.css';

function App() {
  const {firstPokemonResult, secondPokemonResult, pokemonSpecies } = useContext(PokemonContext);
  const { isAuthMan } = useContext(AuthContext);

// set Result

  return (
    <>
    <Navigation/>
    <div className="content">
      <Switch>
        <Route exact path="/">
          <Home firstPokemonResult={firstPokemonResult} secondPokemonResult={secondPokemonResult} pokemonSpecies={pokemonSpecies} />
        </Route>
        <Route path="/profile">
        {isAuthMan ? <Profile /> : <Redirect to="/" />}
        </Route>
        <Route path="/battlepage">
        {isAuthMan ? <BattlePage/> : <Redirect to="/" />}
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