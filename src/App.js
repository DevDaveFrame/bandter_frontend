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
      .then(data => this.props.loginUser(data))
    }
  }

  render() {
    return (
      <Router>
        <NavBar />
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
}

const mapStateToProps = state => {
  return { 
    user: state.user,
    loggedIn: state.loggedIn
  };
};

export default connect(mapStateToProps, { loginUser, logoutUser })(App);
