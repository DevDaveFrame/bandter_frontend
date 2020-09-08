export default function songsReducer(state = [], action) {
  let songs;
  switch (action.type) {
    case 'LOGIN_USER':
      songs = action.data.user.included.filter(included => included.type === "song");
      return [...state, ...songs];
    case 'SET_USER':
      songs = action.data.user.included.filter(included => included.type === "song");
      return [...state, ...songs];
    case "LOGOUT_USER":
      return [];
    default:
      return state;
  }
}
