export function setAsCurrentChat (chat) {
  return { type: "SET_CURRENT_CHAT", current: chat }
}

export function pushToCurrentChat (message) {
  return { type: "ADD_MESSAGE", message: message.data }
}