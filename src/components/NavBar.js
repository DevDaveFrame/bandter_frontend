import React from "react";
import {useState} from 'react';
import {connect} from "react-redux";
import {loginUser, logoutUser} from "../actions/userActions"
import {NavLink} from "react-router-dom";
import { Menu } from "semantic-ui-react";
import AuthModal from "./AuthModal";

function NavBar (props) {
  const [activeItem, setActiveItem] = useState("")

  return (
    <Menu className='navbar' color={'red'} inverted >
      <Menu.Item header as={NavLink} exact to="/" active={false}>Bandter</Menu.Item>

      <Menu.Item as={NavLink} to="/profile"
        name='profile'
        active={activeItem === 'profile'}
        onClick={() => setActiveItem('profile')}
      />

      <Menu.Item as={NavLink} to="/discover"
        name='discover'
        active={activeItem === 'discover'}
        onClick={() => setActiveItem('discover')}
      />

      <Menu.Item as={NavLink} to="/chat"
        name='chat'
        active={activeItem === 'chat'}
        onClick={() => setActiveItem('chat')}
      />
      <Menu.Menu position="right">
        {props.user.loggedIn ? 
          <Menu.Item 
          name='logout'
          active={activeItem === 'logout'}
          content='Logout'
          onClick={props.logoutUser}
          />
        :
          <AuthModal handleLogin={props.loginUser} />
        }
      </Menu.Menu>
    </Menu>
  )
}
const mapStateToProps = state => {
  return { 
    user: state.user,
    loggedIn: state.loggedIn
  };
};

export default connect(mapStateToProps, { loginUser, logoutUser })(NavBar);
