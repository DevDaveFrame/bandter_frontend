import React from 'react'
import { connect } from 'react-redux'
import {Link} from "react-router-dom";
import { handleMatch } from '../actions/chatActions';

function FriendRequest(props) {

  const request = props.request.attributes
  return (
    <div className="friend-request">
      <img className="friend-request-thumb" src={request.friender_img} alt={request.friender_name}/>
      <h5><Link to={`/friends/${request.friender_id}`}>{request.friender_name}</Link></h5>
      <button onClick={()=> props.handleMatch({friender_id: request.friender_id, friendee_id: request.friendee_id})}>Accept</button> 
    </div>
  )
}

const mapStateToProps = (state) => ({
  user: state.user
})

export default connect(mapStateToProps, {handleMatch})(FriendRequest)

