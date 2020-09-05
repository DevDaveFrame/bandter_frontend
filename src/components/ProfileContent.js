import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Menu } from 'semantic-ui-react'

export const ProfileContent = () => {
const [activeItem, setActiveItem] = useState('music')
const handleItemClick = (e, { name }) => setActiveItem(name)

  return (
    <div className="profile-content">
      <Menu inverted pointing secondary className='profile-menu'>
      <Menu.Item
            name='music'
            active={activeItem === 'music'}
            onClick={handleItemClick}
            // position='right'
          />
          <Menu.Item
            name='photos'
            active={activeItem === 'photos'}
            onClick={handleItemClick}
            // position='right'
          />
          <Menu.Item
            name='videos'
            active={activeItem === 'videos'}
            onClick={handleItemClick}
            // position='right'
          />
      </Menu>
    </div>
  )
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContent)
