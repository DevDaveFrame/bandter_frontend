import React from 'react';
import Cable from 'actioncable';
import {connect} from 'react-redux';
import {setSubscriptions} from '../actions/subscriptionActions'
import { pushToCurrentChat } from '../actions/chatActions';
import ChatDisplay from './ChatDisplay';
import ChatInput from './ChatInput';

function ChatBox (props) {
  const cable = Cable.createConsumer("ws://localhost:3000/cable");
  let current = props.chats.current;
  
  const postMessage = (message) => {
    props.subscriptions[current.id].create(message);
  }
  if (current.id && !(current.id in props.subscriptions)) {
    props.setSubscriptions(
      current.id,
      cable.subscriptions.create(
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
    )
   )
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
    messages: state.messages,
    subscriptions: state.subscriptions
  };
};

export default connect(mapStateToProps, { pushToCurrentChat, setSubscriptions })(ChatBox);