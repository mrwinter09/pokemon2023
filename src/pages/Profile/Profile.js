import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';


function Profile({firstPokemonResult}) {
  const {valueEmail, valueName,} = useContext(AuthContext);

  return (
    <>
    <header className="App-header">
        <h1 className='signin'>Profile Page</h1>
      </header>
 
      <section>
        <h2>{valueName}</h2>
        <p><strong>Gebruikersnaam:</strong> {valueName}</p>
        <p><strong>Email: </strong>{valueEmail}</p>
      </section>
      <section>
        <h2>Number of battles</h2>
        <div className='footer'>
        <p><img src={firstPokemonResult.pokemonBattleIcon} alt=''></img> have won 10 battles</p>
        </div>
       
      </section>
    </>
  );
}

export default Profile;