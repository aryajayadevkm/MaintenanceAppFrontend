import { UPDATE_DUE, SET_CURRENT } from "../types";
export default (state, action) => {
  switch (action.type) {
    case UPDATE_DUE:
      return {
        ...state,
        current: action.payload,
      };
    default:
      return state;
  }
};
