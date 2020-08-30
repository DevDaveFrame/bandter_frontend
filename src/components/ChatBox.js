import React from 'react';
import Cable from 'actioncable';
import ChatDisplay from './ChatDisplay';
import ChatInput from './ChatInput';

function ChatBox (props) {
  let {user} = props;
  user = user.user;

    let cable = Cable.createConsumer("ws://localhost:3000/cable");
    let chat = cable.subscriptions.create(
      {
        channel: "MatchChatChannel",
        match_chat_id: 1,
      },
      {
        connected: () => {},
        received: (data) => {
          console.log(data);
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

  const postMessage = (message) => {
    chat.create(message);
  }

    return (
      <div className="chat-box">
        <ChatDisplay />
        <ChatInput postMessage={postMessage} />
      </div>
    );
}

export default ChatBox;