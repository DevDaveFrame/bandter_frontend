export function beginSearch (formObj) {
  return (dispatch) => {
    dispatch({type: "START_SEARCH"});
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