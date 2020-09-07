import React from 'react';
import {connect} from 'react-redux';
import {Form, Button} from 'semantic-ui-react';
import {beginSearch} from '../actions/discoverActions'

function DiscoverFilters (props) {
  let genreOptions = props.genres.map(genre => ({key: genre.id, text: genre.name, value: genre.id }))
  let instrumentOptions = props.instruments.map(instrument => ({key: instrument.id, text: instrument.name, value: instrument.id }))
  return (
    <div className="discovery-filters">
      <h2>Search Filters</h2>
      <Form>
        <Form.Dropdown 
          placeholder='Genres'
          fluid
          multiple
          search
          selection
          options={genreOptions}
        />
        <Form.Dropdown 
          placeholder='Instruments'
          fluid
          multiple
          search
          selection
          options={instrumentOptions}
        />
        <Button onClick={() => props.beginSearch()}>TEST</Button>
      </Form>
    </div>
  )
}

const mapStateToProps = state => {
  return { 
    user: state.user,
    chats: state.chats,
    discovery: state.discovery,
    genres: state.genres,
    instruments: state.instruments
  };
};

export default connect(mapStateToProps, {beginSearch})(DiscoverFilters)