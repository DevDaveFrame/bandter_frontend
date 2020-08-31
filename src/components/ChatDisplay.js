import React from 'react'
import ChatBubble from "./ChatBubble"

function ChatDisplay(props) {
  return (
    <div className="chat-display">
      {props.messages.map(message => <ChatBubble key={message.id} message={message} />)}
    </div>
  )
}
export default ChatDisplay;