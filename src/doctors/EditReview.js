import React from 'react';

import Doctor from './Doctor';
import Review from './Review';

const EditReview = () => (
  <Doctor>
    {({ goToReviews, review }) => (
      <Review onCancel={goToReviews} review={review} />
    )}
  </Doctor>
);

export default EditReview;
