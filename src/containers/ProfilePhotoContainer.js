import React from 'react'
import PhotoDisplay from '../components/PhotoDisplay.js'
import AddPhoto from '../components/AddPhoto.js'


function ProfilePhotoContainer (props) {
  return (
    <div className='profile-photo-container'>
      {props.user.id == localStorage.current ? <AddPhoto /> : null}
     <div className='profile-photo-gallery'> {props.user.photos ? props.user.photos.filter((v, i, a) => a.indexOf(v) === i).map(photo => <PhotoDisplay key={photo.id} photo={photo}/>): null}</div>
    </div>
  )
}

export default ProfilePhotoContainer;
