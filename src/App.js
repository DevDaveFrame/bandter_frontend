import React from 'react';
import {Container} from 'semantic-ui-react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { loginUser, logoutUser } from './actions/userActions'
import './App.css';
import NavBar from './components/NavBar';
import Welcome from "./containers/Welcome";
import ProfileContainer from './containers/ProfileContainer';
import DiscoverContainer from './containers/DiscoverContainer';
import ChatContainer from './containers/ChatContainer';


class App extends React.Component {

  componentDidMount(){
    if (localStorage.token) {
      let request = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.token}`
        }
      }
      fetch(`http://localhost:3000/api/v1/users/${localStorage.current}`, request)
      .then(r => r.json())
      .then(data => this.props.loginUser(data.user.data.attributes))
    }
  }

  render() {
    return (
      <Router>
        <NavBar
          logOut={this.logOut}
          handleLogin={this.handleLogin}
        />
        <Container>
          <Route
            exact
            path="/"
            render={
              this.props.user.loggedIn
                ? () => <Redirect to="/profile" />
                : () => <Welcome />
            }
          />
          <Route
            path="/profile"
            render={
              !this.props.user.loggedIn
                ? () => <Redirect to="/" />
                : (rProps) => (<ProfileContainer {...rProps}/>)
            }
          />
          <Route
            path="/discover"
            render={
              !this.props.user.loggedIn
                ? () => <Redirect to="/" />
                : (rProps) => (<DiscoverContainer {...rProps}/>)
            }
          />
          <Route
            path="/chat"
            render={
              !this.props.user.loggedIn
                ? () => <Redirect to="/" />
                : (rProps) => (<ChatContainer {...rProps}/>)
            }
          />
        </Container>
      </Router>
    );
  }
  handleLogin = (data) => {
    let user = data.user.data.attributes
    let messages = data.user.data.relationships.messages
    console.log('user: ', user);
    console.log('data: ', data);
    localStorage.token = data.token;
    localStorage.current = user.id
    this.props.loginUser(user)
  }

  logOut = () => {
    localStorage.clear()
    this.props.logoutUser()
  }
}

const mapStateToProps = state => {
  return { 
    user: state.user,
    loggedIn: state.loggedIn
  };
};

export default connect(mapStateToProps, { loginUser, logoutUser })(App);
