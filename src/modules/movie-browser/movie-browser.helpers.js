const IMAGE_BASE_URL = (width = 300) => `https://image.tmdb.org/t/p/w${width}`;

const updateMoviePictureUrls = (movieResult, width = 300) => ({
  ...movieResult,
  backdrop_path: `${IMAGE_BASE_URL(width)}${movieResult.backdrop_path}`,
  poster_path: `${IMAGE_BASE_URL(width)}${movieResult.poster_path}`
});

export const getMovieList = (movieList) => {
  return movieList.length ? (
    movieList.map(movieResult => updateMoviePictureUrls(movieResult))
  ) : [];
}