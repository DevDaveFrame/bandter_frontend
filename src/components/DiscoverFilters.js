import React from 'react';
import {connect} from 'react-redux';
import {Form} from 'semantic-ui-react';

function DiscoverFilters () {
  return (
    <Form>
      <Form.Dropdown />
      <input type="range" />
      <Form.Group>
        <Form.Radio />
        <Form.Radio />
        <Form.Radio />
      </Form.Group>
    </Form>
  )
}

const mapStateToProps = state => {
  return { 
    user: state.user,
    chats: state.chats,
    messages: state.messages
  };
};

export default connect(mapStateToProps)(DiscoverFilters)