import { combineReducers } from 'redux';
import { createReducer } from '../common/redux.helpers';
import {
  GET_TOP_MOVIES_PENDING,
  GET_TOP_MOVIES_SUCCESS,
  GET_TOP_MOVIES_ERROR,
  SEARCH_MOVIES_PENDING,
  SEARCH_MOVIES_SUCCESS,
  SEARCH_MOVIES_ERROR,
  GET_MOVIE_DETAILS_PENDING,
  GET_MOVIE_DETAILS_SUCCESS,
  GET_MOVIE_DETAILS_ERROR,
} from '../../constants';

const movieModalReducer = createReducer({ isOpen: false }, {

});

const initialStateMovies = {
  isPending: false,
  topMovies: [],
  error: ''
}

const topMoviesReducer = (state=initialStateMovies, action = {}) => {
  switch (action.type) {
    case GET_TOP_MOVIES_PENDING:
      return Object.assign({}, state, { isPending: true });
    case GET_TOP_MOVIES_SUCCESS:
      return Object.assign({}, state, { movies: action.payload, isPending: false });
    case GET_TOP_MOVIES_ERROR:
      return Object.assign({}, state, { error: action.payload, isPending: false });
    default:
      return state;
  }
}

const movieBrowserReducer = combineReducers({
  movieModal: movieModalReducer,
  topMovies: topMoviesReducer
});

export default movieBrowserReducer;