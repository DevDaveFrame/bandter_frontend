import React from 'react'
import { useState } from 'react'

function ChatInput (props) {
  const [currentMessage, setCurrentMessage] = useState('')
  
  const updateCurrentChatMessage = (event) => {
    setCurrentMessage(event.target.value)
  }
  const handleSendEvent = (event) => {
    event.preventDefault();
    props.postMessage(currentMessage);
    setCurrentMessage("");
  }
  const handleChatInputKeyPress = (event) => {
    if(event.key === 'Enter') {
      handleSendEvent(event);
    }
  }

  return (
    <div className='chat-bar'>
        <input
          value={ currentMessage }
          onKeyPress={ (e) => handleChatInputKeyPress(e) }
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
export default ChatInput;