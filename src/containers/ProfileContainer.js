import React from "react";
import { connect } from 'react-redux'
import ProfileBanner from "../components/ProfileBanner";
import BioSection from "../components/BioSection";
import ProfileContent from "../components/ProfileContent";

function ProfileContainer(props) {
  
    return (
      <div className="profile-container">
        <ProfileBanner user={props.user} />
        <div className="profile-holder">
          <BioSection user={props.user}/>
          <ProfileContent user={props.user}/>
        </div>
      </div>
    );
}

const mapStateToProps = (state) => ({
  user: state.user
})


export default connect(mapStateToProps)(ProfileContainer)
