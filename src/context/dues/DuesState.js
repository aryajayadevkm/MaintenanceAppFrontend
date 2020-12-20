import React, { useReducer, useContext } from "react";
import axios from "axios";
import DueContext from "./DueContext";
import duesReducer from "./DuesReducer";
import BillContext from "../bills/BillContext";

import { ADD_DUE, GET_DUES, UPDATE_DUE, SET_CURRENT } from "../types";

const DuesState = (props) => {
	const initialState = {
		dues: [],
		current: null,
	};

	const [state, dispatch] = useReducer(duesReducer, initialState);
	const billContext = useContext(BillContext);
	const { getBills } = billContext;

	// Get dues
	const getDues = async () => {
		const res = await axios.get("http://127.0.0.1:8000/api/payments/");
		dispatch({
			type: GET_DUES,
			payload: res.data,
		});
	};

	// Update Due
	const updateDue = async (due) => {
		const config = {
			headers: {
				"Content-Type": "application/json",
			},
		};
		const res = await axios.post("http://127.0.0.1:8000/api/payments/", due);

		dispatch({
			type: UPDATE_DUE,
			payload: res.data,
		});
		console.log(res.data);
	};

	// Match or unmatch bills
	const billMatching = async (billIds) => {
		const config = {
			headers: {
				"Content-Type": "application/json",
			},
		};
		const res = await axios.post(
			"http://localhost:8000/api/match-bills/",
			billIds
		);
		console.log(res.data);
		getBills();
	};

	// Set Current Due
	const setCurrent = (due) => {
		dispatch({ type: SET_CURRENT, payload: due });
	};

	return (
		<DueContext.Provider
			value={{
				dues: state.dues,
				current: state.current,
				billIds: state.billIds,
				setCurrent,
				getDues,
				updateDue,
				billMatching,
			}}
		>
			{props.children}
		</DueContext.Provider>
	);
};

export default DuesState;
