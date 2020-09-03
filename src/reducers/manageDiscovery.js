export default function discoveryReducer(state = [], action) {
  switch (action.type) {
    case 'START_SEARCH':
      return [...state]
    case "LOAD_SEARCH":
      return [...state, ...action.users.data];
    case "LOGOUT_USER":
      return [];
    default:
      return state;
  }
}
