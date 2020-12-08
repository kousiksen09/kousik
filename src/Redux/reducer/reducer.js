import { combineReducers } from 'redux';
import DrawerReducer from './DrawerReducer';
import CurrPageReducer from './CurrPageReducer';

const reducer = combineReducers({
  DrawerReducer,
  CurrPageReducer,
});
export default reducer;
