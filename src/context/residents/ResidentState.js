import React, { useReducer, useContext } from "react";
import axios from "axios";
import { GET_RESIDENTS } from "../types";
import ResidentReducer from "./ResidentReducer";
import ResidentContext from "./ResidentContext";

const ResidentState = (props) => {
	const initialState = {
		residents: [],
	};

	const [state, dispatch] = useReducer(ResidentReducer, initialState);

	const getResidents = async () => {
		const res = await axios.get("http://localhost:8000/api/residents/");
		dispatch({
			type: GET_RESIDENTS,
			payload: res.data,
		});
	};

	return (
		<ResidentContext.Provider
			value={{
				residents: state.residents,
				getResidents,
			}}
		>
			{props.children}
		</ResidentContext.Provider>
	);
};

export default ResidentState;
