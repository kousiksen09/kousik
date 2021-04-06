import { VIEWER_NAME } from "../actionTypes";

const initialState = {
	name: "",
};
const NameReducer = (state = initialState, action) => {
	switch (action.type) {
		case VIEWER_NAME:
			return {
				...state,
				name: action.data.name,
			};
		default:
			return state;
	}
};
export default NameReducer;
