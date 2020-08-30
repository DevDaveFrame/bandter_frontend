export default function messagesReducer(state = [], action) {
  let idx;
  switch (action.type) {
    case "ADD_MESSAGE":
      return [...state, action.message];
    case "LOGIN_USER":
      return action.messages;
    default:
      return state;
  }
}