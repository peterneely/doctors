import React from 'react';

import Doctor from './Doctor';
import Review from './Review';

const handleEditReview = goToDetail => review => {
  goToDetail(`/reviews/${review.id}`);
};

const EditReview = () => (
  <Doctor>
    {({ contentHeight, goToDetail, reviewsById }) => (
      <Review
        contentHeight={contentHeight}
        onEditReview={handleEditReview(goToDetail)}
        reviewsById={reviewsById}
      />
    )}
  </Doctor>
);

export default EditReview;
