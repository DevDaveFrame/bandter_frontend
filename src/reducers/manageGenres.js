export default function genreReducer(state = [], action) {
  switch (action.type) {
    case 'CACHE_GENRES':
      action.genres)
      return [...action.genres];
    default:
      return state;
  }
}