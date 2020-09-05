import React from "react";
import ReactPlayer from "react-player"
import ProfileBanner from "../components/ProfileBanner";
import BioSection from "../components/BioSection";
import ProfileContent from "../components/ProfileContent"
import { Grid, Segment, GridRow, GridColumn } from "semantic-ui-react";

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
