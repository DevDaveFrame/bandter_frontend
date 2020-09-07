export default function genreReducer(state = [], action) {
  switch (action.type) {
    case 'CACHE_GENRES':
      console.log(action.genres)
      return [...state, ...action.genres];
    case "LOGOUT_USER":
      return [];
    default:
      return state;
  }
}