
export default function userReducer(state = {}, action) {
  let user;
  let songs;
  let friendRequests;
  switch (action.type) {
    case 'START_LOGGING_IN':
      return {...state, songs: [], loggedIn: true}
    case "LOGIN_USER":
    user = action.data.user.data.attributes
    songs = action.data.user.included.filter(included => included.type === "song");
    localStorage.token = action.data.token;
    localStorage.current = user.id
      return {
        ...state,
        ...user,
        songs: [...songs],
        loggedIn: true
      };
    case "SET_USER":
      console.log("user stuff: ", action);
      user = action.data.user.data.attributes
      friendRequests = user.friend_requests.data
      songs = action.data.user.included.filter(included => included.type === "song");
      return {
        ...state,
        ...user,
        friend_requests: [...friendRequests],
        songs: [...songs],
        loggedIn: true
      };
      case "UPDATE_USER":
        return {
          ...state,
          ...user
        };
      case "ADD_SONG":
        return {
          ...state,
          songs: [...state.songs, action.song]
        }
    case "LOGOUT_USER":
      localStorage.clear()
      return {
        ...state,
        loggedIn: false
      };
    default:
      return state;
  }
}
