import { GET_RESIDENTS } from "../types";
export default (state, action) => {
	switch (action.type) {
		case GET_RESIDENTS:
			return {
				...state,
				residents: action.payload,
			};
		default:
			return state;
	}
};
