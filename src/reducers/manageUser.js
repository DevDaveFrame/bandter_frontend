export default function userReducer(state = {user: {}, loggedIn: false}, action) {
  let idx;
  switch (action.type) {
    case 'START_LOGGING_IN':
      return {user: {}, loggedIn: true}
    case "LOGIN_USER":
    console.log(action.data.user.data.attributes)
    let user = action.data.user.data.attributes
    localStorage.token = action.data.token;
    localStorage.current = user.id
      return {
        user: user,
        loggedIn: true
      };
    case "LOGOUT_USER":
      localStorage.clear()
      return {
        user: null,
        loggedIn: false
      };
    default:
      return state;
  }
}
