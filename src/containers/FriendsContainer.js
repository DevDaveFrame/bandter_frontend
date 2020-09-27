import React from 'react'
import { connect } from 'react-redux'
import ProfileBanner from "../components/ProfileBanner";
import BioSection from "../components/BioSection";
import ProfileContent from "../components/ProfileContent";
import {getProfile} from '../actions/friendActions'
import { useEffect } from 'react';

export const FriendsContainer = (props) => {
  const matchId = props.match.params.id
  const { getProfile } = props
  useEffect(() => {
    getProfile(matchId)
  }, [getProfile, matchId])
  return (
    <div className="profile-container">
      <ProfileBanner user={props.friends.current} />
      <div className="profile-holder">
        <BioSection user={props.friends.current}/>
        <ProfileContent user={props.friends.current}/>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  friends: state.friends
})

export default connect(mapStateToProps, {getProfile})(FriendsContainer)
