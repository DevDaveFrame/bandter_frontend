import React from 'react';
import ProfilePicUpdate from './ProfilePicUpdate';

function ProfileBanner(props) {
  const user = props.user;
  return (
    <div className="profile-banner">
      {user.id === parseInt(localStorage.current, 10)
      ? <ProfilePicUpdate />
      : null}
    </div>
  )
}

export default ProfileBanner;