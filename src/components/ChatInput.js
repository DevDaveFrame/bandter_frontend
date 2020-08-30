import React from 'react'
import { useState } from 'react'
import {connect} from 'react-redux'

function ChatInput (props) {
  const [currentMessage, setCurrentMessage] = useState('')
  
  const updateCurrentChatMessage = (event) => {
    setCurrentMessage(event.target.value)
  }

  const handleSendEvent = (event) => {
    event.preventDefault();
    props.chats.create(currentMessage);
    setCurrentMessage("")
  }

  

  return (
    <div className='chat-bar'>
        <input
          value={ currentMessage }
          onChange={ (e) => updateCurrentChatMessage(e) }
          type='text'
          placeholder='Enter your message...'
          className='chat-input' 
        />
        <button
          onClick={ (e) => handleSendEvent(e) }
          className='send'>Send</button>
      </div>
  )
}
const mapStateToProps = state => {
  return { 
    user: state.user,
    loggedIn: state.loggedIn
  };
};

export default connect(mapStateToProps, {})(ChatInput);