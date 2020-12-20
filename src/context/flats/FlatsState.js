import React, { useReducer, useContext } from "react";
import axios from "axios";
import FlatContext from "./FlatContext";
import FlatReducer from "./FlatsReducer";
import { GET_FLATS } from "../types";

const FlatsState = (props) => {
	const initialState = {
		flats: [],
	};

	const [state, dispatch] = useReducer(FlatReducer, initialState);

	const getFlats = async () => {
		const res = await axios.get("http://localhost:8000/api/flats/");
		console.log("hello" + res.data);
		dispatch({
			type: GET_FLATS,
			payload: res.data,
		});
		console.log(res.data);
	};
	const addFlat = async (flat) => {
		const res = await axios.post("http://localhost:8000/api/flats/", flat);
		getFlats();
		console.log(res);
	};
	return (
		<FlatContext.Provider
			value={{
				flats: state.flats,
				getFlats,
				addFlat,
			}}
		>
			{props.children}
		</FlatContext.Provider>
	);
};

export default FlatsState;
