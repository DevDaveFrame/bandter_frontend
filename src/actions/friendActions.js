export const getProfile = (id) => {
  return (dispatch) => {
    let request = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.token}`
      }
    }
    fetch(`https://bandter-backend.heroku.com/api/v1/users/${id}`, request)
    .then(r => r.json())
    .then(data => dispatch({type: "DISPLAY_FRIEND", data}))
  }
}