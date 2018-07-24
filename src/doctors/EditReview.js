import React from 'react';

import Doctor from './Doctor';
import Review from './Review';

const EditReview = () => (
  <Doctor>
    {({ goToReviews, removeReview, review, updateReview }) => (
      <Review
        onCancel={goToReviews}
        onUpdate={updateReview}
        onRemove={removeReview}
        review={review}
      />
    )}
  </Doctor>
);

export default EditReview;
