import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Menu } from 'semantic-ui-react'

export const ProfileContent = () => {
  return (
    <div className="profile-content">
      <Menu className='profile-menu'>

      </Menu>
    </div>
  )
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContent)
