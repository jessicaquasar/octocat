import React, { Component } from 'react'
import './App.css'

import octocat from './assets/octocat.png'
import SearchUser from './components/SearchUser'
import UserInfo from './components/UserInfo'

class App extends Component {

  state = {
    user: null,
    repos: []
  }

  updateUser = (user) => {
    this.setState({ user })
  }

  updateRepos = (repos) => {
    this.setState({ repos })
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
            updateRepos={ this.updateRepos }
          />
          <UserInfo 
            user={ this.state.user }
            // repos={ this.state.repos }
          />
        </div>
      </div>  
    )
  }
}

export default App;
