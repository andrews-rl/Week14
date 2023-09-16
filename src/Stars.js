import React from 'react';

const Stars = ({ rating, onRatingChange }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <span
        key={i}
        onClick={() => onRatingChange(i)}
        className={i <= rating ? 'active' : ''}
      >
        &#9733;
      </span>
    );
  }

  return <div className="star-rating">{stars}</div>;
};

export default Stars;
