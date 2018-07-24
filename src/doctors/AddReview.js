import React from 'react';

import Doctor from './Doctor';
import Review from './Review';

const AddReview = () => (
  <Doctor>{({ goToReviews }) => <Review add onCancel={goToReviews} />}</Doctor>
);

export default AddReview;
