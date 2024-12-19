import './MovieDetails.css';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

function MovieDetails() {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    fetch(`https://rancid-tomatillos-api.onrender.com/api/v1/movies/${id}`)
      .then(response => response.json())
      .then(data => setMovieDetails(data))
      .catch((error) => console.error("Error fetching movie details:", error));
  }, [id]);

  if (!movieDetails) {
    return <p>Loading movie details...</p>;
  }

  const {
    title,
    overview,
    release_date,
    genre_ids,
    backdrop_path,
    original_language,
  } = movieDetails;

  return (
    <section className='MovieDetails'>
      <h2>{title}</h2>
      <p>Overview: {overview}</p>
      <p>Release Date: {release_date}</p>
      <p>Language: {original_language}</p>
      {genre_ids && <p>Genres: {genre_ids.join(', ')}</p>}
      {backdrop_path && (
        <img
          src={backdrop_path}
          alt={`${title} backdrop`}
        />
      )}
    </section>
  );
}

export default MovieDetails;