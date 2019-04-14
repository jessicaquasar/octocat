import React, { Component } from 'react'

class UserRepos extends Component {

  constructor() {
    super()
  
    this.state = {
      reposCount: 0
    }
  }

  componentDidUpdate(props) {
    this.setState({ reposCount: props.repos.length });
  }

  render() {
      return (
        <p>blá</p>
    )
  }
}

export default UserRepos