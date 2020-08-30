export default function userReducer(state = {user: {}, loggedIn: false}, action) {
  let idx;
  switch (action.type) {
    case "LOGIN_USER":
    console.log(action)
    let user = action.user.user.data.attributes
    localStorage.token = action.user.token;
    localStorage.current = user.id
      return {
        user: action.user,
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
