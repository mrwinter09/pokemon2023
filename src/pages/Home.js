import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logobanner from '../assets/pokemon.svg';

function Home() {
  return (
    <>
      <h1>Home</h1>
      <div className="App">
      <header className="App-header">
        <img src={logobanner} alt="logo" />
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