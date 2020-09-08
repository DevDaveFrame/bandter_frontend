export const getProfile = (id) => {
  console.log("HITTING IT")
  return (dispatch) => {
    let request = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.token}`
      }
    }
    fetch(`http://localhost:3000/api/v1/users/${id}`, request)
    .then(r => r.json())
    .then(data => dispatch({type: "DISPLAY_FRIEND", data}))
  }
}