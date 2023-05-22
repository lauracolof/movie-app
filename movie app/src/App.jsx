import './App.css';
import Movies from './components/SearchMovies';
import { useMovies } from './hooks/UseMovies';
import { useEffect, useState } from 'react';

function useSearch() {
  const [search, updateSearch] = useState('');
  const [error, setError] = useState(null);
  useEffect(() => {
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
  const { movies } = useMovies();
  const { search, updateSearch, error } = useSearch();
  //if we have more than one input for example, we can retrieve all the data at once:
  // const fields = new window.FormData(event.target);
  // const query = fields.get('query');
  // <input name='query', ...>
  //with several inputs:
  // const fields =  Object.fromEntries(new window.FormData(event.target));
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ query });
    //recover DOM element and save
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
            placeholder='Harry Potter, X-Men, ...'
            style={{
              border: '1px solid transparent',
              borderColor: error ? 'red' : 'transparent',
            }}
          />
          <button type='submit'>Search</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </header>

      <main>
        <ul>
          <Movies movies={movies} />
        </ul>
      </main>
    </div>
  );
}

export default App;
