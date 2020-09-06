import React from 'react';
import {connect} from 'react-redux';
import {Form} from 'semantic-ui-react';
import {beginSearch} from '../actions/discoverActions'

function DiscoverFilters (props) {
  return (
    <Form>
      <Form.Dropdown 
        placeholder='State'
        fluid
        multiple
        search
        selection
        options={props.genres}
      />
      <input type="range" />
      <Form.Group>
        <Form.Radio />
        <Form.Radio />
        <Form.Radio />
      </Form.Group>
      <button onClick={() => props.beginSearch()}>TEST</button>
    </Form>
  )
}

const mapStateToProps = state => {
  return { 
    user: state.user,
    chats: state.chats,
    discovery: state.discovery,
    genres: state.genres
  };
};

export default connect(mapStateToProps, {beginSearch})(DiscoverFilters)