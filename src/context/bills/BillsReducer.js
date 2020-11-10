import { GET_BILLS, MATCH_UNMATCH_BILLS } from "../types";
export default (state, action) => {
	switch (action.type) {
		case GET_BILLS:
			console.log(action.payload);
			return {
				...state,
				bills: action.payload,
			};

		default:
			return state;
	}
};
