import { useRef, useState, useMemo, useCallback } from 'react';
import { searchMovies } from '../services/movies.js';

//black box to iterate the contract to fetching the data
export function useMovies({ search, sort }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [, setError] = useState(null);
  const previousSearch = useRef(search);

  //usememo is used to store a value or recalculate a value when dependencies change. alternative useCallback (only functions)
  const getMovies = useCallback(async ({ search }) => {
    //if we inject search by param, depends of value not by dependency helps to prevent performance problems
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
  }, []);

  const sortMovies = useMemo(() => {
    return sort
      ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
      : movies;
    //!only render when dependencies (movies or sort) change
  }, [sort, movies]);
  // !Bad option
  // const sortMovies = sort
  //   ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
  //   : movies;

  return { movies: sortMovies, getMovies, loading };
}
