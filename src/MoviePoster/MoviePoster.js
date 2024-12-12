import React from 'react';
import downvote from "../icons/downvote.png";
import upvote from "../icons/upvote.png";
import './MoviePoster.css';

function MoviePoster({ poster_path, vote_count }) {
  return (
    <section className='MoviePoster'>
      <img src={ poster_path } />
      <p><span><button><img src={ downvote } alt="Downvote Movie"/></button></span>{ vote_count }<span><button><img src={ upvote } alt="Upvote Movie" /></button></span></p>
    </section>
  );
}

export default MoviePoster;