import React from "react";
import PlaylistTrack from './PlaylistTrack';

const Playlist = ({ tracks, selectedTrack, setSelectedTrack }) => {
  return (
    <div className="playlist">
      {tracks.map(track => (<PlaylistTrack track={track} selectedTrack={selectedTrack} setSelectedTrack={setSelectedTrack}/>))}
    </div>
  );
};

export default Playlist;
