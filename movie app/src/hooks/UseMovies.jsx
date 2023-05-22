import responseMovies from '../mocks/result-movies.json';

export function useMovies() {
  const movies = responseMovies.Search;

  const mappedMovies = movies?.map((movie) => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.year,
    poster: movie.Poster,
  }));

  return { movies: mappedMovies };
}
