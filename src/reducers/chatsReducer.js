export default function chatsReducer(state = {current: null, matches: []}, action) {
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
      return action.match.data.attributes.accepted === true 
      && !state.matches.includes(action.match.data)
      ? {...state, matches: [...state.matches, action.match.data]} 
      : state;
    case "ADD_MESSAGE":
      let message = action.message;
      let updatedMatches = state.matches.map((match) => { 
        return parseInt(match.id) === parseInt(message.match_chat_id)
        ? {...match, attributes: {...match.attributes, messages: [...match.attributes.messages, message]}}
        : match
      })
      console.log('updatedMatches: ', updatedMatches);
      return {
        ...state,
        matches: updatedMatches
      };
    case "LOGOUT_USER":
      return {current: {}, matches: []};
    default:
      return state;
  }
}