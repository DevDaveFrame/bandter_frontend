import React from 'react'
import ChatBox from '../components/ChatBox'
import MatchContainer from './MatchContainer'

function ChatContainer () {
  return (
    <div className='chat-container' >
      <MatchContainer />
      <ChatBox />
    </div>
  )
}

export default ChatContainer;