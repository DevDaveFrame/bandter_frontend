export default function songsReducer(state = [], action) {
  switch (action.type) {
    case 'SET_USER':
      let songs = action.data.user.included.filter(included => included.type === "song");
      return [...state, ...songs];
    case "LOGOUT_USER":
      return [];
    default:
      return state;
  }
}
