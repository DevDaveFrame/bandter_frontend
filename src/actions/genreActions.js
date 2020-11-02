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
    .then(genres => dispatch({type: 'CACHE_GENRES', genres}))
  } 
};