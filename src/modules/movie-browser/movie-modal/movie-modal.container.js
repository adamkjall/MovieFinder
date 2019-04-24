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
    backgroundImage: `linear-gradient(rgba(0, 0, 0, .6),
                      rgba(0, 0, 0, .6), url(${backgroundUrl}))`,
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
}

