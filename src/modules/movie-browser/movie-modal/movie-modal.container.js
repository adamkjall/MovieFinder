import React from 'react';
import { connect } from 'react-redux';
import { Dialog } from 'material-ui';
import _ from 'lodash';
import { closeMovieModal } from './movie-modal.actions';
import { getMovieDetails } from '../movie-browser.actions';
import * as movieHelpers from '../movie-browser.helpers';
import Loader from '../../common/loader.component';

const styles = {
  dialogContent: (backgroundUrl) => ({
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6),
                      rgba(0, 0, 0, 0.6)), url(${backgroundUrl})`,
    backgroundRepet: 'no-repeat',
    backgroundSize: '100%',
    minHeight: 400,
    color: 'white',
    padding: 10
  })
}

class MovieModalContainer extends React.Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.movieId && this.props.movieId !== nextProps.movieId) {
      nextProps.getMovieDetails(nextProps.movieId);
    }
  }

  render() {
    const { isOpen, closeMovieModal, isPending } = this.props;
    const movie = movieHelpers.updateMoviePictureUrls(this.props.movie);
    const genres = (movie && movie.genres) ? movie.genres.map(genre => genre.name).join(', ') : '';

    return (
      <Dialog
        autoScrollBodyContent={true}
        title={null}
        modal={false}
        open={isOpen}
        onRequestClose={closeMovieModal}
      >
        <Loader isLoading={isPending}>
          <div style={styles.dialogContent(movie.backdrop_path)}>
            <h1>{movie.title}</h1>
            <h5>{genres}</h5>
            <p>{movie.overview}</p>
            <p>Popularity: {movie.popularity}</p>
            <p>Budget: ${movie.budget}</p>
          </div>
        </Loader>
      </Dialog>
    );
  }
}
  // Connect movie modal container to the store
  export default connect(
  // Map nodes in our state to a properties list of our component
  (state) => ({
    // Using lodash get, recursively check that a property is defined
    // before try to access it - if it is undefined, it will return your default value
    // _.get(object, 'path.to.targets[0].neat.stuff', defaultValue)
    isOpen: _.get(state, 'movieBrowser.movieModal.isOpen', false),
    movieId: _.get(state, 'movieBrowser.movieModal.movieId'),
    movie: _.get(state, 'movieBrowser.movieDetails.movies', []),
    isLoading: _.get(state, 'movieBrowser.movieDetails.isLoading', false)
  }),
  // Map an action to a prop, ready to be dispatched
  { closeMovieModal, getMovieDetails }
)(MovieModalContainer);



