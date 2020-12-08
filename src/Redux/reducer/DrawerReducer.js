import { DRAWER_ACTION } from '../actionTypes';

const initialState = {
  open: false,
};
const DraweReducer = (state = initialState, action) => {
  switch (action.type) {
    case DRAWER_ACTION:
      return {
        ...state,
        open: action.data.open,
      };
    default:
      return state;
  }
};
export default DraweReducer;
