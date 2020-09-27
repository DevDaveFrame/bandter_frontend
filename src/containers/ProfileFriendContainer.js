import React from 'react';
import FriendCard from '../components/FriendCard'
import FriendRequest from '../components/FriendRequest'

export const ProfileFriendContainer = (props) => {
  const requests = props.user.friend_requests

  return (
    <div className="profile-friend-container">
      <div className="friend-list">
        <h2>Friends</h2>
        {props.user.friends.map(friend => <FriendCard key={friend.id} friend={friend} />)}
      </div>

      {props.user.id === parseInt(localStorage.current)
      ? <div className="friend-requests">
        <h2>Friend Requests</h2>
        {requests.map(request => <FriendRequest request={request} />)}
      </div>
      : null}
    </div>
  )
}

export default ProfileFriendContainer;
