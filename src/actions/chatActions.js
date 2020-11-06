export function setAsCurrentChat (chat) {
  return { type: "SET_CURRENT_CHAT", current: chat.id }
}

export function pushToCurrentChat (message) {
  console.log('message: ', message);
  return { type: "ADD_MESSAGE", message: message.data.attributes }
}