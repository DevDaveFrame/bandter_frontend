import React from 'react'
import {connect} from 'react-redux';
import ChatBox from '../components/ChatBox'
import MatchContainer from './MatchContainer'

function ChatContainer () {
    return (
      <div className='chat-container' >
        <MatchContainer />
        <ChatBox/>
      </div>
    )
}

const mapStateToProps = state => {
  return { 
    user: state.user,
    loggedIn: state.loggedIn
  };
};

export default connect(mapStateToProps, {})(ChatContainer);