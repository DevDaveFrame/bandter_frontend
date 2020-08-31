export function pushToCurrentChat (message) {
    return {
      type: "ADD_MESSAGE",
      message: message
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
  return {
    type: "SET_CURRENT_CHAT",
    current: chat
  }
}