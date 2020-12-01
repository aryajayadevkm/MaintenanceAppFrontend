import React, { useState, useEffect, useContext } from "react";
import DueContext from "../../context/dues/DueContext";
import PaymentRow from "./PaymentRow";
const DueModal = ({ modalData, setModalData }) => {
	const dueContext = useContext(DueContext);
	const { updateDue } = dueContext;

	const { id, flat_no, owner_name, dues } = modalData;

	const [paid, setPaid] = useState(0);
	const [billIds, setBillIds] = useState([]);
	const [paidCopy, setPaidCopy] = useState(paid);
	const [remarks, setRemarks] = useState("");

	const totalDue = dues.reduce(function (sum, current) {
		return sum + current.balance;
	}, 0);

	const remarkChange = (e) => {
		e.preventDefault();
		setRemarks(e.target.value);
	};
	const amountChange = (e) => {
		e.preventDefault();
		setPaid(e.target.value);
		setPaidCopy(e.target.value);
	};

	const onSubmit = (e) => {
		e.preventDefault();
		updateDue({ id: id, amount: paid, bill_ids: billIds, remarks: remarks });
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
									</div>
									<div className="column">
										<p className="pl-2 py-1">{flat_no}</p>
										<p className="pl-2 pb-1">{owner_name}</p>
										<input
											className="input"
											type="text"
											name="paid"
											placeholder="Enter amount"
											value={paid}
											onChange={amountChange}
										/>
									</div>
								</div>
							</div>
							<div className="column">
								<div className="columns is-gapless">
									<div className="column is-4">
										<p className="pl-2 pb-1 has-text-weight-semibold">
											Total due :
										</p>
										<p className="pl-2 pb-1 has-text-weight-semibold">
											Total applied :
										</p>
										<p className="pl-2 pb-1 has-text-weight-semibold">
											Remarks :
										</p>
									</div>

									<div className="column">
										<p className="pl-2 pb-1">{Math.abs(totalDue)}</p>
										<p className="pl-2 pb-1">{paidCopy}</p>
										<input
											className="input"
											type="text"
											name="remarks"
											placeholder="Enter remarks"
											value={remarks}
											onChange={remarkChange}
										/>
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
										<th>Due Amount</th>
										<th>Applied</th>
										<th>Balance</th>
									</tr>
								</thead>
								<tbody>
									{dues.map((bill) => (
										<PaymentRow
											key={`billno.${bill.id}`}
											bill={bill}
											paid={paid}
											billIds={billIds}
											setBillIds={setBillIds}
											paidCopy={paidCopy}
											setPaidCopy={setPaidCopy}
										/>
									))}
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
