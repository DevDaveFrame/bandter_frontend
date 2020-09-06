import React from 'react'

function ChatBubble (props) {
  return (
    <div className="chat-bubble">
      {`${props.message.attributes.username}: ${props.message.attributes.content}`}
    </div>
    )
}

export default ChatBubble;