import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Menu } from 'semantic-ui-react'
import ProfileMusicContainer from '../containers/ProfileMusicContainer'
import ProfilePhotoContainer from '../containers/ProfilePhotoContainer'
import ProfileFriendContainer from '../containers/ProfileFriendContainer'

export const ProfileContent = () => {
const [activeItem, setActiveItem] = useState('music')
const handleItemClick = (e, { name }) => setActiveItem(name)
const switchProfileDisplay = (activeItem) => {
  switch (activeItem) {
    case 'music':
      return <ProfileMusicContainer />;
    case 'photos':
      return <ProfilePhotoContainer />;
    case 'friends':
      return <ProfileFriendContainer />;
    default:
      break;
  }
}

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
            name='friends'
            active={activeItem === 'friends'}
            onClick={handleItemClick}
            // position='right'
          />
      </Menu>
      {switchProfileDisplay(activeItem)}
    </div>
  )
}



const mapStateToProps = (state) => ({
  
})

export default connect(mapStateToProps)(ProfileContent)
