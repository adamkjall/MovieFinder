const IMAGE_BASE_URL = (width = 300) => `https://image.tmdb.org/t/p/w${width}`;

export const updateMoviePictureUrls = (movie, width = 300) => ({
  ...movie,
  backdrop_path: `${IMAGE_BASE_URL(width)}${movie.backdrop_path}`,
  poster_path: `${IMAGE_BASE_URL(width)}${movie.poster_path}`
});

export const getMovieList = (movieList) => {
  return movieList.length ? (
    movieList.map(movie => updateMoviePictureUrls(movie))
  ) : [];
}
