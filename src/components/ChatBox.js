import React from 'react'
import { useState } from 'react'

function ChatBox (props) {
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
    <div>
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

export default ChatBox;