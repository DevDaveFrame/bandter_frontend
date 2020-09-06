export default function songsReducer(state = [], action) {
  switch (action.type) {
    case 'CACHE_GENRES':
      let songs = action.data.user.included.filter(included => included.type === "song");
      return [...state, ...songs];
    case "LOAD_SEARCH":
      return [...state, ...action.users.data];
    case "LOGOUT_USER":
      return [];
    default:
      return state;
  }
}