export default function userReducer(state = {}, action) {
  let user;
  switch (action.type) {
    case 'START_LOGGING_IN':
      return {...state, loggedIn: true}
    case "LOGIN_USER":
    user = action.data.user.data.attributes
    localStorage.token = action.data.token;
    localStorage.current = user.id
      return {
        ...state,
        ...user,
        loggedIn: true
      };
    case "SET_USER":
      console.log("user stuff: ", action);
      user = action.data.user.data.attributes
      return {
        ...state,
        ...user,
        loggedIn: true
      };
      case "UPDATE_USER":
        return {
          ...state,
          ...user
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
