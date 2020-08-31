export default function chatsReducer(state = {current: {}, matches: []}, action) {
  // let idx;
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        current: {},
        matches: action.data.user.included.map(
          match => match = { ...match, messages: [] }
          )
      };
    case "SET_CURRENT_CHAT":
      return {
        ...state,
        current: action.current};
    case "CREATE_SUBSCRIPTION":
      return {
        ...state,
        matches: state.matches.map(match => 
          match.id === action.chat.id
          ? match = { ...match, connection: action.connection}
          : match
        )
      };
    default:
      return state;
  }
}