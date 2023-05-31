import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { useHistory } from "react-router-dom";
import './SignIn.css'
import axios from 'axios';


function SignIn() {
  const navigate = useHistory();
  const {setregisterUserName, valueTestEmail, valueTestPassword, signInFunction} = useContext(AuthContext)
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
     setregisterUserName(true)
     console.log(response.data.accessToken)
     signInFunction(response.data.accessToken)
    } catch (error) {
     console.error(error);
    }
    }
  
  return (
    <>
    <div>
    <header className="App-header">
        <h1 className='signin'>Log in</h1>
        <p className='signin'>Ready to Battle</p>
      </header>
      <div className='singin-form'>
        <form onSubmit={handleSubmit}>
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
        <button type='submit' className='submit-button' onClick={signUserip}>Inloggen</button>
      </form>
    </div>
    <div className='footer'> 
    <p>Heeft u nog geen account? <Link to="/signup">Registreer</Link> je dan eerst.</p>
    </div>
    
    </div>
    </>
  );
}

export default SignIn;