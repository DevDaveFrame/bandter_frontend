import React from 'react'
import {connect} from 'react-redux';
import {handleMatch} from '../actions/discoverActions';
import MusicPlayer from './MusicPlayer';
import { Item, Button } from 'semantic-ui-react';


function DiscoverUser (props) {
  console.log('props: ', props);
  const user = props.discovered_user;
  const songs = props.discovered_user.songs;
  return(
    <Item className="discover-user" color="black" inverted>
    <Item.Image size='small' src={user.img_url} />

    <Item.Content>
      <Item.Header as='a'>{`${user.first_name} ${user.last_name}`}</Item.Header>
      <Item.Meta>Interests</Item.Meta>
      <Item.Description>
        <p>{user.bio}</p>
        <div className="discover-interests">
          <p><b>Instruments: </b>
          {user.instruments.length > 0 ? user.instruments.map(x => <span key={x.id} className="tags">{x.name}</span>) : "N/A"}</p>
          <p><b>Genres: </b>
          {user.genres.length > 0 ? user.genres.map(x => <span key={x.id} className="tags">{x.name}</span>) : "N/A"}</p>
        </div>
      </Item.Description>
      <Item.Extra><MusicPlayer songs={songs} /></Item.Extra>
      <Button 
        onClick={() => props.handleMatch({friender_id: props.user.id, friendee_id: user.id})}
      >Add Friend</Button>
    </Item.Content>
  </Item>


    // <div className="discover-card">
    //   <div className="discover-bio">
    //     <div className="friend-button">
    //       <Button 
    //         onClick={() => props.handleMatch({friender_id: props.user.id, friendee_id: user.id})}
    //       >Add Friend</Button>
    //     </div>
    //     <div className="discover-user">
    //       <img src={user.img_url} alt={user.first_name}/>
    //       <h4>{`${user.first_name} ${user.last_name}`}</h4>
    //     </div>
    //     <div className="discover-info" >
    //     <h5>About Me: </h5>
    //     <p>{user.bio}</p>
    //     </div>
    //     <div className="discover-interests">
    //       <p><b>Instruments: </b>
    //       {user.instruments.length > 0 ? user.instruments.map(x => <span key={x.id} className="tags">{x.name}</span>) : "N/A"}</p>
    //       <p><b>Genres: </b>
    //       {user.genres.length > 0 ? user.genres.map(x => <span key={x.id} className="tags">{x.name}</span>) : "N/A"}</p>
    //     </div>
    //   </div>
    //   <div className="discover-player">
    //     <MusicPlayer songs={songs} />
    //   </div>
    // </div>
  )
}

const mapStateToProps = state => {
  return { 
    user: state.user,
    discovery: state.discovery
  };
};

export default connect(mapStateToProps, {handleMatch})(DiscoverUser)