import { render } from "@testing-library/react";
import React, { useState, useEffect } from "react";
import DueContext from "../../context/dues/DueContext";

const DueItem = ({ dueItem, setModal }) => {
  const {
    id,
    flat_no,
    owner_name,
    maintenance_charge,
    stock,
    dues,
    months,
  } = dueItem;

  return (
    <tr
      onClick={() => {
        setModal(dueItem);
      }}
    >
      <td>{flat_no}</td>
      <td>{owner_name}</td>
      <td>{maintenance_charge}</td>
      <td>{dues}</td>
      <td>{stock}</td>
    </tr>
  );
};

export default DueItem;
