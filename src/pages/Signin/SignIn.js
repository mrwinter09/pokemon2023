import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { useHistory } from "react-router-dom";
import './SignIn.css'
import axios from 'axios';


function SignIn() {
  const navigate = useHistory();
  const {valueTestEmail, valueTestPassword, signInFunction} = useContext(AuthContext)
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [warning, setWarning] = useState(false)
 
  function handleSubmit(e){
    if(loginEmail === valueTestEmail && loginPassword === valueTestPassword ) {
      e.preventDefault();
      console.log(loginEmail)
      console.log(loginPassword)
      return navigate.push('/')
     } else {
      setWarning(true)
      console.log(loginEmail)
      console.log(loginPassword)
     }
  }

  async function signUserip() {
    try {
     const response = await axios.post('http://localhost:3000/login', {
       email: loginEmail,
       password: loginPassword,
     });
     console.log(response.data.accessToken)
     signInFunction(response.data.accessToken)
    } catch (error) {
     console.error(error);
    }
    }
  
  return (
    <>
      <h1>Inloggen</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias cum debitis dolor dolore fuga id molestias qui quo unde?</p>

      <form onSubmit={handleSubmit}>
        <p>*invoervelden*</p>
        <label>Email:
        <input type="text"
            name="name"
            id="details-name"
            onChange={(e) => setLoginEmail(e.target.value)}
            ></input>
        </label>
        <label>Password:
        <input type="password"
            name="email"
            id="details-email"
            onChange={(e) => setLoginPassword(e.target.value)}
            ></input>
        </label>
        <button type='submit' onClick={signUserip}>Inloggen</button>
      </form>

      <p className={warning ? 'not-hidden' : 'hidden'}>U heeft geen account? <Link to="/signup">Registreer</Link> je dan eerst.</p>
    </>
  );
}

export default SignIn;