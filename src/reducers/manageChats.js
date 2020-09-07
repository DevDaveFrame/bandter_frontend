export default function chatsReducer(state = {current: {}, matches: []}, action) {
  let matches;
  switch (action.type) {
    case "LOGIN_USER":
      matches = action.data.user.included.filter(included => included.type === "match_chat");
      return {
        ...state,
        current: {},
        matches: matches
      };
      case "SET_USER":
        matches = action.data.user.included.filter(included => included.type === "match_chat");
        return {
          ...state,
          current: {},
          matches: matches
        };
    case "SET_CURRENT_CHAT":
      return {
        ...state,
        current: action.current};
    case "LOGOUT_USER":
    return {current: {}, matches: []};
    default:
      return state;
  }
}