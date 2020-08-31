import React from 'react'
import {connect} from 'react-redux';
import ChatBubble from "./ChatBubble"

function ChatDisplay(props) {
  let thisChat = props.messages.filter(message => message.match_chat_id === props.chats.current.id)
  return (
    <div className="chat-display">
      {thisChat.map(message => <ChatBubble key={message.id} message={message} />)}
    </div>
  )
}

const mapStateToProps = state => {
  return { 
    chats: state.chats,
    messages: state.messages
  };
};
export default connect(mapStateToProps)(ChatDisplay);