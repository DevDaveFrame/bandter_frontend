export function pushToCurrentChat (message) {
  return {
    type: "ADD_MESSAGE",
    message: message.data
  }
}