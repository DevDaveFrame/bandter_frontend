import React from 'react'
import { connect } from 'react-redux'
import PhotoDisplay from '../components/PhotoDisplay.js'

function ProfilePhotoContainer (props) {
  return (
    <div className='profile-photo-container'>
      {props.user.photos.map(photo => <PhotoDisplay photo={photo}/>)}
    </div>
  )
}

const mapStateToProps = (state) => ({
  user: state.user
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePhotoContainer)
