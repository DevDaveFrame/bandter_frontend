import React from 'react';
import logo from "../placeholder.png"
import ProfilePicUpdate from './ProfilePicUpdate';


function ProfileBanner(props) {
  const user = props.user;
  return (
    <div className="profile-banner">
      {user.id === parseInt(localStorage.current, 10)
      ? <ProfilePicUpdate />
      : null}
      <img className="profile-pic" src={ user.img_url || logo } alt={user.name} />
    </div>
  )
}

export default ProfileBanner;