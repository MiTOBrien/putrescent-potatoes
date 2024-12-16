import './MovieDetails.css';
import movieDetails from '../data/movie_details';

function MovieDetails() {
  const {
    title,
    overview,
    release_date,
    genre_ids,
    backdrop_path,
    original_language
  } = movieDetails; 
  return (
    <section className='MovieDetails'>
      <h2>{title}</h2>
      <p>Overview: {overview}</p>
      <p>Release Date: {release_date}</p>
      <p>Language: {original_language}</p>
      <p>Genres: {genre_ids.join(', ')}</p>
      <img src={backdrop_path} alt={`${title} backdrop`} />
    </section>
  );
}

export default MovieDetails;