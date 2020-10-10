import React, { useState } from "react";
import MonthPicker from "../month-picker/MonthPicker";

const DueModal = ({ modalData, setModalData }) => {
  // convert date-string to {year:year, month:month} object
  function makeObject(date) {
    var year = parseInt(date.slice(0, 4));
    var month = parseInt(date.slice(5, 7));
    return { year: year, month: month };
  }

  const [record, setRecord] = useState({
    months: modalData.months.map(makeObject),
    amount_paid: "",
    remarks: "",
  });

  const { months, amount_paid, remarks } = record;

  const onChange = (e) => {
    setRecord({ ...record, [e.target.name]: e.target.value });
  };

  return (
    <div className="modal is-active">
      <div className="modal-background"></div>
      <div className="modal-card">
        <header className="modal-card-head has-text-centered">
          <p className="modal-card-title">Payment</p>
          <button
            className="delete"
            aria-label="close"
            onClick={() => {
              setModalData(null);
            }}
          ></button>
        </header>
        <form className="modal-card-body">
          <div className="container px-6">
            <fieldset disabled>
              <div className="field is-horizontal">
                <div className="field-body">
                  <div className="field">
                    <label className="label">Flat</label>
                    <p className="control">
                      <input
                        className="input"
                        type="text"
                        placeholder={modalData.flat_no}
                        value={modalData.flat_no}
                        readOnly={true}
                      />
                    </p>
                  </div>
                  <div className="field">
                    <label className="label">Owner</label>
                    <p className="control is-horizontal">
                      <input
                        className="input"
                        type="text"
                        placeholder="owner"
                        value={modalData.owner_name}
                        readOnly={true}
                      />
                    </p>
                  </div>
                </div>
              </div>
              <div className="field is-horizontal">
                <div className="field-body">
                  <div className="field">
                    <label className="label">Maintenance charge</label>
                    <div className="control">
                      <input
                        className="input"
                        type="text"
                        placeholder="maintenance_charge"
                        value={modalData.maintenance_charge}
                        readOnly={true}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">Dues</label>
                    <div className="control">
                      <input
                        className="input"
                        type="text"
                        placeholder="dues"
                        value={modalData.dues}
                        readOnly={true}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </fieldset>

            <div className="field is-horizontal pt-2">
              <div className="field-body">
                <div className="field">
                  <label className="label">Amount</label>
                  <div className="control">
                    <input
                      className="input"
                      type="text"
                      name="amount_paid"
                      placeholder="Enter amount"
                      value={amount_paid}
                      onChange={onChange}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label">Remarks</label>
                  <div className="control">
                    <input
                      className="input"
                      type="text"
                      name="remarks"
                      placeholder="remarks"
                      value={remarks}
                      onChange={onChange}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="field">
              <label className="label">Choose months</label>
              <MonthPicker record={record} setRecord={setRecord} />
            </div>
            <div className="column">
              <label className="label pt-1">Chosen months</label>
            </div>
          </div>
        </form>
        <footer className="modal-card-foot">
          <button className="button is-success">Save changes</button>
          <button
            className="button"
            onClick={() => {
              setModalData(null);
            }}
          >
            Cancel
          </button>
        </footer>
      </div>
    </div>
  );
};

export default DueModal;
