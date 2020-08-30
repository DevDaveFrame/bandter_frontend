import React from 'react';
import {connect} from 'react-redux';
import Cable from 'actioncable';
import ChatDisplay from './ChatDisplay';
import ChatInput from './ChatInput';

class ChatBox extends React.Component {
  componentDidMount(){
    this.createSocket();
  }

  createSocket() {
    let cable = Cable.createConsumer('ws://localhost:3000/cable');
    this.chats = cable.subscriptions.create({
      channel: 'MatchChatChannel',
      match_chat_id: 1
    }, {
      connected: () => {},
      received: (data) => {
        console.log(data);
      },
      create: function(chatContent) {
          this.perform('create', {
          content: chatContent,
          user_id: this.props.user.id,
          match_chat_id: 1
        });
      }
    });
  }
  render() {
    return (
      <div className="chat-box">
        <ChatDisplay/> 
        <ChatInput chats={this.chats}/>
      </div>
    )
  }
}
const mapStateToProps = state => {
  return { 
    user: state.user,
    loggedIn: state.loggedIn
  };
};

export default connect(mapStateToProps, {})(ChatBox);