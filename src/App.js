import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchGenres } from './actions/genreActions'
import { fetchInstruments } from './actions/instrumentActions'
import { setUser, logoutUser } from './actions/userActions'
import './App.css';
import NavBar from './components/NavBar';
import Welcome from "./containers/Welcome";
import FriendsContainer from './containers/FriendsContainer';
import ProfileContainer from './containers/ProfileContainer';
import DiscoverContainer from './containers/DiscoverContainer';
import ChatContainer from './containers/ChatContainer';


class App extends React.Component {

  componentDidMount(){
    this.props.fetchGenres()
    this.props.fetchInstruments()
    if (localStorage.token) {
      this.props.setUser()
    }
  }

  render() {
    return (
      <Router>
        <NavBar />
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
            exact
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
          <Route
            path="/friends/:id"
            render={
              !this.props.user.loggedIn
                ? () => <Redirect to="/" />
                : (rProps) => (<FriendsContainer {...rProps}/>)
            }
          />
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return { 
    user: state.user
  };
};

export default connect(mapStateToProps, { setUser, logoutUser, fetchGenres, fetchInstruments })(App);
