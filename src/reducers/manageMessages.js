export default function messagesReducer(state = [], action) {
  let idx;
  switch (action.type) {
    case "ADD_MESSAGE":
      return [...state, action.message];
    case "SET_MESSAGES":
      return action.messages;
    default:
      return state;
  }
}