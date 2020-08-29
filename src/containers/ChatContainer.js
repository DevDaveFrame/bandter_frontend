import React from 'react'
import Cable from 'actioncable'

class ChatContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentChatMessage: ''
    };
  }
  
  updateCurrentChatMessage(event) {
    this.setState({
      currentChatMessage: event.target.value
    });
  }

  handleSendEvent(event) {
    event.preventDefault();
    this.chats.create(this.state.currentChatMessage);
    this.setState({
      currentChatMessage: ''
    });
  }

  componentDidMount() {
    this.createSocket();
  }

  render() {
    return (
      <div>
        <input
          value={ this.state.currentChatMessage }
          onChange={ (e) => this.updateCurrentChatMessage(e) }
          type='text'
          placeholder='Enter your message...'
          className='chat-input' 
        />
        <button
          onClick={ (e) => this.handleSendEvent(e) }
          className='send'>Send</button>
      </div>
    )
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
}

export default ChatContainer