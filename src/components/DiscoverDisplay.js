import React from 'react';
import {connect} from 'react-redux';
import { Container } from 'semantic-ui-react';

function DiscoverDisplay (props) {
  return (
    <Container >
      "DISPLAY"
    </Container>
  )
}

const mapStateToProps = state => {
  return { 
    user: state.user,
    chats: state.chats,
    messages: state.messages
  };
};

export default connect(mapStateToProps)(DiscoverDisplay)