export const keys = {
  'OPEN_MOVIE_MODAL': 'OPEN_MOVIE_MODAL',
  'CLOSE_MOVIE_MODAL': 'CLOSE_MOVIE_MODAL'
}

export const openMovieModal = (movieId) => {
  return {
    type: keys.OPEN_MOVIE_MODAL,
    payload: movieId
  };
}

export const closeMovieModal = () => {
  return {
    type: keys.CLOSE_MOVIE_MODAL
  };
}