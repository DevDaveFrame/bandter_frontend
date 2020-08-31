import React from 'react';
import {connect} from 'react-redux';
import { pushToCurrentChat } from '../actions/chatActions'
import Cable from 'actioncable';
import ChatDisplay from './ChatDisplay';
import ChatInput from './ChatInput';


// BUGS HERE!!! DOUBLING OF SUBSCRIPTIONS NEEDS STATE TO TRACK SUBS!!!!!

function ChatBox (props) {
  let {user} = props;
  user = user.user;
  let subscribed = false;
  let chat;

    let cable = Cable.createConsumer("ws://localhost:3000/cable");
    if (!subscribed){
      console.log("HIT")
      chat = cable.subscriptions.create(
      {
        channel: "MatchChatChannel",
        match_chat_id: 1,
      },
      {
        connected: () => {},
        received: (data) => {
          console.log('data: ', data);
          props.pushToCurrentChat(data);
        },
        create: function (chatContent) {
          this.perform("create", {
            content: chatContent,
            user_id: user.id,
            match_chat_id: 1,
          });
        },
      }
    );
    subscribed = true;
  }

  const postMessage = (message) => {
    chat.create(message);
  }

    return (
      <div className="chat-box">
        <ChatDisplay messages={props.messages}/>
        <ChatInput postMessage={postMessage} />
      </div>
    );
}

const mapStateToProps = state => {
  return {messages: state.messages}
}

export default connect(mapStateToProps, { pushToCurrentChat })(ChatBox);