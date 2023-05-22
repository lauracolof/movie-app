function ListOfMovies({ movies }) {
  return (
    <ul className='movies'>
      {movies.map((movie) => (
        <li className='movie' key={movie.id}>
          <h3>Title: {movie.title}</h3>
          <img src={movie.poster} alt={movie.title} />
          <p>Year: {movie.year}</p>
        </li>
      ))}
    </ul>
  );
}

function NoMoviesResults() {
  return <p>No movies were found</p>;
}

export function Movies({ movies }) {
  const hasMovies = movies?.length > 0;
  return hasMovies ? <ListOfMovies movies={movies} /> : <NoMoviesResults />;
}

export default ListOfMovies;
