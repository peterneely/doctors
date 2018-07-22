import { combineReducers } from 'redux';
import doctors from '../doctors/reducers';
import layout from '../layout/reducers';

export default combineReducers({
  doctors,
  layout,
});
