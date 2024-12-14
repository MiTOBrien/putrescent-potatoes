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

  const downVote = (id) => {
    const updatePoster  = posters.map((poster) => {
      if (poster.id === id) {
        return {...poster, vote_count: poster.vote_count -= 1};
      }
      return poster;
    })
    setPosters(updatePoster);
  };

  const upVote = (id) => {
    const updatePoster = posters.map((poster) => {
      if (poster.id === id) {
        return {...poster, vote_count: poster.vote_count += 1}
      }
      return poster;
    })
    setPosters(updatePoster);
  };

  return (
    <main className='App'>
      <Header />
      <MoviesContainer posters={ posters } downVote={ downVote } upVote={ upVote } />
    </main>
  );
}

export default App;
