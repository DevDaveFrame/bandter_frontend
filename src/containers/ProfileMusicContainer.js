import React, {useState} from 'react';
import { connect } from 'react-redux';
import AddMusic from '../components/AddMusic';
import Waveform from "../components/Waveform";
import Playlist from "../components/Playlist";

export const ProfileMusicContainer = (props) => {
  const [selectedTrack, setSelectedTrack] = useState(props.songs[0]);
  return (
    <div className='profile-music-container'>
      <Waveform url={selectedTrack.url} />
      <Playlist
        tracks={props.songs}
        selectedTrack={selectedTrack}
        setSelectedTrack={setSelectedTrack}
      />
      <AddMusic />
    </div>
  )
}

const mapStateToProps = (state) => ({
  songs: state.songs
})

export default connect(mapStateToProps)(ProfileMusicContainer)
