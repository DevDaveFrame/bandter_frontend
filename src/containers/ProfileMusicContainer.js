import React from 'react';
import { connect } from 'react-redux';
import AddMusic from '../components/AddMusic';
import MusicPlayer from '../components/MusicPlayer'

function ProfileMusicContainer(props) {
  return (
    <div className='profile-music-container'>
      {props.user.songs[0] ? <MusicPlayer songs={props.user.songs}/> : null}
      <AddMusic />
    </div>
  )
}
const mapStateToProps = (state) => ({
  user: state.user
})
export default connect(mapStateToProps)(ProfileMusicContainer)
