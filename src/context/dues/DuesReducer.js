import { GET_DUES, UPDATE_DUE, SET_CURRENT } from "../types";
export default (state, action) => {
  switch (action.type) {
    case UPDATE_DUE:
      console.log(action.payload)
      return {
        ...state,
        due: action.payload,
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
