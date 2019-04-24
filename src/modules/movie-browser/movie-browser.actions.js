import { apiTopMovies, apiSearchMovies, apiMovieDetails } from './movie-browser.services';
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


export const getTopMovies = (page) => (dispatch) => {
  dispatch({ type: GET_TOP_MOVIES_PENDING });
  apiTopMovies({page})
    .then(response => response.json())
    .then(data => dispatch({ type: GET_TOP_MOVIES_SUCCESS, payload: data}))
    .catch(error => dispatch({ type: GET_TOP_MOVIES_ERROR, payload: error}));
}