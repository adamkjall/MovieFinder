import { keys } from './movie-modal.actions';

const initialStateModal = {
  isOpen: false,
  movieId: ''
}

const movieModalReducer = (state = initialStateModal, action = {}) => {
  switch (action.type) {
    case keys.OPEN_MOVIE_MODAL:
      return Object.assign({}, state, { isOpen: true, movieId: action.movieId });
    case keys.CLOSE_MOVIE_MODAL:
      return Object.assign({}, state, { isOpen: false });
    default:
      return state;
  }
}

export default movieModalReducer;