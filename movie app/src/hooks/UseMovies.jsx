import { useRef, useState, useMemo } from 'react';
import { searchMovies } from '../services/movies.js';

//black box to iterate the contract to fetching the data
export function useMovies({ search, sort }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const previousSearch = useRef(search);

  const getMovies = async () => {
    if (search === previousSearch.current) return;

    try {
      setLoading(true);
      setError(null);
      //with out next line dont work
      previousSearch.current = search;
      const newMovies = await searchMovies({ search });
      setMovies(newMovies);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  // const sortMovies = sort
  //   ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
  //   : movies;

  const sortMovies = useMemo(() => {
    return sort
      ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
      : movies;
    //!only render when movies or sort (dependencies) change
  }, [sort, movies]);

  return { movies: sortMovies, getMovies, loading };
}
