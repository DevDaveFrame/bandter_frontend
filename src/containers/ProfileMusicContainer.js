import React from 'react';
import { connect } from 'react-redux';
import AddMusic from '../components/AddMusic';
import MusicPlayer from '../components/MusicPlayer'

function ProfileMusicContainer(props) {
  return (
    <div className='profile-music-container'>
      {props.songs[0] ? <MusicPlayer songs={props.songs}/> : null}
      <AddMusic />
    </div>
  )
}
const mapStateToProps = (state) => ({
  songs: state.songs
})
export default connect(mapStateToProps)(ProfileMusicContainer)
