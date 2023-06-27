import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios'

export const AuthContext = createContext({})

function AuthContextComponent({ children }) {
  const [valueFieldRegisterName, setValueFieldRegisterName] = useState('')
  const [valueFieldRegisterEmail, setValueFieldRegisterEmail] = useState('')
  const [valueFieldRegisterPassword, setValueFieldRegisterPassword] = useState('')
  const [registerUserName, setRegisterUserName] = useState(true)
  const [auth, toggleIsAuth] = useState({
    isAuth: false,
    user: null,
    email: null,
    id: null,
    username: null,
    status: 'pending',
  })

  useEffect(
    () => {
      const token = localStorage.getItem('token')
      if (token) {
        async function getUserToken() {
          try {
            const response = await axios.get(`https://frontend-educational-backend.herokuapp.com/api/user`, {
              headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
              },
            })
            toggleIsAuth({
              isAuth: true,
              username: response.data.user,
              email: response.data.email,
              id: response.data.id,
              status: 'done',
            })
            setValueFieldRegisterEmail(response.data.email)
            setValueFieldRegisterName(response.data.username)
            console.log(' Gebruiker is ingelogged')
          } catch (e) {
            console.error(e)
            if (e.response.status === 500) {
              console.log('De server deed het niet')
            } else if (e.response.status === 404) {
              console.log('De developer heeft iets doms gedaan in het request')
            } else {
              console.log('Het ging mis. Geen idee wat.')
            }
          }
        }
        getUserToken()
      } else {
        toggleIsAuth({
          ...auth,
          status: 'done',
        })
      }
    },
    // eslint-disable-next-line
    []
  )

  function signIn(jwtToken) {
    localStorage.setItem('token', jwtToken)
    const token = jwtToken

    async function getUserData() {
      try {
        const response = await axios.get(`https://frontend-educational-backend.herokuapp.com/api/user`, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        })
        toggleIsAuth({
          ...auth,
          isAuth: true,
          email: response.data.email,
          username: response.data.username,
          id: response.data.id,
          jwtToken: token,
        })
      } catch (error) {
        console.error(error)
      }
    }
    getUserData()
  }

  function signOut() {
    localStorage.clear()
    toggleIsAuth({
      ...auth,
      isAuth: false,
      email: null,
      username: null,
      id: null,
    })
  }

  function authTrue() {
    return toggleIsAuth({
      ...auth,
      isAuth: true,
    })
  }

  const data = {
    email: auth.email,
    id: auth.id,
    username: auth.username,
    changeAuth: authTrue,
    isAuthMan: auth.isAuth,
    signInFunction: signIn,
    signOutFunction: signOut,
    valueInputName: setValueFieldRegisterName,
    valueName: valueFieldRegisterName,
    valueInputEmail: setValueFieldRegisterEmail,
    valueEmail: valueFieldRegisterEmail,
    valueInputPassword: setValueFieldRegisterPassword,
    valuePassword: valueFieldRegisterPassword,
    setRegisterUserName: setRegisterUserName,
    registerUserName: registerUserName,
  }

  return (
    <AuthContext.Provider value={data}>
      {auth.status === 'done' ? children : <p>Loading...</p>}
      {/* {children} */}
    </AuthContext.Provider>
  )
}

export default AuthContextComponent
