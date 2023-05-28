import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { useHistory } from "react-router-dom";
import axios from 'axios';


function SignUp() {
 const {valueTestName, valueTestEmail, valueTestPassword, valueInputName, valueInputEmail, valueInputPassword} = useContext(AuthContext)
 const navigate = useHistory();

 function onSubmit(){
  console.log(valueTestName)
  console.log(valueTestEmail)
  console.log(valueTestPassword)
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
      <h1>Registreren</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur atque consectetur, dolore eaque eligendi
        harum, numquam, placeat quisquam repellat rerum suscipit ullam vitae. A ab ad assumenda, consequuntur deserunt
        doloremque ea eveniet facere fuga illum in numquam quia reiciendis rem sequi tenetur veniam?</p>
      <form onSubmit={onSubmit}>
        <p>*Invoervelden*</p>
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
        <button type="submit" onClick={signUserUp}>Register</button>
      </form>
      <p>Heb je al een account? Je kunt je <Link to="/signin">hier</Link> inloggen.</p>
    </>
  );
}

export default SignUp;