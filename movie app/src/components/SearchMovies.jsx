import responseMovies from '../mocks/result-movies.json';
import withoutMovies from '../mocks/no-results.json';

const ListOfMovies = () => {
  const movies = responseMovies.Search;
  const hasMovies = movies?.length > 0;

  return (
    <div>
      {hasMovies ? (
        <ul>
          {movies.map((movie) => (
            <li key={movie.imdbID}>
              <h3>Title: {movie.Title}</h3>
              <p>Year: {movie.Year}</p>
              <img src={movie.Poster} alt={movie.Title} />
            </li>
          ))}
        </ul>
      ) : (
        <p>No movies founded</p>
      )}
    </div>
  );
};

export default ListOfMovies;
