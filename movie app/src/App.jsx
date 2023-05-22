import './App.css';
import ListOfMovies from './components/SearchMovies';
// import { useRef } from 'react';
// import { Movies } from './components/Movies';
// import { useMovies } from './hooks/useMovies';

function App() {
  return (
    <div className='page'>
      <header>
        <h1>Movie`s browser</h1>
        <form className='form'>
          <input placeholder='Harry Potter, X-Men, ...' />
          <button type='submit'>Search</button>
        </form>
      </header>

      <main>
        <ul>
          <ListOfMovies />
        </ul>
      </main>
    </div>
  );
}

export default App;
