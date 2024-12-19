import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from '../Header/Header';
import MoviesContainer from '../MoviesContainer/MoviesContainer';
import MovieDetails from '../MovieDetails/MovieDetails'
import './App.css';
// import searchIcon from '../icons/search.png';

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
          < Header />
          <Routes>
            <Route path="/" element={ <MoviesContainer posters={ posters } changeVote = { changeVote } />} />
            <Route path="/:id" element={<MovieDetails />} />
          </Routes>
    </main>
  );
}

export default App;