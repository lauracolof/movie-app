export function ListOfMovies({ movies }) {
  return (
    <div>
      {hasMovies ? (
        <ul>
          {movies.map((movie) => {
            <li key={movie.imdbID}>
              <h2>{movie.Title}</h2>
              <p>{movie.Year}</p>
              <img src={movie.Poster} alt={movie.Title} />
            </li>;
          })}
        </ul>
      ) : (
        <p>No movies were found</p>
      )}
    </div>
  );
}
