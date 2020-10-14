import React, { useState, useEffect } from "react";
import MonthPicker from "../month-picker/MonthPicker";

const DueModal = ({ modalData, setModalData }) => {
  // convert date-string to {year:year, month:month} object
  function makeObject(date) {
    var year = parseInt(date.slice(0, 4));
    var month = parseInt(date.slice(5, 7));
    return { year: year, month: month };
  }

  //   make string of date
  const makeText = (year, month) => {
    var monthVal =
      (month === 11) | (month === 12) | (month === 10) ? month : "0" + month;
    return monthVal + "-" + year;
  };

  const [record, setRecord] = useState({
    months:
      modalData.months.length === 0
        ? [{ year: 2020, month: 10 }]
        : modalData.months.map(makeObject),
    amount_paid: "",
    remarks: "",
  });

  const [pickerDismissed, setPickerDismissed] = useState(true);
  const { months, amount_paid, remarks } = record;

  const onChange = (e) => {
    setRecord({ ...record, [e.target.name]: e.target.value });
  };

  return (
    <div className="modal has-overflow is-active">
      <div className="modal-background"></div>
      <div className="modal-card">
        <header className="modal-card-head has-text-centered">
          <p className="modal-card-title has-text-left px-5 pt-4">Payment</p>
          <div className="pr-4">
            <button
              className="delete"
              aria-label="close"
              onClick={() => {
                setModalData(null);
              }}
            ></button>
          </div>
        </header>
        <form className="modal-card-body">
          <div className="container px-4">
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

            <div className="field py-2">
              <div className="field-body">
                <label className="label">Months</label>
                <span className="px-2">
                  <MonthPicker
                    record={record}
                    setRecord={setRecord}
                    setPickerDismissed={setPickerDismissed}
                  />
                </span>
                {pickerDismissed && (
                  <div className="tags">
                    <span>
                      {record.months.map((item) => (
                        <div className={`tag is-info is-light`}>
                          {makeText(item.year, item.month)}
                        </div>
                      ))}
                    </span>
                  </div>
                )}
              </div>
            </div>

            <div className="field is-horizontal">
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
          </div>
        </form>
        <footer className="modal-card-foot buttons is-right">
          <div className="pr-1 pt-1">
            <button className="button is-primary has-text-white-bis">
              Save changes
            </button>
            <button
              className="button"
              onClick={() => {
                setModalData(null);
              }}
            >
              Cancel
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default DueModal;
