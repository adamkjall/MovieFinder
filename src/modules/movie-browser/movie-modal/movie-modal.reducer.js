import { keys } from './movie-modal.actions';

const initialStateModal = {
  isOpen: false
}

const movieModalReducer = (state = initialStateModal, action = {}) => {
  switch (action.type) {
    case keys.OPEN_MOVIE_MODAL:
      return Object.assign({}, state, { isOpen: true });
    case keys.CLOSE_MOVIE_MODEL:
      return Object.assign({}, state, { isOpen: false });
      default:
      return state;
  }
}

export default movieModalReducer;