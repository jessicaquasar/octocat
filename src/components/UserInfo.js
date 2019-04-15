import React from 'react'
import PropTypes from 'prop-types'

import './index.css'

function UserInfo(props) {
  const userInfo = props.user ?
    (
      <div className='card'>
				<img className='card-img-top' src={ props.user.avatar_url } alt='avatar'/>
				<div className='card-body'>
					<h5 className='card-title'>{ props.user.login }</h5>
					<p className='card-text'>
						Name: { props.user.name } <br />
          	Followers: { props.user.followers } / Following: { props.user.following }
					</p>
					<a href={ props.user.html_url } className='btn btn-primary' target='blank' >View details</a>
				</div>
      </div>
    ) : null;

    return userInfo;
}

UserInfo.propTypes = {
  user: PropTypes.object
};

export default UserInfo