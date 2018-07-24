import React from 'react';

import Doctor from './Doctor';
import Review from './Review';

const AddReview = () => (
  <Doctor>
    {({ addReview, goToReviews }) => (
      <Review add onAdd={addReview} onCancel={goToReviews} />
    )}
  </Doctor>
);

export default AddReview;
