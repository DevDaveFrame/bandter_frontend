export default function discoveryReducer(state = [], action) {
  switch (action.type) {
    case 'START_SEARCH':
      return []
    case "LOAD_SEARCH":
      console.log(action)
      return [...state, ...action.users];
    case "LOGOUT_USER":
      return [];
    default:
      return state;
  }
}
