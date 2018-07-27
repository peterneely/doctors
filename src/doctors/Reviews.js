import React from 'react';

import Doctor from './Doctor';
import ReviewListItems from './ReviewListItems';

const Reviews = () => (
  <Doctor>
    {({ offsetHeight, goToNewReview, goToReview, reviewsById }) => (
      <ReviewListItems
        offsetHeight={offsetHeight}
        onAddReview={goToNewReview}
        onEditReview={goToReview}
        reviewsById={reviewsById}
      />
    )}
  </Doctor>
);

export default Reviews;
