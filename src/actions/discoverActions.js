export function beginSearch (formObj) {
  return (dispatch) => {
    let request = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.token}`
      },
      body: JSON.stringify(formObj)
    }
    fetch(`http://localhost:3000/api/v1/discover`, request)
    .then(r => r.json())
    .then(users => dispatch({type: 'LOAD_SEARCH', users}))
    .catch(console.log)
  } 
};

export function handleMatch(){
  return (dispatch) => {
    dispatch({type: 'START_LOGGING_IN'});
    let request = {
      method: "POST",
      headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
      },
      body: JSON.stringify()
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