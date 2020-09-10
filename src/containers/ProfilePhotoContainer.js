import React from 'react'
import PhotoDisplay from '../components/PhotoDisplay.js'
import AddPhoto from '../components/AddPhoto.js'


function ProfilePhotoContainer (props) {
  return (
    <div className='profile-photo-container'>
      {props.user.photos.map(photo => <PhotoDisplay photo={photo}/>)}
      <AddPhoto />
    </div>
  )
}

export default ProfilePhotoContainer;
