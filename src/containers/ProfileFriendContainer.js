import React, { Component } from 'react'
import { connect } from 'react-redux'

export const ProfileFriendContainer = (props) => {
  return (
    <div>
      <div>
        {props.friends.friends.map(friend => <h2>{friend.name}</h2>)}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  user: state.user,
  friends: state.friends
})


export default connect(mapStateToProps)(ProfileFriendContainer)
