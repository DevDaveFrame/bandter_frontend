import React from "react";
import ProfileBanner from "../components/ProfileBanner";
import BioSection from "../components/BioSection";
import ProfileContent from "../components/ProfileContent"

function ProfileContainer(props) {
    return (
      <div className="profile-container">
        <ProfileBanner />
        <div className="profile-holder">
          <BioSection />
          <ProfileContent />
        </div>
      </div>
    );
}
export default ProfileContainer;
