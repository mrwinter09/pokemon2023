import React, { createContext, useState, useEffect } from "react";
import jwt_decode from 'jwt-decode';
import axios from 'axios';

export const AuthContext = createContext({})

function AuthContextComponent({children}) {
  const [valueFieldRegName, setValueFieldRegName] = useState('test')
  const [valueFieldRegEmail, setValueFieldRegEmail] = useState('test email')
  const [valueFieldRegPassword, setValueFieldRegPassword] = useState('')
  const [profile, setProfile] = useState('')
  const [auth, toggleIsAuth] = useState({
    isAuth: false,
    user: null,
    email: null,
    id: null,
    username: null,
    status: 'pending'
  });

    useEffect(() => {
      const token = localStorage.getItem('token');

      if(token) {
        const decodedToken = jwt_decode(token);
        async function getUserToken() {
          try {
           const response = await axios.get(`http://localhost:3000/600/users/${decodedToken.sub}`, {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            }
           });
           toggleIsAuth({
            isAuth: true,
            username: response.data.user,
            email: response.data.email,
            id: response.data.id,
            status: 'done',
      });
           console.log(response.data)
           setValueFieldRegEmail(response.data.email)
           setValueFieldRegName(response.data.username)
           console.log(' Gebruiker is ingelogged');
          } catch (e) {
           console.error(e);
           if (e.response.status === 500) {
            console.log('De server deed het niet');
          } else if (e.response.status === 404) {
            console.log('De developer heeft iets doms gedaan in het request');
          } else {
            console.log('Het ging mis. Geen idee wat.');
          }
          }
          }
          getUserToken();
      } else {
        toggleIsAuth({
          ...auth,
          status: 'done',
        });
      }
    }, 
    // eslint-disable-next-line 
    [])

  function signIn(jwtToken) {
    localStorage.setItem('token', jwtToken);
    console.log(jwtToken)
    const decodedToken = jwt_decode(jwtToken);
    console.log(decodedToken)
    console.log(decodedToken.sub);
    const id = decodedToken.sub;
    const token = jwtToken
    console.log(token)

    async function getUserData() {
      try {
       const response = await axios.get(`http://localhost:3000/600/users/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        }
       });
       console.log(response.data)
       console.log(' Gebruiker is ingelogged');
    toggleIsAuth({
      ...auth,
      isAuth: true,
      email: response.data.email,
      username: response.data.username,
      id: response.data.id,
      jwtToken: token
    });
      } catch (error) {
       console.error(error);
      }
      }
      getUserData();
  }

  function signOut() {
    localStorage.clear();
    toggleIsAuth({
      ...auth,
      isAuth: false,
      email: null,
      username: null,
      id: null,
    });
    console.log(' Gebruiker is uitgelogd');
  }

  function authTrue() {
    return toggleIsAuth({
      ...auth,
      isAuth: true,
    });
  }


  const data = {
    email: auth.email,
    id: auth.id,
    username: auth.username,
    changeAuth: authTrue,
    isAuthMan: auth.isAuth,
    signInFunction: signIn,
    signOutFunction: signOut,
    Gebruikersnaam: 'wagwan',
    Email: "hardcoded@test.com",
    valueInputName: setValueFieldRegName,
    valueInputEmail: setValueFieldRegEmail,
    valueInputPassword: setValueFieldRegPassword,
    valueTestName: valueFieldRegName,
    valueTestEmail: valueFieldRegEmail,
    valueTestPassword: valueFieldRegPassword,
    testName: setProfile,
    testNameProfile: profile,

  }

  return (
    <AuthContext.Provider value={data}>
      {auth.status === 'done' ? children : <p>Loading...</p>}
      {/* {children} */}
      </AuthContext.Provider>
  )
}

export default AuthContextComponent