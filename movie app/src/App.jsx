import './App.css';
import { useRef } from 'react';
import { Movies } from './components/Movies';
import { useMovies } from './hooks/useMovies';

function App() {
  const movies = MoviesResults.Search;
  const hasMovies = movies?.length > 0;
  // const { movies } = useMovies();
  const inputRef = useRef();

  const handleSubmit = () => {
    event.preventDefault();
    const inputElem = inputRef.current;
    const value = inputElem.value;
    console.log(value);
  };

  return (
    <div className='page'>
      <header>
        <h1>Movie`s browser</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input ref={inputRef} placeholder='Harry Potter, X-Men, ...' />
          <button type='submit'>Search</button>
        </form>
      </header>

      <main>
        <Movies movies={movies} />
      </main>
    </div>
  );
}

export default App;
