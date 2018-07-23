import React from 'react';

import Doctor from './Doctor';
import ReviewListItems from './ReviewListItems';

const Reviews = () => (
  <Doctor>
    {({ contentHeight, goToNewReview, goToReview, reviewsById }) => (
      <ReviewListItems
        contentHeight={contentHeight}
        onAddReview={goToNewReview}
        onEditReview={goToReview}
        reviewsById={reviewsById}
      />
    )}
  </Doctor>
);

export default Reviews;
