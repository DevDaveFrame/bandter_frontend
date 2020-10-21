import React, { useState } from "react";
import Cable from "actioncable";
import { connect } from "react-redux";
import ChatBubble from "./ChatBubble";
import { setSubscriptions } from "../actions/subscriptionActions";
import { pushToCurrentChat } from "../actions/chatActions";

function ChatBox(props) {
  //deconstruct state to access the currently selected chat
  let current = props.chats.current;
  const [currentMessage, setCurrentMessage] = useState("");

  //create a consumer using actioncable API
  const cable = Cable.createConsumer("ws://localhost:3000/cable");
  
  const updateCurrentChatMessage = (event) => {
    setCurrentMessage(event.target.value);
  };

  const handleSendEvent = (event) => {
    event.preventDefault();
    postMessage(currentMessage);
    setCurrentMessage("");
  };

  const handleChatInputKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSendEvent(event);
    }
  };

  const postMessage = (message) => {
    props.subscriptions[current.id].create(message);
  };

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
    );
  }

  return (
    <div className="chat-box">
      {current.id ? (
        <div id="chat-display" className="chat-display">
          {current.attributes.messages.map((message) => (
            <ChatBubble
              key={message.id}
              username={
                current.attributes.friender_id === message.user_id
                  ? current.attributes.friender_name
                  : current.attributes.friendee_name
              }
              message={message}
            />
          ))}
        </div>
        ) : (
        <div id="chat-display-placeholder" className="chat-display-placeholder">
          <h1>BANDTER</h1>
        </div>
        )
      }
      
      <div className="chat-bar">
        <input
          value={currentMessage}
          onKeyPress={(e) => handleChatInputKeyPress(e)}
          onChange={(e) => updateCurrentChatMessage(e)}
          type="text"
          placeholder="Enter your message..."
          className="chat-input"
        />
        <button onClick={(e) => handleSendEvent(e)} className="send">
          Send
        </button>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    chats: state.chats,
    messages: state.messages,
    subscriptions: state.subscriptions,
  };
};

export default connect(mapStateToProps, {
  pushToCurrentChat,
  setSubscriptions,
})(ChatBox);
