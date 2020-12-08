export function setAsCurrentChat (chat) {
  return { type: "SET_CURRENT_CHAT", current: chat.id }
}

export function handleMatch (friendObj) {
  return (dispatch) => {
    dispatch({type: "REMOVE_FRIENDEE", friendee_id: friendObj.friendee_id});
    let request = {
      method: "POST",
      headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.token}`
      },
      body: JSON.stringify(friendObj)
    }
    fetch(`http://localhost:3000/api/v1/friend_request`, request)
    .then(r => r.json())
    .then(match => dispatch({type: 'ADD_MATCH', match}) )
  }
};

export function pushToCurrentChat (message) {
  console.log('message: ', message);
  return { type: "ADD_MESSAGE", message: message.data.attributes }
}