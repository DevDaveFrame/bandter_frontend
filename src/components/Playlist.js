import React from "react";
import PlaylistTrack from './PlaylistTrack';
import { Table } from "semantic-ui-react";

const Playlist = ({ tracks, selectedTrack, setSelectedTrack }) => {
  return (
    <div className="playlist">
      <Table celled inverted>
        <Table.Header>
          <Table.Row color='black' className="header-row">
            <Table.HeaderCell>
              <b>Title</b>
            </Table.HeaderCell>
            <Table.HeaderCell>
              <b>Album</b>
            </Table.HeaderCell>
            <Table.HeaderCell>
              <b>Duration</b>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>{tracks.map(track => (<PlaylistTrack track={track} selectedTrack={selectedTrack} setSelectedTrack={setSelectedTrack}/>))}</Table.Body>
      </Table>
    </div>
  );
};

export default Playlist;
