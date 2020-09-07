import React, {useState} from 'react';

import Waveform from "../components/Waveform";
import Playlist from "../components/Playlist";

function MusicPlayer(props) {
  const [selectedTrack, setSelectedTrack] = useState(props.songs[0] ? props.songs[0] : null);
  let track = null;
  if (selectedTrack !== null) {
    track = selectedTrack.attributes ? selectedTrack.attributes : selectedTrack
  }

  return (
    track === null ?
    <div>NO TRACKS HERE YET</div> :
    <div className='music-player'>
      <Waveform audio={track.description} />
      <Playlist
        tracks={props.songs}
        selectedTrack={selectedTrack}
        setSelectedTrack={setSelectedTrack}
      />
    </div>
  )
}

export default MusicPlayer
