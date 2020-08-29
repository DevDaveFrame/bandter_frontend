import React from "react";
import {connect} from "react-redux";
import {NavLink} from "react-router-dom";
import { Menu } from "semantic-ui-react";
import AuthModal from "./AuthModal";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: "",
    };
  }

  render() {
    return (
      <Menu color={'yellow'} >
        <Menu.Item as={NavLink} to="/">Bandter (placeholder)</Menu.Item>

        <Menu.Item as={NavLink} to="/profile"
          name='profile'
          active={this.state.activeItem === 'profile'}
          onClick={this.handleItemClick}
        />

        <Menu.Item as={NavLink} to="/discover"
          name='discover'
          active={this.state.activeItem === 'discover'}
          onClick={this.handleItemClick}
        />

        <Menu.Item as={NavLink} to="/chat"
          name='chat'
          active={this.state.activeItem === 'chat'}
          onClick={this.handleItemClick}
        />
        <Menu.Menu position="right">
          {this.props.user.loggedIn ? 
            <Menu.Item 
            name='logout'
            active={this.state.activeItem === 'logout'}
            content='Logout'
            onClick={this.props.logOut}
            />
          :
            <AuthModal handleLogin={this.props.handleLogin} />
          }
        </Menu.Menu>
      </Menu>
    )
  }
}
const mapStateToProps = state => {
  return { 
    user: state.user,
    loggedIn: state.loggedIn
  };
};

export default connect(mapStateToProps)(NavBar);
