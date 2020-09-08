export default function friendsReducer(state = {friends: [], pending:[], requests:[]}, action) {
  let friends;
  let pending;
  let requests;
  switch (action.type) {
    case 'LOGIN_USER':
      requests = action.data.user.data.attributes.friend_requests
      friends = action.data.user.data.attributes.friends
      pending = action.data.user.data.attributes.pending_requests
      return {...state, friends, pending, requests};
    case 'SET_USER':
      requests = action.data.user.data.attributes.friend_requests
      friends = action.data.user.data.attributes.friends
      pending = action.data.user.data.attributes.pending_requests
      return {...state, friends, pending, requests};
    case "LOGOUT_USER":
      return [];
    default:
      return state; 
  }
}