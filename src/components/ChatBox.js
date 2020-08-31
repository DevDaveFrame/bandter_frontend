import React from 'react';
import Cable from 'actioncable';
import {connect} from 'react-redux';
import {useState} from 'react';
import { pushToCurrentChat } from '../actions/chatActions';
import ChatDisplay from './ChatDisplay';
import ChatInput from './ChatInput';

function ChatBox (props) {
  const [connection, setConnection] = useState(null);
  const [subscription, setSubscription] = useState(null);
  const cable = Cable.createConsumer("ws://localhost:3000/cable");
  let current = props.chats.current;
 
  const postMessage = (message) => {
    subscription.create(message);
  }
  if (current.id && connection !== current.id) {
    setSubscription(cable.subscriptions.create(
      {
        channel: "MatchChatChannel",
        match_chat_id: current.id,
      },
      {
        connected: () => {},
        received: (data) => {
          props.pushToCurrentChat(data);
        },
        create: function (chatContent) {
          this.perform("create", {
            content: chatContent,
            user_id: props.user.id,
            match_chat_id: current.id,
          });
        },
      }
    ))
    setConnection(current.id);
  }
  return (
    <div className="chat-box">
      <ChatDisplay />
      <ChatInput postMessage={postMessage} />
    </div>
  );
}

const mapStateToProps = state => {
  return { 
    user: state.user,
    chats: state.chats,
    messages: state.messages
  };
};

export default connect(mapStateToProps, { pushToCurrentChat })(ChatBox);