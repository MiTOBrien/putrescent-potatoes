import { useState, useEffect } from 'react';
import Header from '../Header/Header';
import MoviesContainer from '../MoviesContainer/MoviesContainer';
import moviePosters from '../data/movie_posters';
import './App.css';
import searchIcon from '../icons/search.png';

// Example imports (for later):
// import movieDetails from '../data/movie_details';

function App() {
  const [posters, setPosters] = useState(moviePosters);

  return (
    <main className='App'>
      <Header />
      <MoviesContainer posters={ posters } />
    </main>
  );
}

export default App;
