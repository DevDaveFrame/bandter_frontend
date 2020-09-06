import React, {useState} from 'react';
import { connect } from 'react-redux';
import Waveform from "../components/Waveform";
import Playlist from "../components/Playlist";

function MusicPlayer(props) {
  console.log('props: ', props);
  const [selectedTrack, setSelectedTrack] = useState(props.songs[0] ? props.songs[0] : null);
  return (
    <div className='music-player'>
      <Waveform audio={selectedTrack.attributes.description} />
      <Playlist
        tracks={props.songs}
        selectedTrack={selectedTrack}
        setSelectedTrack={setSelectedTrack}
      />
    </div>
  )
}
const mapStateToProps = (state) => ({
  songs: state.songs
})
export default connect(mapStateToProps)(MusicPlayer)
