export function loginUser () {
  return (dispatch) => {
    dispatch({type: 'START_LOGGING_IN'});
    let request = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.token}`
      }
    }
    fetch(`http://localhost:3000/api/v1/users/${localStorage.current}`, request)
    .then(r => r.json())
    .then(data => dispatch({type: 'LOGIN_USER', data}))
  } 
};

export function logoutUser() {
  return {
    type: 'LOGOUT_USER',
  }
};