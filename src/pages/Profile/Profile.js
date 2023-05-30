import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';


function Profile({pokemonBattleIcon}) {
  const {valueTestEmail, valueTestName,} = useContext(AuthContext);

  return (
    <>
    <header className="App-header">
        <h1 className='signin'>Profile Page</h1>
      </header>
 
      <section>
        <h2>{valueTestName}</h2>
        <p><strong>Gebruikersnaam:</strong> {valueTestName}</p>
        <p><strong>Email: </strong>{valueTestEmail}</p>
      </section>
      <section>
        <h2>Number of battles</h2>
        <div className='footer'>
        <p><img src={pokemonBattleIcon} alt=''></img> have won 10 battles</p>
        </div>
       
      </section>
    </>
  );
}

export default Profile;