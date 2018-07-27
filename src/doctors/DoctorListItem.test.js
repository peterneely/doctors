import React from 'react';
import { shallow } from 'enzyme';
import DoctorListItem from './DoctorListItem';

const createListItem = (options = {}) => {
  const { onClick = () => {} } = options;
  return shallow(
    <DoctorListItem
      active={false}
      classes={{}}
      doctor={{ ratingSummary: '' }}
      onClick={onClick}
    />,
  ).dive();
};

it('Should show basic info', () => {
  const item = createListItem();
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

it('Should show details when clicked', () => {
  const onClick = jest.fn();
  const item = createListItem({ onClick });
  item.prop('onClick')();
  expect(onClick.mock.calls.length).toEqual(1);
});
