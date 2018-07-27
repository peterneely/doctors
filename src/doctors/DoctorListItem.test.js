import React from 'react';
import { shallow } from 'enzyme';
import DoctorListItem from './DoctorListItem';

it('Should show basic info', () => {
  const item = shallow(
    <DoctorListItem
      active={false}
      classes={{}}
      doctor={{ ratingSummary: '' }}
      onClick={() => {}}
    />,
  ).dive();
  const infoSelectors = [
    '#js-avatar',
    '#js-display-name',
    '#js-rating-summary',
    '#js-practice-type',
    '#js-address',
    '#js-review-count',
  ];
  infoSelectors.forEach(selector => {
    expect(item.find(selector).length).toEqual(1);
  });
});
