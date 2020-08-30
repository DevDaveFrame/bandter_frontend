export function setUser () {
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
    .then(data => dispatch({type: 'SET_USER', data}))
  } 
};

export function loginUser(login){
  return (dispatch) => {
    dispatch({type: 'START_LOGGING_IN'});
    let request = {
      method: "POST",
      headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
      },
      body: JSON.stringify(login)
    }
    fetch(`http://localhost:3000/api/v1/login`, request)
    .then(r => r.json())
    .then(data => dispatch({type: 'LOGIN_USER', data}))
  }
}

export function logoutUser() {
  return {
    type: 'LOGOUT_USER',
  }
};