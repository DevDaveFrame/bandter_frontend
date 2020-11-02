export default function messagesReducer(state = [], action) {
  // let idx;
  switch (action.type) {
    case "ADD_MESSAGE":
      return [...state, action.message];
    case "SET_MESSAGES":
      let messages = action.messages.included
      return [...messages]
    case "LOGOUT_USER":
    return [];
    default:
      return state;
  }
}