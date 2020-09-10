import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import ChatBubble from "./ChatBubble";
import {animateScroll} from 'react-scroll'

function ChatDisplay(props) {
  const thisChat = props.messages.filter(message => message.attributes.match_chat_id === props.chats.current.id)
  useEffect(() => animateScroll.scrollToBottom({containerId: "chat-display"}))
  return (
    props.chats.current.id ?
    <div id='chat-display' className="chat-display">
      {thisChat.map(message => <ChatBubble key={message.id} message={message} />)}
    </div>
    : <div id='chat-display-placeholder' className="chat-display-placeholder"> <h1>BANDTER</h1> </div>
  )
}

const mapStateToProps = state => {
  return { 
    chats: state.chats,
    messages: state.messages
  };
};
export default connect(mapStateToProps)(ChatDisplay);