import React from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import { AppBar } from 'material-ui';
import { getTopMovies } from './movie-browser.actions';
import { getMovieList } from './movie-browser.helpers';
import MovieList from './movie-list/movie-list.component';

class MovieBrowser extends React.Component {

  componentDidMount() {
    this.props.getTopMovies(1);
  }

  render() {
    const { topMovies } = this.props;
    const movies = getMovieList(topMovies.movies);
    return (
      <div>
        <AppBar title='Movie Browser' />
        <Container>
          <Row>
            <p>Search will go here</p>

          </Row>
          <Row>
            <MovieList movies={movies} />
          </Row>
        </Container>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    topMovies: state.movieBrowser.topMovies,
  }),
  { getTopMovies }
)(MovieBrowser);