import React, {useState} from 'react';
import {Progress} from 'semantic-ui-react';
import Waveform from "../components/Waveform";
import Playlist from "../components/Playlist";

function MusicPlayer(props) {
  const [loading, setLoading] = useState(false);
  const [percent, setPercent] = useState(0);
  const [selectedTrack, setSelectedTrack] = useState(props.songs[0] ? props.songs[0] : null);
  let track = null;
  if (selectedTrack !== null) {
    track = selectedTrack.attributes ? selectedTrack.attributes : selectedTrack
  }

  return (
    track === null ?
    <div>NO TRACKS HERE YET</div> :
    <div className='music-player'>
      <Progress className={loading ? "progress" : "hidden"} percent={percent} color='red' />
      <Waveform 
      className={!loading ? "waveform" : "hidden"}
      setLoading={setLoading}
      setPercent={setPercent}
      audio={track.description} />
      <Playlist
        tracks={props.songs}
        selectedTrack={selectedTrack}
        setSelectedTrack={setSelectedTrack}
      />
    </div>
  )
}

export default MusicPlayer
