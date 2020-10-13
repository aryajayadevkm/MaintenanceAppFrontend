import React, { useContext, useState } from "react";
import DueContext from "../../context/dues/DueContext";
import DueItem from "./DueItem";
import DueModal from "./DueModal";

const DuesTable = () => {
  const dueContext = useContext(DueContext);
  const { dues } = dueContext;
  const [modalData, setModalData] = useState(null);

  return (
    <div className="container">
      <div className="box">
        {/* <header className="card-header">
          <div className="card-header-title">
            <div className="title is-5 has-text-grey-light has-text-weight-light">
              Dues
            </div>
          </div>
        </header> */}

        <div className="content">
          <p className="subtitle is-4 has-text-grey-light has-text-weight-light">
            Dues
          </p>
          <div className=" dropdown-divider"></div>
          <table className="table is-hoverable">
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
                <DueItem
                  key={due.id}
                  dueItem={due}
                  setModalData={setModalData}
                />
              ))}
            </tbody>
          </table>
        </div>
        {modalData && (
          <DueModal modalData={modalData} setModalData={setModalData} />
        )}
      </div>
    </div>
  );
};

export default DuesTable;
