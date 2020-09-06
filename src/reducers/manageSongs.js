export default function songsReducer(state = [], action) {
  switch (action.type) {
    case 'SET_USER':
      return state;
    case "LOAD_SEARCH":
      return [...state, ...action.users.data];
    case "LOGOUT_USER":
      return [];
    default:
      return state;
  }
}
