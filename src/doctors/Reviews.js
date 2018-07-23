import React from 'react';

import Doctor from './Doctor';
import ReviewListItems from './ReviewListItems';

const handleEditReview = goToDetail => review => {
  goToDetail(`/reviews/${review.id}`);
};

const Reviews = () => (
  <Doctor>
    {({ contentHeight, goToDetail, reviewsById }) => (
      <ReviewListItems
        contentHeight={contentHeight}
        onEditReview={handleEditReview(goToDetail)}
        reviewsById={reviewsById}
      />
    )}
  </Doctor>
);

export default Reviews;
