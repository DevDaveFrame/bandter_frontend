import React from 'react'
import {connect} from 'react-redux';
import { Item } from 'semantic-ui-react';
import {handleMatch} from '../actions/discoverActions';


function DiscoverUser (props) {
  return(
    <Item>
      <Item.Image size="small" src={props.user.img_url} />
      <Item.Content>
        <Item.Header as='a'>{props.user.name}</Item.Header>
        <Item.Description>
          {`SEEKING: ${props.user.seeking}`}
        </Item.Description>
      </Item.Content>
      <button onClick={()=> props.handleMatch()}>THIS WILL MATCH USERS EVENTUALLY</button>
    </Item>
  )
}

const mapStateToProps = state => {
  return { 
    discovery: state.discovery
  };
};

export default connect(mapStateToProps, {handleMatch})(DiscoverUser)