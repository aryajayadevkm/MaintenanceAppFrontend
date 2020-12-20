import { GET_FLATS, ADD_FLAT, UPDATE_FLAT } from "../types";
export default (state, action) => {
	switch (action.type) {
		case GET_FLATS:
			console.log(action.payload);
			return {
				...state,
				flats: action.payload,
			};
		case ADD_FLAT:
			console.log(action.payload);
			return {
				...state,
				flat: action.payload,
			};
		case UPDATE_FLAT:
			return {
				...state,
				flat: action.payload,
				loading: false,
			};
		default:
			return state;
	}
};
