import React, { Fragment, useContext, useState, useEffect } from "react";
import DueContext from "../../context/dues/DueContext";
import DueItem from "./DueItem";
import DueModal from "./DueModal";
import Spinner from "../layout/Spinner";
const DuesTable = () => {
  const dueContext = useContext(DueContext);
  const { dues, getDues, loading } = dueContext;
  const [modalData, setModalData] = useState(null);

  useEffect(() => {
    getDues();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="container">
      <div className="box">
        {dues !== null && !loading ? (
          <Fragment>
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
          </Fragment>
        ) : (
            <Spinner />
          )}
      </div>
    </div>
  );
};

export default DuesTable;
