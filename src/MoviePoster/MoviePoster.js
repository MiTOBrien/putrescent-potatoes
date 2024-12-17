import React from 'react';
import downvote from "../icons/downvote.png";
import upvote from "../icons/upvote.png";
import './MoviePoster.css';

function MoviePoster({ poster_path, vote_count, changeVote, id, selectMovie}) {
  
  const handleClick =() => {
    selectMovie(id);
  }
  return (
    <section className='MoviePoster' >
        <img src={poster_path} alt="Movie Poster" onClick={selectMovie} />      <p><span>
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