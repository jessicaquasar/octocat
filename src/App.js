import React, { useState } from 'react'
import './App.css'

import octocat from './assets/octocat.png'
import { NotFound } from './components/NotFound'
import SearchUser from './components/SearchUser'
import UserInfo from './components/UserInfo'

export const App = () => {

  const [user, setUser] = useState(null)
  const [notFound, setNotFound] = useState(false)

  const updateUser = (user) => {
    setUser(user)
  }
  

  return (
    <div className='App'>
      <header className='App-header'>
        <img  src={octocat} className='App-logo' alt={'octocat'}/>
        <h1 className='App-title'>Octocat Search</h1>
      </header>
      <div>
        <SearchUser 
          updateUser={updateUser}
          setNotFound={setNotFound}
        />
        {notFound ?
          <NotFound /> :
          <UserInfo 
            user={user}
          />
        }
      </div>
    </div>  
  )
  
}

export default App;
