import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { PokemonContext } from '../../context/PokemonContext';
import './BattlePage.css'


function BattlePage() {
  const { } = useContext(PokemonContext);
  const [password, setPassword] = useState(true)


  function setPas(){
    setPassword(!password)
  }

  return (
    <>
    <div className="App">
      <header className="App-header">
        <h1 className='battle'>Battle Page</h1>
      </header>
      
      <section>
        <h2>Gegevens</h2>
        <p><strong>Gebruikersnaam:</strong> {}</p>
        <p><strong>Email: </strong>{}</p>
        <p><strong>Wachtwoord: </strong><span className={password === true ? 'hidden' : 'no-hidden'}>{}</span></p>
        <button type='button' onClick={setPas}>Show wachtwoord</button>
      </section>
      <section>
        <h2>Strikt geheime profiel-content</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias cum debitis dolor dolore fuga id molestias qui quo unde?</p>
      </section>
      <p>Terug naar de <Link to="/">Homepagina</Link></p>
      </div>
    </>
  );
}

export default BattlePage;