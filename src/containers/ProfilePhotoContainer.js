import React from 'react'
import PhotoDisplay from '../components/PhotoDisplay.js'

function ProfilePhotoContainer (props) {
  return (
    <div className='profile-photo-container'>
      {props.user.photos.map(photo => <PhotoDisplay photo={photo}/>)}
    </div>
  )
}

export default ProfilePhotoContainer;
