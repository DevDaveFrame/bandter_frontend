export default function friendsReducer(state = {current:{}}, action) {
  let user;
  let songs;
  switch (action.type) {
  case 'DISPLAY_FRIEND':
    user = action.data.user.data.attributes
    songs = action.data.user.included.filter(included => included.type === "song");
    return {
      current: {...user, songs:[...songs]}
    }
    default:
      return state; 
  }
}