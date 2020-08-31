import React from 'react'
import { connect } from 'react-redux';
import {setAsCurrentChat} from '../actions/chatActions'
import MatchBox from '../components/MatchBox'

function MatchContainer (props) {
  return (
    <div className='match-container'>
      {props.chats.matches.map( chat => <MatchBox key={chat.id} chat={chat} setAsCurrentChat={props.setAsCurrentChat}/> )}
    </div>
  )
}


const mapStateToProps = state => {
  return {chats: state.chats}
}

export default connect(mapStateToProps, {setAsCurrentChat})(MatchContainer);