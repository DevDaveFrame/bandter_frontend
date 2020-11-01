export function fetchGenres () {
  return (dispatch) => {
    let request = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    }
    fetch(`https://bandter-backend.heroku.com/api/v1/genres`, request)
    .then(r => r.json())
    .then(genres => dispatch({type: 'CACHE_GENRES', genres}))
  } 
};