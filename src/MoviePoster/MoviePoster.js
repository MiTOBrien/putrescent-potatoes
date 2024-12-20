import React from 'react';
import downvote from "../icons/downvote.png";
import upvote from "../icons/upvote.png";
import './MoviePoster.css';

function MoviePoster({ poster_path, vote_count, changeVote, id}) {
  const upVoteMovie = (event) => {
    event.stopPropagation();
    changeVote(id, { vote: 'upvote' });
  };

  const downVoteMovie = (event) => {
    event.stopPropagation();
    changeVote(id, { vote: 'downvote' });
  };

  return (
    <section className='MoviePoster' >
        <img src={poster_path} alt="Movie Poster" onClick={(event) => {
            event.stopPropagation();
            
          }} />
        <p><span>
        <button onClick={downVoteMovie}>
          <img src={ downvote } alt="Downvote Movie"/>
        </button></span>{ vote_count }<span>
        <button onClick={upVoteMovie}>
          <img src={ upvote } alt="Upvote Movie" />
        </button></span></p>
    </section>
  );
}

export default MoviePoster;