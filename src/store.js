import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import movieBrowserReducer from './modules/movie-browser/movie-browser.reducer';

// The root reducer will serve as the parent for all the other reducers.
// Add module reducers to the root level here
const rootReducer = combineReducers({
  movieBrowser: movieBrowserReducer
});

// Logs information about dispatched actions to the console
const loggerMiddleware = createLogger();

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, loggerMiddleware));

export default store;