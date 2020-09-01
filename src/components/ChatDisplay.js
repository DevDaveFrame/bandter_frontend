import React from 'react'
import {connect} from 'react-redux';
import ChatBubble from "./ChatBubble"

function ChatDisplay(props) {
  let thisChat = props.messages.filter(message => message.attributes.match_chat_id === props.chats.current.id)
  return (
    props.chats.current.id ?
    <div className="chat-display">
      {thisChat.map(message => <ChatBubble key={message.id} message={message} />)}
    </div>
    : <div className="chat-display"> <h1>NOTHING HERE YET!!</h1></div>
  )
}

const mapStateToProps = state => {
  return { 
    chats: state.chats,
    messages: state.messages
  };
};
export default connect(mapStateToProps)(ChatDisplay);