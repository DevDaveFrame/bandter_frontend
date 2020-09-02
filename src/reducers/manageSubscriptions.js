export default function subscriptionsReducer(state = {}, action) {
  // let idx;
  switch (action.type) {
    case "SUBSCRIBE":
      return {
        ...state,
        [action.match]: action.subscription
      };
    case "LOGOUT_USER":
      Object.keys(state).forEach(key => state[key].unsubscribe());
      return {};
    default:
      return state;
  }
}