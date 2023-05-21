import resultMovies from '../mocks/result-movies.json';
// import noResult from '../mocks/no-results.json';

export function useMovies() {
  const movies = resultMovies.Search;

  const mappedMovies = movies?.length((movie) => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    poster: movie.Poster,
  }));

  return { movies: mappedMovies };
}