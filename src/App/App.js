import { useState, useEffect } from 'react';
import Header from '../Header/Header';
import MoviesContainer from '../MoviesContainer/MoviesContainer';
// import moviePosters from '../data/movie_posters';
import './App.css';
import searchIcon from '../icons/search.png';

// Example imports (for later):
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

  // const downVote = (id, vote) => {
  //   fetch(`https://rancid-tomatillos-api.onrender.com/api/v1/movies/${id}`, {
  //     method: "PATCH",
  //     body: JSON.stringify(vote),
  //     headers: {
  //       "Content-Type": "application/json"
  //     },
  //   })
  //   .then(response => response.json())
  //   .then(posterToUpdate => {
  //     const downvotedPoster = posters.map((poster) =>
  //     poster.id === posterToUpdate.id ? posterToUpdate : poster
  //   );
  //   setPosters(downvotedPoster)
  //   })
  //   .catch(error => console.log(error))
  // };

  // const upVote = (id) => {
  //   const updatePoster = posters.map((poster) => {
  //     if (poster.id === id) {
  //       return {...poster, vote_count: poster.vote_count += 1}
  //     }
  //     return poster;
  //   })
  //   setPosters(updatePoster);
  // };

  return (
    <main className='App'>
      <Header />
      <MoviesContainer posters={ posters } changeVote = { changeVote } />
    </main>
  );
}

export default App;
