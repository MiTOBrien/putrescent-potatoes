import React from 'react';
import downvote from "../icons/downvote.png";
import upvote from "../icons/upvote.png";
import './MoviePoster.css';

function MoviePoster({ poster_path, vote_count, changeVote, id, selectMovie, movieDetails }) {
  
  const handleClick =() => {
    selectMovie(movieDetails);
  }
  return (
    <section className='MoviePoster' onClick={handleClick}>
      <img src={ poster_path } />
      <p><span>
        <button onClick={() => changeVote(id, {vote_direction: "down"})}>
          <img src={ downvote } alt="Downvote Movie"/>
        </button></span>{ vote_count }<span>
        <button onClick={() => changeVote(id, {vote_direction: "up"})}>
          <img src={ upvote } alt="Upvote Movie" />
        </button></span></p>
    </section>
  );
}

export default MoviePoster;