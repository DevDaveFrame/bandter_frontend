import React from 'react'
import {connect} from 'react-redux'
import ChatBox from '../components/ChatBox'
import MatchContainer from './MatchContainer'

function ChatContainer (props) {
    return (
      <div className='chat-container' >
        <MatchContainer />
        <ChatBox user={props.user}/>
      </div>
    )
}

const mapStateToProps = state => {
  return { 
    user: state.user,
    loggedIn: state.loggedIn
  };
};

export default connect(mapStateToProps)(ChatContainer);