import React from 'react';
import {connect} from 'react-redux';
import { Container } from 'semantic-ui-react';
import {beginSearch} from '../actions/discoverActions';
import DiscoverUser from './DiscoverUser';

function DiscoverDisplay (props) {
  
  return (
    <Container >
      {props.discovery.map(user => <DiscoverUser key={user.if} user={user.attributes} />)}
    </Container>
  )
}

const mapStateToProps = state => {
  return { 
    user: state.user,
    chats: state.chats,
    discovery: state.discovery
  };
};

export default connect(mapStateToProps, {beginSearch})(DiscoverDisplay)