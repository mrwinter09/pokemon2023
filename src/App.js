
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Nav from './components/Navigation/Nav';
import BattlePage from './pages/BattlePage/BattlePage';
import Home from './pages/Home/Home';
import SignIn from './pages/Signin/SignIn';
import SignUp from './pages/SignUp/SignUp';
import './App.css';

function App() {
  return (
    <>
    <Nav />
    <div className="content">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/profile">
          <BattlePage />
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