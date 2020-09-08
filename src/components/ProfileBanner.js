import React from 'react';
import logo from "../placeholder.png"
import ProfilePicUpdate from './ProfilePicUpdate';


function ProfileBanner(props) {
  const user = props.user;
  return (
    <div className="profile-banner">
      <ProfilePicUpdate />
      <img src={ user.img_url || logo } alt={user.name} />
    </div>
  )
}

export default ProfileBanner;