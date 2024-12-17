import './MovieDetails.css';

function MovieDetails({ details, goBack }) {
  const {
    title,
    overview,
    release_date,
    genre_ids,
    backdrop_path,
    original_language
  } = details;

  return (
    <section className='MovieDetails'>
      <button onClick={goBack} className="go-back-button">Go Back</button>
      <h2>{title}</h2>
      <p>Overview: {overview}</p>
      <p>Release Date: {release_date}</p>
      <p>Language: {original_language}</p>
      {genre_ids && <p>Genres: {genre_ids.join(', ')}</p>}
      <img src={backdrop_path} alt={`${title} backdrop`} />
    </section>
  );
}

export default MovieDetails;