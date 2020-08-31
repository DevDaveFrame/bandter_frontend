export function pushToCurrentChat (message) {
    return {
      type: "ADD_MESSAGE",
      message: message
    }
}

export function addSub (subscription) {
  return {
    type: "CREATE_SUBSCRIPTION",
    subscription: subscription
  }
}