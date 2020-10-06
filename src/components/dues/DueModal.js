import React, { useState, useEffect } from "react";

const DueModal = ({ param }) => {
  console.log({ param });
  const dueDetails = param.due_item;

  const [record, setRecord] = useState({
    months: [],
    amount_paid: "",
    remarks: "",
  });
  const [isActive, setIsActive] = useState("is-active");
  const { months, amount_paid, remarks } = record;

  const onChange = (e) =>
    setRecord({ ...record, [e.target.name]: e.target.value });

  return (
    <div className={`modal ${isActive}`}>
      <div className="modal-background"></div>
      <div className="modal-card">
        <header className="modal-card-head has-text-centered">
          <p class="modal-card-title">Payment</p>
          <button className="delete" aria-label="close"></button>
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
                        placeholder={dueDetails.flat_no}
                        value={dueDetails.flat_no}
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
                        value={dueDetails.owner_name}
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
                        value={dueDetails.maintenance_charge}
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
                        value={dueDetails.dues}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </fieldset>
            <div className="pt-2">
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
            <div className="field">
              <label className="label">Choose months</label>
              {dueDetails.months.map((month) => (
                <span class="tag is-info is-light is-clickable">{month}</span>
              ))}
            </div>
          </div>
        </form>
        <footer className="modal-card-foot">
          <button className="button is-success">Save changes</button>
          <button
            className="button"
            onClick={() => {
              setIsActive(null);
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
