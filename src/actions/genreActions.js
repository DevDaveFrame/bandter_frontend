export function fetchGenres () {
  return (dispatch) => {
    let request = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    }
    fetch(`http://localhost:3000/api/v1/genres`, request)
    .then(r => r.json())
    .then(data => dispatch({type: 'SET_USER', data}))
    .catch(() => dispatch({type: 'LOGOUT_USER'}))
  } 
};