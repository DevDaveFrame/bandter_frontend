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
    case "ADD_MATCH":
      return action.match.data.attributes.accepted === true && !state.matches.includes(action.match.data)
      ? {...state, matches: [...state.matches, action.match.data]} 
      : state;
//FIX
    //   case "ADD_MESSAGE":
    //   return [...state, action.message];
    // case "SET_MESSAGES":
    //   let messages = action.messages.included
    //   return [...messages];
//END FIX
    case "LOGOUT_USER":
      return {current: {}, matches: []};
    default:
      return state;
  }
}