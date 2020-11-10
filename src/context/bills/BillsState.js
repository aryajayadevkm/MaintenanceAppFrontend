import React, { useReducer } from "react";
import BillContext from "./BillContext";
import { GET_BILLS, MATCH_UNMATCH_BILLS } from "../types";
import BillsReducer from "./BillsReducer";
import axios from "axios";

const BillsState = (props) => {
	const initialState = {
		bills: [],
	};

	const [state, dispatch] = useReducer(BillsReducer, initialState);

	const getBills = async () => {
		const res = await axios.get("http://localhost:8000/api/bills/");
		dispatch({
			type: GET_BILLS,
			payload: res.data,
		});
	};

	return (
		<BillContext.Provider
			value={{
				bills: state.bills,
				getBills,
			}}
		>
			{props.children}
		</BillContext.Provider>
	);
};

export default BillsState;
