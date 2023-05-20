// import { useState } from 'react';
import './App.css';

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

      <main>Aqui irían las peliculas</main>
    </div>
  );
}

export default App;
