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
    .catch(() => dispatch({type: 'LOGOUT_USER'}))
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
    .then(data => dispatch(
      {type: 'LOGIN_USER', data}
      )
    )
  }
}

export function updateUser(data) {
  return {
    type: "UPDATE_USER",
    user: data.user.data.attributes
  }
}

export function addSong (song) {
  return {
    type: "ADD_SONG",
    song: song
  }
}

export function updateInstrument(user, instruments) {
  return (dispatch) => {
    let request = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.token}` 
      },
      body: JSON.stringify({user_instrument: {user_id: user.id, instruments:[...instruments]}})
    }
    fetch(`http://localhost:3000/api/v1/users/${user.id}`, request)
    .then(r => r.json())
    .then(user => dispatch({type: "UPDATE_USER", user}))
    .catch(console.log)
  }
}

export function updateGenre(user, genres) {
  return (dispatch) => {
    let request = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.token}` 
      },
      body: JSON.stringify({user_genre: {user_id: user.id, genres: [...genres]}})
    }
    fetch(`http://localhost:3000/api/v1/users/${user.id}`, request)
    .then(r => r.json())
    .then(user => dispatch({type: "UPDATE_USER", user}))
    .catch(console.log)
  }
}

export function logoutUser() {
  return {
    type: 'LOGOUT_USER',
  }
};