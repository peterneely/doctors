import { combineReducers } from 'redux';
import doctor from '../doctor/reducers';
import layout from '../layout/reducers';

export default combineReducers({
  doctor,
  layout,
});
