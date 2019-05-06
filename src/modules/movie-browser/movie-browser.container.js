import React from 'react';
import { connect } from 'react-redux';
import { Container, Row } from 'react-bootstrap';
import SearchAppBar from './movie-appBar/movie-appBar.component';
import * as movieActions from './movie-browser.actions';
import { getMovieList } from './movie-browser.helpers';
import MovieList from './movie-list/movie-list.component';
import * as scrollHelpers from '../common/scroll.helpers'
import MovieModal from './movie-modal/movie-modal.container';

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
    console.log(this.props)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    const { topMovies } = this.props;
    if (!topMovies.isPending) {
      let percentageScrolled = scrollHelpers.getScollDownPercentage(window);
      if (percentageScrolled > 0.8) {
        const nextPage = this.state.currentPage + 1;
        this.props.getTopMovies(nextPage);
        this.setState({ currentPage: nextPage })
      }
    }
  }

  render() {
    const { topMovies } = this.props;
    const movies = getMovieList(topMovies.movies);
    
    return (
      <div>
        <SearchAppBar />
        <Container>
          <Row>
            <p>Search will go here</p>
          </Row>
          <Row>
            <MovieList movies={movies} isLoading={topMovies.isPending} />
          </Row>
        </Container>
        <MovieModal />
      </div>
    );
  }
}

export default connect(
  // Map nodes in our state to a properties of our component
  (state) => ({
    topMovies: state.movieBrowser.topMovies,
  }),
   // Map action creators to properties of our component
  { ...movieActions }
)(MovieBrowser);