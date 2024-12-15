import React from 'react';
import MoviePoster from '../MoviePoster/MoviePoster';
import './MoviesContainer.css';

function MoviesContainer({ posters, changeVote }) {

  const posterData = posters.map(poster => {
    return (
      <MoviePoster
        id={poster.id}
        poster_path={poster.poster_path}
        title={poster.title}
        vote_count={poster.vote_count}
        key={poster.id}
        changeVote={changeVote}
      />
    )
  })

  return (
      <section className='MoviesContainer'>
        { posterData }
      </section>
  );
}
  
export default MoviesContainer;