import React from 'react';
import MoviePoster from '../MoviePoster/MoviePoster';
import './MoviesContainer.css';

function MoviesContainer({ posters }) {

  const posterData = posters.map(poster => {
    return (
      <MoviePoster
        id={poster.id}
        poster_path={poster.poster_path}
        title={poster.title}
        vote_count={poster.vote_count}
        key={poster.id}
      />
    )
  })

  return (
      <section className='MoviesContainer'>
        <p>We'll make some movie posters show up here!</p>
        { posterData }
      </section>
  );
}
  
export default MoviesContainer;