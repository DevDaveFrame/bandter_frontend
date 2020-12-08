import React from 'react';
import logo from "../placeholder.png"
import ProfilePicUpdate from './ProfilePicUpdate';
import Avatar from './Avatar'

function ProfileBanner(props) {
  const user = props.user;
  return (
    <div className="profile-banner">
      {user.id === parseInt(localStorage.current, 10)
      ? <ProfilePicUpdate />
      : null}
      <Avatar image={ user.img_url || logo } alt={user.name} width={'120px'} />
    </div>
  )
}

export default ProfileBanner;