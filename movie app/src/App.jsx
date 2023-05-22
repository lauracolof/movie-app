import './App.css';
import Movies from './components/SearchMovies';
import { useMovies } from './hooks/UseMovies';
import { useEffect, useRef, useState } from 'react';
// import { Movies } from './components/Movies';

function App() {
  const { movies } = useMovies();
  const [query, setQuery] = useState('');
  const [error, setError] = useState(null);

  // we can recover all the data with an event in a form, if we have more than 1 input, with the name. For example:
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
    const newQuery = event.target.value;
    if (newQuery.startsWith(' ')) return;
    setQuery(newQuery);
    if (newQuery === '') {
      setError(`you cannot search for an empty movie`);
      return;
    }
    if (newQuery.length < 2) {
      setError(`search must have at least two characters`);
      return;
    }
    setError(null);
  };

  return (
    <div className='page'>
      <header>
        <h1>Movie`s browser</h1>
        <form onSubmit={handleSubmit} className='form'>
          <input
            onChange={handleChange}
            value={query}
            name='query'
            placeholder='Harry Potter, X-Men, ...'
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
