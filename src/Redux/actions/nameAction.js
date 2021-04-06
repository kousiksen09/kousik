import { VIEWER_NAME } from "../actionTypes";

const nameAction = (data) => ({
	type: VIEWER_NAME,
	data,
});

export default nameAction;
