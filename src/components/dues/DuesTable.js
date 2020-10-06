import React, { Fragment, useContext, useState, useEffect } from "react";
import DueContext from "../../context/dues/DueContext";
import DueItem from "./DueItem";
import DueModal from "./DueModal";

const DuesTable = () => {
  const dueContext = useContext(DueContext);
  const { dues } = dueContext;
  const [duesModalInfo, setDuesModalInfo] = useState(null);

  function Modal({ due_item }) {
    if (!due_item) {
      return null;
    }
    return <DueModal param={{ due_item }} />;
  }

  return (
    <div className="table is-hoverable">
      <thead>
        <tr>
          <th>Flat no</th>
          <th>Owner</th>
          <th>Maintenance_charge</th>
          <th>Dues</th>
          <th>Stock</th>
        </tr>
      </thead>
      <tbody>
        {dues.map((due) => (
          <DueItem key={due.id} dueItem={due} setModal={setDuesModalInfo} />
        ))}
      </tbody>
      <Modal due_item={duesModalInfo} />
    </div>
  );
};

export default DuesTable;
