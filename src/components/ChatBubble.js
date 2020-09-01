import React from 'react'

function ChatBubble (props) {
  console.log('props: ', props);
  return (
    <div className="chat-bubble">
      {`${props.message.attributes.content}`}
    </div>
    )
}

export default ChatBubble;