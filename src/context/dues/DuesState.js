import React, { useReducer } from "react";
import axios from "axios";
import DueContext from "./DueContext";
import duesReducer from "./DuesReducer";
import { ADD_DUE, GET_DUES, UPDATE_DUE, SET_CURRENT } from "../types";

const DuesState = (props) => {
  const initialState = {
    dues: [],
    current: null,
  };

  const [state, dispatch] = useReducer(duesReducer, initialState);

  // Get dues
  const getDues = async () => {
    const res = await axios.get("http://127.0.0.1:8000/api/collections/");
    console.log(res);
    dispatch({
      type: GET_DUES,
      payload: res.data,
    });
  };
  // Add Due

  // Update Due
  const updateDue = async due => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    const res = await
      axios.post('http://127.0.0.1:8000/api/collections/', due);

    dispatch({
      type: UPDATE_DUE,
      payload: res.data
    })
    console.log(res.data);
  }


  // Set Current Due
  const setCurrent = (due) => {
    dispatch({ type: SET_CURRENT, payload: due });
  };

  return (
    <DueContext.Provider
      value={{ dues: state.dues, current: state.current, setCurrent, getDues, updateDue }}
    >
      {props.children}
    </DueContext.Provider>
  );
};

export default DuesState;
