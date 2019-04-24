import { combineReducers } from 'redux';
import movieModalReducer from './movie-modal/movie-modal.reducer';
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
} from './movie-browser.constants';


const initialStateMovies = {
  isPending: false,
  movies: [],
  error: ''
}

const topMoviesReducer = (state = initialStateMovies, action = {}) => {
  switch (action.type) {
    case GET_TOP_MOVIES_PENDING:
      return Object.assign({}, state, { isPending: true });
    case GET_TOP_MOVIES_SUCCESS:
      return Object.assign({}, state, { movies: [...state.movies, ...action.payload.results], isPending: false });
    case GET_TOP_MOVIES_ERROR:
      return Object.assign({}, state, { error: action.payload, isPending: false });
    default:
      return state;
  }
}

const searchMovieReducer = (state = initialStateMovies, action = {}) => {
  switch (action.type) {
    case SEARCH_MOVIES_PENDING:
      return Object.assign({}, state, { isPending: true });
    case SEARCH_MOVIES_SUCCESS:
      return Object.assign({}, state, { movies: action.payload, isPending: false });
    case SEARCH_MOVIES_ERROR:
      return Object.assign({}, state, { error: action.payload, isPending: false });
    default:
      return state;
  }
}

const movieDetailsReducer = (state = initialStateMovies, action = {}) => {
  switch (action.type) {
    case GET_MOVIE_DETAILS_PENDING:
      return Object.assign({}, state, { isPending: true });
    case GET_MOVIE_DETAILS_SUCCESS:
      return Object.assign({}, state, { movies: action.payload, isPending: false });
    case GET_MOVIE_DETAILS_ERROR:
      return Object.assign({}, state, { error: action.payload, isPending: false });
    default:
      return state;
  }
}

const movieBrowserReducer = combineReducers({
  movieModal: movieModalReducer,
  topMovies: topMoviesReducer,
  searchMovies: searchMovieReducer,
  movieDetails: movieDetailsReducer
});

export default movieBrowserReducer;