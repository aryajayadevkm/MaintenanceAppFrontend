import React, { useReducer } from "react";
import DueContext from "./DueContext";
import duesReducer from "./DuesReducer";
import { UPDATE_DUE, SET_CURRENT } from "../types";

const DuesState = (props) => {
  const initialState = {
    dues: [
      {
        id: 17,
        flat_no: "A1",
        owner_name: "Arya Jayadev  K M",
        maintenance_charge: 1000,
        stock: 2000,
        dues: 0,
        months: [],
      },
      {
        id: 18,
        flat_no: "A2",
        owner_name: "Amritha Jayadev K M",
        maintenance_charge: 2000,
        stock: 0,
        dues: 2000,
        months: ["2020-09-22"],
      },
      {
        id: 19,
        flat_no: "A3",
        owner_name: "Abc Def",
        maintenance_charge: 3000,
        stock: 0,
        dues: 3000,
        months: ["2020-09-22"],
      },
    ],
    current: null,
  };

  const [state, dispatch] = useReducer(duesReducer, initialState);

  // Add Due

  // Update Due

  // Set Current Due
  const setCurrent = (due) => {
    dispatch({ type: SET_CURRENT, payload: due });
  };

  return (
    <DueContext.Provider
      value={{ dues: state.dues, current: state.current, setCurrent }}
    >
      {props.children}
    </DueContext.Provider>
  );
};

export default DuesState;
