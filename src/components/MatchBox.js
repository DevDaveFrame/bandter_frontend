import React from 'react';
import {connect} from 'react-redux';
import Avatar from './Avatar'

function MatchBox (props) {

  const chat = props.chat.attributes
  return (
    <div className="match-box"
      onClick={() => props.setAsCurrentChat(chat)}
    >
      <Avatar className="match-thumb" 
        image={chat.friender_id !== props.user.id ? chat.friender_img : chat.friendee_img} 
        alt={chat.friender_id !== props.user.id ? chat.friender_name : chat.friendee_name}
        width="50px"/>
      <div className="chat-info">
        <h4 className="chat-name">{chat.friender_id !== props.user.id ? chat.friender_name : chat.friendee_name}</h4>
        <p className="chat-preview">A Chat Preview Will Go Here Eventually</p>
      </div>
    </div> 
  )
}

const mapStateToProps = state => {
  return { 
    user: state.user,
    chats: state.chats,
    messages: state.messages
  };
};

export default connect(mapStateToProps)(MatchBox);