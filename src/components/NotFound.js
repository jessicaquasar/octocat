import React from 'react';
import octobiwan from '../assets/octobiwan.jpg'

export const NotFound = () => {
  return(
    <div>
      <img  src={octobiwan} className='notfound-img' alt={'octobiwan'}/>
      <h5>User not found!</h5>
    </div>
  )
}