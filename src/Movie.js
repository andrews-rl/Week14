import React from 'react';
import ReviewList from './ReviewList';
import ReviewForm from './ReviewForm';
import Stars from './Stars';

const Movie = ({ movie, addReviewToMovie }) => {
  return (
    <div className="movie">
      <h2>{movie.title}</h2>
      <img src={movie.image} alt={movie.title} />
      <p>{movie.synopsis}</p>
      <Stars rating={movie.rating} />
      <ReviewList reviews={movie.reviews} />
      {/* Pass addReviewToMovie function to ReviewForm */}
      <ReviewForm movieId={movie.id} addReviewToMovie={addReviewToMovie} />
    </div>
  );
};

export default Movie;
