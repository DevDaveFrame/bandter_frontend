export function pushToCurrentChat (message) {
    return {
      type: "ADD_MESSAGE",
      message: {id: message.id, attributes: message}
    }
}

export function addSub (chat, connection) {
  return {
    type: "CREATE_SUBSCRIPTION",
    chat: chat,
    connection: connection
  }
}

export function setAsCurrentChat (chat) {
  return (dispatch) => {
    dispatch({ type: "SET_CURRENT_CHAT", current: chat });
    let request = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.token}`
      }
    }
    fetch(`http://localhost:3000/api/v1/match_chats/${chat.id}`, request)
    .then(r => r.json())
    .then(data => dispatch({type: 'SET_MESSAGES', messages: data}))
  } 
}
