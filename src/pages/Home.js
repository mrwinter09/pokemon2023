import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import logobanner from '../assets/pokemon.svg';
import IconPage from '../components/IconPage';

function Home() {
  const [results, setResults] = useState()
  return (
    <>
      {/* <h1>Home</h1> */}
      <div className="App">
      <header className="App-header">
        <img src={logobanner} alt="logo" />
      </header>
    </div>
      <section>
        <p>Which Pokemon do you want to catch...</p>
        <IconPage />
        <p></p>
      </section>
    </>
  );
}

export default Home;