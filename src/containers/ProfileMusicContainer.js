import React from 'react';
import AddMusic from '../components/AddMusic';
import MusicPlayer from '../components/MusicPlayer'

function ProfileMusicContainer(props) {
  return (
    <div className='profile-music-container'>
      {props.user.songs && props.user.songs[0] ? <MusicPlayer songs={props.user.songs}/> : null}
      <AddMusic />
    </div>
  )
}

export default ProfileMusicContainer;
