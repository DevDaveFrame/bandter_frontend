export default function userReducer(state = {user: {}, loggedIn: false}, action) {
  let idx;
  switch (action.type) {
    case "LOGIN_USER":
      return {
        user: action.user,
        loggedIn: true
      };
    case "LOGOUT_USER":
      return {
        user: null,
        loggedIn: false
      };
    default:
      return state;
  }
}
