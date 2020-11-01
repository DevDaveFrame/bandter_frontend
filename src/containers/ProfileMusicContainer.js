import React from 'react';
import AddMusicModal from '../components/AddMusicModal';
import MusicPlayer from '../components/MusicPlayer'

function ProfileMusicContainer(props) {
  return (
    <div className='profile-music-container'>
      {props.user.id === parseInt(localStorage.current, 10) 
      ? <AddMusicModal />
      : null}
      {props.user.songs && props.user.songs[0] ? <MusicPlayer songs={props.user.songs}/> : null}
    </div>
  )
}

export default ProfileMusicContainer;
