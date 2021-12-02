import React, { useState } from 'react'

export const UserContext = React.createContext({
  user: "",
  username: "",
  setUser: () => {}
})

export const UserContextProvider = (props) => {

  const setUser = (user, username) => {
    setState({...state, user: user, username: username})
  }

  const initState = {
    user: "",
    username: "",
    setUser: setUser
  } 

  const [state, setState] = useState(initState)

  return (
    <UserContext.Provider value={state}>
      {props.children}
    </UserContext.Provider>
  )
}