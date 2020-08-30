import React from 'react'
import ChatDisplay from './ChatDisplay'
import ChatInput from './ChatInput'

function ChatBox () {
  return (
    <div className="chat-box">
      <ChatDisplay/> 
      <ChatInput/>
    </div>
  )
}

export default ChatBox