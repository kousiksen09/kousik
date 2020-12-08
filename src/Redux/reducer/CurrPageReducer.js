import { CURR_PAGE } from '../actionTypes';

const initialState = {
  currPage: '',
};
const CurrPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case CURR_PAGE:
      return {
        ...state,
        currPage: action.data.currPage,
      };
    default:
      return state;
  }
};
export default CurrPageReducer;
