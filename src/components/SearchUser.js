import React, { Component } from 'react'
import PropTypes from 'prop-types';

import Api from '../services/Api'
import './index.css'

class SearchUser extends Component {

  constructor(props) {
    super(props)

    this.state = { value: '' }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(e) {
    e.preventDefault()
    const user = this.state.value
    Api.get(`/${user}`).then(response => this.props.updateUser(response.data))
    Api.get(`/${user}/repos`).then(response => this.props.updateRepos(response.data)) // verificar aqui
  }

  render() {
    return (
      <div className='navbar navbar-light bg-light'>
        <form onSubmit={ this.handleSubmit }>
          <div className='form-inline'>
            <div className='input-group'>
              <div className='input-group-prepend'>
                <span className='input-group-text' id='basic-addon1'>@</span>
              </div>
              <input
                type='text'
                value= { this.state.value }
                onChange = { this.handleChange }
                className='form-control'
                placeholder='octocat'
                aria-label='octocat' 
                aria-describedby='basic-addon1'
              />
            </div>
            <button
              type='submit'
              className='btn btn-dark'>Find!
            </button>
          </div>
        </form>
      </div>
    )
  }
}

SearchUser.propTypes = {
  updateUser: PropTypes.func.isRequired,
  updateRepos: PropTypes.func.isRequired,
}

export default SearchUser

