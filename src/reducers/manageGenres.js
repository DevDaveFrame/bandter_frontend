export default function genreReducer(state = [], action) {
  switch (action.type) {
    case 'CACHE_GENRES':
      return [...action.genres];
    default:
      return state;
  }
}