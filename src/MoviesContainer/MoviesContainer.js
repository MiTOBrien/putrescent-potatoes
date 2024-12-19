import React from 'react';
import { Link } from 'react-router-dom';
import MoviePoster from '../MoviePoster/MoviePoster';
import './MoviesContainer.css';

function MoviesContainer({ posters, changeVote }) {

  const posterData = posters.map((poster) => {
    return (
      <>
        <Link 
        to={`/${poster.id}`} 
        key={poster.id} 
        className="movie-link"
      >
          <MoviePoster
            id={poster.id}
            poster_path={poster.poster_path}
            title={poster.title}
            vote_count={poster.vote_count}
            key={poster.id}
            changeVote={changeVote}
            movieDetails={poster}
            />
        </Link>
      </>
    )
  })

  return (
      <section className='MoviesContainer'>
        { posterData }
      </section>
  );
}
  
export default MoviesContainer;