import React from 'react';
import {connect} from 'react-redux';
import {Item } from 'semantic-ui-react';
import {beginSearch} from '../../actions/discoverActions';
import DiscoverUser from './DiscoverUser';

function DiscoverDisplay (props) {
  
  return (
    <Item.Group className="discover-display">
      {props.discovery.map(user => <DiscoverUser key={user.id} discovered_user={user} />)}
    </Item.Group>
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