import reducer from './reducer/reducer';
import { createStore } from 'redux';

export const store = createStore(
  reducer,
  typeof window.__REDUX_DEVTOOLS_EXTENSION__ === 'undefined'
    ? (a) => a
    : window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
