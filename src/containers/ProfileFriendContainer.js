import React from 'react';
import {Link} from "react-router-dom";

export const ProfileFriendContainer = (props) => {
  return (
    <div>
      <div>
        {props.user.friends.map(friend => <Link to={`/friends/${friend.id}`}>{friend.name}</Link>)}
      </div>
    </div>
  )
}

export default ProfileFriendContainer;
