import React from 'react';
import { shallow } from '../enzyme';
import { Doctors } from './Doctors';

it('Should load doctors when mounted', () => {
  const getDoctors = jest.fn();
  const doctors = shallow(
    <Doctors actions={{ getDoctors }} activeDoctor={{}} match={{}}>
      <div />
    </Doctors>,
  );
  expect(getDoctors.mock.calls.length).toEqual(1);
});
