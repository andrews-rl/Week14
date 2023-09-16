import React from 'react';
import Movie from './Movie';

const MovieList = ({ movies, addReviewToMovie }) => {
  return (
    <div className="movie-list">
      {movies.map(movie => (
        <Movie key={movie.id} movie={movie} addReviewToMovie={addReviewToMovie} />
      ))}
    </div>
  );
};

export default MovieList;





