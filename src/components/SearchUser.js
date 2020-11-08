import React, { useState } from 'react'
import PropTypes from 'prop-types';

import Api from '../services/Api'
import './index.css'

export const SearchUser = (props) => {

  const [user, setUser] = useState('');

  const handleChange = (e) => {
    setUser(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    Api.get(`/${user}`).then(response => 
      props.updateUser(response.data),
      props.setNotFound(false),
      setUser(''))
    .catch(() => {props.setNotFound(true); console.log('User not found!')})
  }
  

  return (
    <div className='navbar navbar-light bg-light'>
      <form onSubmit={handleSubmit}>
        <div className='form-inline'>
          <div className='input-group'>
            <div className='input-group-prepend'>
              <span className='input-group-text' id='basic-addon1'>@</span>
            </div>
            <input
              type='text'
              value= {user}
              onChange = {handleChange}
              className='form-control'
              placeholder='octocat'
              aria-label='octocat' 
            />
          </div>
          <button
            disabled={!user}
            type='submit'
            className='btn btn-dark  btn-search-custom'>Find!
          </button>
        </div>
      </form>
    </div>
  )
}


SearchUser.propTypes = {
  updateUser: PropTypes.func.isRequired,
  setNotFound: PropTypes.func.isRequired,
}

export default SearchUser

