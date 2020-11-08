import React from 'react'
import PropTypes from 'prop-types'

import './index.css'

function UserInfo(props) {
  const userInfo = props.user;

  return (
    userInfo ? (
      <div className='card'>
        <img className='card-img-top' src={userInfo?.avatar_url} alt='avatar' />
        <div className='card-body'>
          <h5 className='card-title'>{userInfo?.login}</h5>
          <p className='card-text'>
            Name: {userInfo?.name} <br />
            Followers: {userInfo?.followers} / Following: {userInfo?.following}
          </p>
          <a href={userInfo?.html_url} className='btn btn-dark' target='_blank' rel="noopener noreferrer">View details</a>
        </div>
      </div>
    ) : (<h5>Type some github user and press enter to view the profile</h5>)
  )
}

UserInfo.propTypes = {
  userInfo: PropTypes.object
};

export default UserInfo