import React from 'react';
import {Link} from "react-router-dom";

export default function FriendCard(props) {
  const {friend} = props
  return (
    <div className="friend-card">
      <img className="friend-card-thumb" src={friend.img_url} alt={friend.name}/>
      <h5><Link to={`/friends/${friend.id}`}>{friend.name}</Link></h5>
    </div>
  )
}
