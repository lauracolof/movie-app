import { useRef, useState } from 'react';
import { searchMovies } from '../services/movies.js';

//black box to iterate the contract to fetching the data
export function useMovies({ search }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [, setError] = useState(null);
  const previousSearch = useRef(search);

  const getMovies = async () => {
    if (search === previousSearch.current) return;

    try {
      setLoading(true);
      setError(null);
      previousSearch.current = search;
      const newMovies = await searchMovies({ search });
      setMovies(newMovies);
    } catch (error) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  return { movies, getMovies, loading };
}
