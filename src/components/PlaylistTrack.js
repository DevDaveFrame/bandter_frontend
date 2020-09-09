import React from 'react'

export default function PlaylistTrack({ track, selectedTrack, setSelectedTrack }) {
  const thisTrack = track.attributes ? track.attributes : track
  const duration = thisTrack.duration 
  ? `${Math.floor(thisTrack.duration / 60)}:${Math.floor(thisTrack.duration % 60)}`
  : "unavailable"
  return (
    <div
          key={track.id}
          className={
            track.id === selectedTrack.id
              ? "playlist-item selected"
              : "playlist-item"
          }
          onClick={() => setSelectedTrack(track)}
        >
          <span className="track-info"><b>Title: {thisTrack.title}</b></span> 
          <span className="track-info"><b>Album: {thisTrack.album || "N/A"}</b></span> 
          <span className="track-info"><b>Duration: {duration}</b></span> 


        </div>
      
  )
}
