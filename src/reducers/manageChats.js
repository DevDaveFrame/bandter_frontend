export default function chatsReducer(state = {current: {}, matches: []}, action) {
  // let idx;
  switch (action.type) {
    case "LOGIN_USER":
      return {
        ...state,
        current: {},
        matches: action.data.user.included
      };
      case "SET_USER":
        return {
          ...state,
          current: {},
          matches: action.data.user.included
        };
    case "SET_CURRENT_CHAT":
      return {
        ...state,
        current: action.current};
    case "LOGOUT_USER":
    localStorage.clear()
    return {current: {}, matches: []};
    default:
      return state;
  }
}