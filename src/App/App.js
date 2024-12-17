import { useState, useEffect } from 'react';
import Header from '../Header/Header';
import MoviesContainer from '../MoviesContainer/MoviesContainer';
import MovieDetails from '../MovieDetails/MovieDetails'
import moviePosters from '../data/movie_posters';


import './App.css';
import searchIcon from '../icons/search.png';

// Example imports (for later):
// import moviePosters from '../data/movie_posters';
import movieDetails from '../data/movie_details';

function App() {
  const [posters, setPosters] = useState([]);
  const [movies, setMovies] = useState(moviePosters);
  const [chosenMovie, setChosenMovie] = useState(null);

  function selectMovie(movieId) {
    fetch(`https://rancid-tomatillos-api.onrender.com/api/v1/movies/${movieId}`)
      .then(response => response.json())
      .then(data => setChosenMovie(data)
        
      )
      .catch((error) => console.error("Error fetching movie details:", error));
  }

  function goBack() {
    setChosenMovie(null)
  }
  
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
      {chosenMovie && (
       
        <Header />
      )}
     {chosenMovie ? (
        <MovieDetails details={chosenMovie} goBack={goBack}/>
      ) :(
        <>
          < Header />
          <MoviesContainer posters={ posters } selectMovie={selectMovie} changeVote = { changeVote } />
        </>
      ) }
  
    </main>
  );
}

export default App;
