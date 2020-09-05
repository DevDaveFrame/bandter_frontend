import React from 'react';
import {connect} from 'react-redux';
import logo from "../placeholder.png"

function ProfileBanner(props) {
  const user = props.user;
  
  return (
    <div className="profile-banner">
      <img src={ user.image_url || logo } alt={user.name} />
    </div>
  )
}

const mapStateToProps = state => {
  return { 
    user: state.user
  };
};

export default connect(mapStateToProps)(ProfileBanner);