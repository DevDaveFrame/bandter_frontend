export default function chatsReducer(state = [], action) {
  // let idx;
  switch (action.type) {
    case "ADD_MESSAGE":
      return [...state, action.message];
    case "LOGIN_USER":
      return state;
    default:
      return state;
  }
}