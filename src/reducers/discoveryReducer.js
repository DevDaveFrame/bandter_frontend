export default function discoveryReducer(state = [], action) {
  switch (action.type) {
    case 'START_SEARCH':
      return []
    case "LOAD_SEARCH":
      return [...state, ...action.users];
    case "REMOVE_FRIENDEE":
      return state.filter(user => user.id !== action.friendee_id);
    case "LOGOUT_USER":
      return [];
    default:
      return state;
  }
}
