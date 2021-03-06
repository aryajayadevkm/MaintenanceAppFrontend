import React, { useState } from "react";
import { Fragment } from "react";
import Moment from "moment";

const PaymentItem = ({ due, billIds, setBillIds, paidCopy, setPaidCopy }) => {
	const [transaction, setTransaction] = useState({
		applied: 0,
		balance: due.balance,
	});

	// only if amount paid > sum of dues will the check boxes be activated
	// balance means due amount, amount means the charge, amount paid gets subtracted upon ticking

	const fillPayment = (id) => {
		paidCopy = parseInt(paidCopy);
		var dif = paidCopy + transaction.balance;
		console.log("total " + paidCopy + "dif " + dif);
		if (dif >= 0) {
			setTransaction({
				...transaction,
				applied: transaction.balance,
				balance: 0,
			});
			setPaidCopy(dif);
		} else {
			setTransaction({ ...transaction, applied: paidCopy, balance: dif });
			setPaidCopy(0);
		}
		setBillIds([...billIds, id]);
		console.log("transaction: qq" + transaction);
	};
	const getIndexFromBillIds = (id) => {
		return billIds.findIndex((item) => {
			return item === id;
		});
	};
	const onChange = (e) => {
		var id = e.target.id;
		console.log("target id: " + id);
		var index = getIndexFromBillIds(id);
		if (index === -1) {
			if (paidCopy > 0) fillPayment(id);
		} else {
			const idsCopy = Object.assign([], setBillIds);
			idsCopy.splice(index, 1);
			setBillIds(idsCopy);

			paidCopy = parseInt(paidCopy);
			setPaidCopy(paidCopy + transaction.applied);
			setTransaction({ ...transaction, applied: 0, balance: due.amount });
		}
		console.log(billIds);
	};

	return (
		<Fragment>
			<tr style={{ cursor: "pointer" }}>
				<td>
					<input
						type="checkbox"
						id={due.id}
						disabled={paidCopy < 0 ? true : false}
						onChange={onChange}
						checked={getIndexFromBillIds(due.id) !== -1 ? true : false}
					/>
					<label for={due.id} />
				</td>
				<td className="is-size-6">{Moment(due.date).format("DD MMM, YYYY")}</td>
				<td className="is-size-6">maintenance</td>
				<td className="is-size-6">{due.amount}</td>
				<td className="is-size-6">{due.balance}</td>
				<td className="is-size-6">{transaction.applied}</td>
				<td className="is-size-6">{transaction.balance}</td>
			</tr>
		</Fragment>
	);
};

export default PaymentItem;
