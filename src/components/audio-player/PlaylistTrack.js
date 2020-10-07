import React from 'react'
import { Table } from "semantic-ui-react";

export default function PlaylistTrack({ track, selectedTrack, setSelectedTrack }) {
  const thisTrack = track.attributes ? track.attributes : track
  const duration = thisTrack.duration 
  ? `${Math.floor(thisTrack.duration / 60)}:${Math.floor(thisTrack.duration % 60)}`
  : "unavailable"
  return (
    <Table.Row
    key={track.id}
    active={
      track.id === selectedTrack.id
        ? true
        : false
    }
    onClick={() => setSelectedTrack(track)}
    color='black' 
    textAlign='center'
    >
      <Table.Cell>
      {thisTrack.title}
      </Table.Cell>
      <Table.Cell>
      {thisTrack.album || "N/A"}
      </Table.Cell>
      <Table.Cell>
      {duration}
      </Table.Cell>
  </Table.Row>
  )
}
