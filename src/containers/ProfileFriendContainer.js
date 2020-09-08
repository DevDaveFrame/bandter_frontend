import React from 'react';
import FriendCard from '../components/FriendCard'

export const ProfileFriendContainer = (props) => {
  return (
    <div className="profile-friend-container">
      <div className="friend-list">
        <h2>Friends</h2>
        {props.user.friends.map(friend => <FriendCard key={friend.id} friend={friend} />)}
      </div>

      {props.user.id === localStorage.current 
      ? <div className="friend-requests">
        <h2>Friend Requests</h2>
        {props.user.friend_requests.map(request => <h3>{request.friender_id}</h3>)}
      </div>
      : null}
    </div>
  )
}

export default ProfileFriendContainer;
