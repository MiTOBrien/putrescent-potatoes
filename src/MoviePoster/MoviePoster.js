import React from 'react';
import './MoviePoster.css';

function MoviePoster({ poster_path, vote_count }) {
  return (
    <section className='MoviePoster'>
      <img src={ poster_path } />
      <p>{ vote_count }</p>
    </section>
  );
}

export default MoviePoster;