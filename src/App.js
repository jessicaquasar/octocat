import React, { Component } from 'react'
import './App.css'

import octocat from './assets/octocat.png'
import SearchUser from './components/SearchUser'
import UserInfo from './components/UserInfo'

class App extends Component {

  state = {
    user: null,
  }

  updateUser = (user) => {
    this.setState({ user })
  }
  
  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <img  src={ octocat } className='App-logo' alt={ 'octocat' }/>
          <h1 className='App-title'>Octocat Search</h1>
        </header>
        <div>
          <SearchUser 
            updateUser={ this.updateUser }
          />
          <UserInfo 
            user={ this.state.user }
          />
        </div>
      </div>  
    )
  }
}

export default App;
