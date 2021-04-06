import { combineReducers } from "redux";
import CurrPageReducer from "./CurrPageReducer";
import NameReducer from "./NameReducer";

const reducer = combineReducers({
	NameReducer,
	CurrPageReducer,
});
export default reducer;
