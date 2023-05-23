import './App.css';
import Movies from './components/SearchMovies';
import { useMovies } from './hooks/UseMovies';
import { useEffect, useRef, useState } from 'react';

//!validations
function useSearch() {
  const [search, updateSearch] = useState('');
  const [error, setError] = useState(null);
  //flag: is the first time the user would use the input?
  const isFirstInput = useRef(true);
  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === '';
      return;
    }
    if (search === '') {
      setError(`you cannot search for an empty movie`);
      return;
    }
    if (search.length < 2) {
      setError(`search must have at least two characters`);
      return;
    }
    setError(null);
  }, [search]);

  return { search, updateSearch, error };
}

function App() {
  const [sort, setSort] = useState(false);
  const { search, updateSearch, error } = useSearch();
  const { movies, getMovies, loading } = useMovies({ search, sort });

  //if we have more than one input for example, we can retrieve all the data at once:
  // const fields = new window.FormData(event.target);
  // const query = fields.get('query');
  // <input name='query', ...>
  //with several inputs:
  // const fields =  Object.fromEntries(new window.FormData(event.target));
  const handleSubmit = (event) => {
    event.preventDefault();
    //recover DOM element and save
    getMovies();
  };

  const handleSort = () => {
    //active - inactive
    setSort(!sort);
  };

  const handleChange = (event) => {
    //check that we use the last value, not prev
    updateSearch(event.target.value);
  };

  return (
    <div className='page'>
      <header>
        <h1>Movie`s browser</h1>
        <form onSubmit={handleSubmit} className='form'>
          <input
            onChange={handleChange}
            value={search}
            name='query'
            placeholder='Harry Potter, X-Men, Avengers...'
            style={{
              border: '1px solid transparent',
              borderColor: error ? 'red' : 'transparent',
            }}
          />
          <label htmlFor=''>Sort</label>
          <input
            className='check'
            type='checkbox'
            onChange={handleSort}
            check={sort}
          />
          <button type='submit'>Search</button>
        </form>
        {error && (
          <p className='error' style={{ color: 'red' }}>
            {error}
          </p>
        )}
      </header>

      <main>{loading ? <p>Loading...</p> : <Movies movies={movies} />}</main>
    </div>
  );
}

export default App;
