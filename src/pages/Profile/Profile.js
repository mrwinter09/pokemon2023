import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';


function Profile() {
  const {valueTestEmail, valueTestName, valueTestPassword} = useContext(AuthContext);
  const [password, setPassword] = useState(true)


  function setPas(){
    setPassword(!password)
  }

  return (
    <>
      <h1>Profielpagina</h1>
      <section>
        <h2>Gegevens</h2>
        <p><strong>Gebruikersnaam:</strong> {valueTestName}</p>
        <p><strong>Email: </strong>{valueTestEmail}</p>
        <p><strong>Wachtwoord: </strong><span className={password === true ? 'hidden' : 'no-hidden'}>{valueTestPassword}</span></p>
        <button type='button' onClick={setPas}>Show wachtwoord</button>
      </section>
      <section>
        <h2>Strikt geheime profiel-content</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias cum debitis dolor dolore fuga id molestias qui quo unde?</p>
      </section>
      <p>Terug naar de <Link to="/">Homepagina</Link></p>
    </>
  );
}

export default Profile;