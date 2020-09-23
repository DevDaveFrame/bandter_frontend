export default function genreReducer(state = [], action) {
  switch (action.type) {
    case 'CACHE_GENRES':
      console.log(action.genres)
      return [...action.genres];
    default:
      return state;
  }
}