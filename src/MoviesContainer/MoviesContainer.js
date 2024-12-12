import React from 'react';
import MoviePoster from '../MoviePoster/MoviePoster';
import './MoviesContainer.css';

function MoviesContainer() {

  return (
      <section className='MoviesContainer'>
        <p>We'll make some movie posters show up here!</p>
        <MoviePoster />
      </section>
  );
}
  
export default MoviesContainer;