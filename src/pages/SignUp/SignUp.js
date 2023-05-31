import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { useHistory } from "react-router-dom";
import axios from 'axios';
import './SignUp.css'


function SignUp() {
 const {valueTestName, valueTestEmail, valueTestPassword, valueInputName, valueInputEmail, valueInputPassword} = useContext(AuthContext)
 const navigate = useHistory();

 function onSubmit(){
  navigate.push('/signin')

 }

 async function signUserUp() {
 try {
  const response = await axios.post('http://localhost:3000/users/register', {
    email: valueTestEmail,
    password: valueTestPassword,
    username: valueTestName
  });
  console.log(response.data)
 } catch (error) {
  console.error(error);
 }
 }

  return (
    <>
     <header className="App-header">
        <h1 className='signin'>Register</h1>
        <p className='signin'>to Battle</p>
      </header>
      <div className='signup-form'>
      <form onSubmit={onSubmit}>
        <label>Username:
        <input type="text"
            name="name"
            id="details-name"
            onChange={(e) => valueInputName(e.target.value)}></input>
        </label>
        <label>Email:
        <input type="text"
            name="email"
            id="details-email"
            onChange={(e) => valueInputEmail(e.target.value)}></input>
        </label>
        <label>Password:
        <input type="password"
            name="password"
            id="details-password"
            onChange={(e) => valueInputPassword(e.target.value)}></input>
        </label>
        <button type="submit" className='submit-button' onClick={signUserUp}>Sign up</button>
      </form>
      </div>
      <div className='footer'> 
      <p>Already have an account? <Link to="/signin">Login</Link></p>
    </div>
      
    </>
  );
}

export default SignUp;