export default function instrumentsReducer(state = [], action) {
  switch (action.type) {
    case 'CACHE_INSTRUMENTS':
      return [...state, ...action.instruments];
    default:
      return state;
  }
}