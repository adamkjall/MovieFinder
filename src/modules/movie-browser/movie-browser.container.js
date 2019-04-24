import React from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import { AppBar } from 'material-ui';
import { getTopMovies } from './movie-browser.actions';
import { getMovieList } from './movie-browser.helpers';
import MovieList from './movie-list/movie-list.component';
import * as scrollHelpers from '../common/scroll.helpers'

class MovieBrowser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1
    };
    // Binds the handleScroll to this class which 
    // provides access to MovieBrowser's props
    this.handleScroll = this.handleScroll.bind(this);
  }
  componentDidMount() {
    window.onscroll = this.handleScroll;
    this.props.getTopMovies(this.state.currentPage);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    const { topMovies } = this.props;
    let percentageScrolled = scrollHelpers.getScollDownPercentage(window);
    if (percentageScrolled > 0.8) {
      const nextPage = this.state.currentPage + 1;
      console.log('nextpage', nextPage)
      this.props.getTopMovies(nextPage);
      this.setState({currentPage: nextPage})
    }
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