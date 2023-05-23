import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Link } from 'react-router-dom';
import logo from '../assets/Pikachu-01.svg';
import logobanner from '../assets/pokemon.svg';

function Home() {
  const {username} = useContext(AuthContext)

  return (
    <>
      <h1>Homepagina welcome {username}</h1>
      <div className="App">
      <header className="App-header">
        <img src={logobanner} alt="logo" />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          By Ivan Winter
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
      <section>
        <p>Als je ingelogd bent, bekijk dan de <Link to="/profile">Profielpagina</Link></p>
        <p>Je kunt ook <Link to="/signin">inloggen</Link> of jezelf <Link to="/signup">registeren</Link> als je nog geen
          account hebt.</p>
      </section>
    </>
  );
}

export default Home;