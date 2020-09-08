import React, { Component } from 'react'
import { connect } from 'react-redux'

export const ProfileFriendContainer = (props) => {
  return (
    <div>
      FRENDS
    </div>
  )
}

const mapStateToProps = (state) => ({
  user: state.user,
  friends: state.friends
})


export default connect(mapStateToProps)(ProfileFriendContainer)
