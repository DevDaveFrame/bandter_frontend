import React from 'react'

import Cable from 'actioncable'
import ChatBox from '../components/ChatBox'
import MatchContainer from './MatchContainer'

class ChatContainer extends React.Component {

  componentWillMount(){
    this.createSocket();
  }

  createSocket() {
    let cable = Cable.createConsumer('ws://localhost:3000/cable');
    this.chats = cable.subscriptions.create({
      channel: 'MatchChatChannel'
    }, {
      connected: () => {},
      received: (data) => {
        console.log(data);
      },
      create: function(chatContent) {
          this.perform('create', {
          content: chatContent,
          user_id: 41,
          match_chat_id: 1
        });
      }
    });
  }
  render(){
    return (
      <>
        <MatchContainer />
        <ChatBox chats={this.chats}/>
      </>
    )
  }
}

export default ChatContainer