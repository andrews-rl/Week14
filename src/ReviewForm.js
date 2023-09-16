import React, { useState } from 'react';

const ReviewForm = ({ movieId, addReviewToMovie }) => {
  const [reviewText, setReviewText] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    // Check if the review text is not empty
    if (reviewText.trim() === '') {
      return;
    }

    const review = {
      id: Date.now(), // Unique ID (for simplicity, you can use a library like uuid)
      text: reviewText,
      rating: 0, // You can add a rating input to the form if needed
    };

    // Call the function to add the review to the movie
    addReviewToMovie(movieId, review);

    // Reset the review text input
    setReviewText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={reviewText}
        onChange={e => setReviewText(e.target.value)}
        placeholder="Leave a review"
      />
      <button type="submit">Submit Review</button>
    </form>
  );
};

export default ReviewForm;

