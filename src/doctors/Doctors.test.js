import React from 'react';
import configureStore from 'redux-mock-store';
import { shallow } from '../enzyme';
import Doctors from './Doctors';
import initialState from './initialState';

it('Should load doctors when mounted', () => {
  const store = configureStore()({ doctors: { initialState } });
  // const doctors = shallow(
  //   <Doctors actions={{ getDoctors: () => ({ type: 'something' }) }} match={{}}>
  //     <div />
  //   </Doctors>,
  //   { context: { store } },
  // ).dive();
});
