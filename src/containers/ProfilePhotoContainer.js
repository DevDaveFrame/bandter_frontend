import React from 'react'
import PhotoDisplay from '../components/PhotoDisplay.js'
import AddPhotoModal from '../components/AddPhotoModal.js'


function ProfilePhotoContainer (props) {
  return (
    <div className='profile-photo-container'>
      {props.user.id === parseInt(localStorage.current, 10) ? <AddPhotoModal /> : null}
     <div className='profile-photo-gallery'> {props.user.photos ? props.user.photos.map(photo => <PhotoDisplay key={photo.id} photo={photo}/>): null}</div>
    </div>
  )
}

export default ProfilePhotoContainer;
