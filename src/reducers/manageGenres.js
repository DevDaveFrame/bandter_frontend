export default function genreReducer(state = [], action) {
  switch (action.type) {
    case 'CACHE_GENRES':
      console.log(action.genres)
      return [...state, ...action.genres];
    case "LOAD_SEARCH":
      return [...state, ...action.users.data];
    case "LOGOUT_USER":
      return [];
    default:
      return state;
  }
}