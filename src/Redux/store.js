import reducer from './reducer/reducer';
import { createStore } from 'redux';

export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__({ trace: true })
);

export default store;
