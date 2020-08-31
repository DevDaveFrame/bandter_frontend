export default function userReducer(state = {}, action) {
  let user;
  switch (action.type) {
    case 'START_LOGGING_IN':
      return {...state, loggedIn: true}
    case "LOGIN_USER":
    console.log("from backend: " + action.data)
    user = action.data.user.data.attributes
    localStorage.token = action.data.token;
    localStorage.current = user.id
      return {
        ...state,
        ...user,
        loggedIn: true
      };
    case "SET_USER":
      console.log(action)
      user = action.data.user.data.attributes
      return {
        ...state,
        ...user,
        loggedIn: true
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
