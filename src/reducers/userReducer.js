
export default function userReducer(state = {}, action) {
  let user;
  let songs;
  let photos;
  let photo_to_delete;
  let photo_idx;
  let friendRequests;
  
  switch (action.type) {
    case 'START_LOGGING_IN':
      return {...state, songs: [], photos: [], loggedIn: true}
    case "LOGIN_USER":
    friendRequests = action.user.friend_requests.data
    localStorage.token = action.data.token;
    localStorage.current = user.id
      return {
        ...state,
        ...action.user,
        friend_requests: [...friendRequests],
        songs: [...action.songs],
        photos: [...action.photos],
        loggedIn: true
      };
    case "SET_USER":
      friendRequests = action.user.friend_requests.data
      return {
        ...state,
        ...action.user,
        friend_requests: [...friendRequests],
        songs: [...action.songs],
        photos: [...action.photos],
        loggedIn: true
      };
    case "UPDATE_USER":
      return {
        ...state,
        ...action.user
      };
    case "ADD_SONG":
      return {
        ...state,
        songs: [...state.songs, action.song]
      };
    case "ADD_PHOTO":
    return {
      ...state,
      photos: [...state.photos, action.photo]
    };
    case "REMOVE_PHOTO":
      photo_to_delete = state.photos.filter(photo => photo.id === parseInt(action.photo.id, 10))
      photo_idx = state.photos.indexOf(photo_to_delete)
    return {
      ...state,
      photos: state.photos.length > 1 
      ? [...state.photos.slice(0, photo_idx), ...state.photos.slice(photo_idx + 1)]
      : []
    };
    case "UPDATE_USER_INSTRUMENTS":
      return {
        ...state,
        instruments: [...state.instruments, ...action.instruments]
      };
    case "UPDATE_USER_GENRES":
      return {
        ...state,
        genres: [...state.genres, ...action.genres]
      };
    case "ADD_MATCH":
      return action.match.data.attributes.accepted === false 
      ? state 
      : {...state, 
        friend_requests: state.friend_requests.filter(req => req.id !== action.match.data.id),
        friends: [...state.friends, {id: action.match.data.attributes.friender_id, name: action.match.data.attributes.friender_name, img_url: action.match.data.attributes.friender_img}]
      };
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
