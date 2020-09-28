import React from 'react'

function ChatBubble (props) {
  return (
    <div className="chat-bubble">
      {`${props.username}: ${props.message.content}`}
    </div>
    )
}

export default ChatBubble;