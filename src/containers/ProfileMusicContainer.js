import React from 'react'
import { connect } from 'react-redux'
import AddMusic from '../components/AddMusic'

export const ProfileMusicContainer = () => {
  return (
    <div className='profile-music-container'>
      <AddMusic />
    </div>
  )
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileMusicContainer)
