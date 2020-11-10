import React, { useState, useEffect, useContext } from "react";
import MonthPicker from "../month-picker/MonthPicker";
import DueContext from "../../context/dues/DueContext";
import PaymentItem from "./PaymentItem";
// put modalData in here
const DueModal = ({ modalData, setModalData }) => {
	const dueContext = useContext(DueContext);
	const { updateDue } = dueContext;

	const { id, flat_no, owner_name, maintenance_charge, dues } = modalData;

	const [record, setRecord] = useState({
		id: modalData.id,
		months: [],
		amount_paid: "",
		remarks: "",
	});

	// const [selectedMonths, setSelectedMonths] = useState(
	// 	modalData.due_details.length === 0
	// 		? [{ year: 2020, month: 10 }]
	// 		: modalData.due_details.map((item) => makeObject(item["due_date"]))
	// );
	// console.log(selectedMonths);

	const totalDue = dues.reduce(function (sum, current) {
		return sum + current.balance;
	}, 0);

	const [pickerDismissed, setPickerDismissed] = useState(true);
	const { amount_paid, remarks } = record;

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
		return year + "-" + monthVal + "-01";
	};

	const onChange = (e) => {
		setRecord({ ...record, [e.target.name]: e.target.value });
	};

	const onSubmit = (e) => {
		e.preventDefault();

		// Month object to text
		// var monthsText = Object.assign(
		// 	[],
		// 	selectedMonths.map((item) => makeText(item.year, item.month))
		// );

		// const due = { Dues: [{ ...record, months: monthsText }] };

		// console.log(due);
		// updateDue(due);
		setModalData(null);
	};

	return (
		<div className="modal has-overflow is-active">
			<div className="modal-background"></div>
			<div className="modal-card">
				<header className="modal-card-head has-text-centered">
					<p className="modal-card-title has-text-left px-5 pt-4">Receipt</p>
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
				<form className="modal-card-body" onSubmit={onSubmit}>
					<div className="container px-4 pb-4">
						<div className="columns">
							<div className="column">
								<div className="columns is-gapless">
									<div className="column is-4">
										<p className="pl-2 py-1 has-text-weight-semibold">
											Flat no :
										</p>
										<p className="pl-2 pb-1 has-text-weight-semibold">
											Owner :
										</p>
										<p className="pl-2 pb-1 has-text-weight-semibold">
											Amount :
										</p>
										<p className="pl-2 pb-1 has-text-weight-semibold">
											Months :
										</p>
									</div>
									<div className="column">
										<p className="pl-2 py-1">{flat_no}</p>
										<p className="pl-2 pb-1">{owner_name}</p>
										<input
											className="input"
											type="text"
											name="amount_paid"
											placeholder="Enter amount"
											value={amount_paid}
											onChange={onChange}
										/>
										{/* <span className="px-2">
											<MonthPicker
												selectedMonths={selectedMonths}
												setSelectedMonths={setSelectedMonths}
												record={record}
												setRecord={setRecord}
												setPickerDismissed={setPickerDismissed}
											/>
										</span> */}
									</div>
								</div>
							</div>
							<div className="column">
								<div className="columns is-gapless">
									<div className="column is-4">
										<p className="pl-2 pb-1 has-text-weight-semibold">
											Total due :
										</p>
									</div>
									<div className="column">
										<p className="pl-2 pb-1">{totalDue}</p>
									</div>
								</div>
							</div>
						</div>
						<div className="card">
							<table className="table is-hoverable">
								<thead>
									<tr>
										<th></th>
										<th style={{ width: "20%" }}>Due date</th>
										<th>Type of charge</th>
										<th>Charge</th>
										<th>Due amount</th>
									</tr>
								</thead>
								<tbody>
									<PaymentItem
										// selectedMonths={selectedMonths}
										makeText={makeText}
										dues={modalData.dues}
										maintenance_charge={modalData.maintenance_charge}
										amount_paid={amount_paid}
									/>
								</tbody>
							</table>
						</div>
					</div>
					<footer className="modal-card-foot buttons is-right">
						<div className="pr-1 pt-1">
							<button
								className="button is-primary has-text-white-bis"
								type="submit"
							>
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
				</form>
			</div>
		</div>
	);
};

export default DueModal;
