import React, {useState} from 'react';
import {connect} from 'react-redux';
import {Form, Button} from 'semantic-ui-react';
import {beginSearch} from '../actions/discoverActions'

function DiscoverFilters (props) {
  let genreOptions = props.genres.map(genre => ({key: genre.id, text: genre.name, value: genre.id }))
  let instrumentOptions = props.instruments.map(instrument => ({key: instrument.id, text: instrument.name, value: instrument.id }))
  const [genreFilters, setGenreFilters] = useState([])
  const [instrumentFilters, setInstrumentFilters] = useState([])
  return (
    <div className="discovery-filters">
      <h2>Search Filters</h2>
      {/* () => props.beginSearch() */}
      <Form onSubmit={() => props.beginSearch({genreFilters, instrumentFilters})}>
        <Form.Dropdown 
          placeholder='Genres'
          fluid
          multiple
          search
          selection
          onChange={(e, d) => setGenreFilters(d.value)}
          value={genreFilters}
          options={genreOptions}
        />
        <Form.Dropdown 
          placeholder='Instruments'
          fluid
          multiple
          search
          selection
          onChange={(e, d) => setInstrumentFilters(d.value)}
          value={instrumentFilters}
          options={instrumentOptions}
        />
        <Button type='submit'>TEST</Button>
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