import { useState, useEffect } from 'react';
import Header from '../Header/Header';
import MoviesContainer from '../MoviesContainer/MoviesContainer';
import './App.css';
import searchIcon from '../icons/search.png';

// Example imports (for later):
// import moviePosters from '../data/movie_posters';
// import movieDetails from '../data/movie_details';

function App() {
  const [posters, setPosters] = useState([]);
  
  useEffect(() => {
    loadPosters()
  }, [])

  function loadPosters() {
    fetch("https://rancid-tomatillos-api.onrender.com/api/v1/movies")
      .then(response => response.json())
      .then(data => setPosters(data))
      .catch(error => console.log(error))
  }

  const changeVote = (id, vote) => {
    fetch(`https://rancid-tomatillos-api.onrender.com/api/v1/movies/${id}`, {
      method: "PATCH",
      body: JSON.stringify(vote),
      headers: {
        "Content-Type": "application/json"
      },
    })
    .then(response => response.json())
    .then(posterToUpdate => {
      const updatedPosters = posters.map((poster) =>
      poster.id === posterToUpdate.id ? posterToUpdate : poster
    );
    setPosters(updatedPosters)
    })
    .catch(error => console.log(error))
  };

  return (
    <main className='App'>
      <Header />
      <MoviesContainer posters={ posters } changeVote = { changeVote } />
    </main>
  );
}

export default App;
