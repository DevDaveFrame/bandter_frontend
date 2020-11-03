export function fetchInstruments () {
  return (dispatch) => {
    let request = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    }
    fetch(`https://bandter-backend.herokuapp.com/api/v1/instruments`, request)
    .then(r => r.json())
    .then(instruments => dispatch({type: 'CACHE_INSTRUMENTS', instruments}))
  } 
};