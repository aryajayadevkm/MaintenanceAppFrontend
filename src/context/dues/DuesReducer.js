import {
	GET_DUES,
	UPDATE_DUE,
	SET_CURRENT,
	MATCH_UNMATCH_BILLS,
} from "../types";
export default (state, action) => {
	switch (action.type) {
		case UPDATE_DUE:
			console.log(action.payload);
			return {
				...state,
				due: action.payload,
			};
		case MATCH_UNMATCH_BILLS:
			console.log(action.payload);
			return {
				...state,
				billIds: action.payload,
			};
		case GET_DUES:
			return {
				...state,
				dues: action.payload,
				loading: false,
			};
		default:
			return state;
	}
};
