import React, { Fragment, useState, useEffect } from "react";
import Moment from "moment";

const PaymentRow = ({
	bill,
	paid,
	paidCopy,
	billIds,
	setPaidCopy,
	setBillIds,
}) => {
	const [transaction, setTransaction] = useState({
		applied: 0,
		balance: bill.balance,
	});

	const getIndexFromBillIds = (id) => {
		return billIds.findIndex((item) => {
			return item === id;
		});
	};
	const [isChecked, setIsChecked] = useState(false);

	const fillPayment = (id) => {
		paidCopy = parseInt(paidCopy);
		var dif = paidCopy + transaction.balance;
		// console.log("total " + paidCopy + "dif " + dif);
		if (dif >= 0) {
			setTransaction({
				...transaction,
				applied: -transaction.balance,
				balance: 0,
			});
			setPaidCopy(dif);
		} else {
			setTransaction({ ...transaction, applied: paidCopy, balance: dif });
			setPaidCopy(0);
		}
		setBillIds([...billIds, id]);
		// console.log("transaction: qq" + transaction);
	};

	const reset = (index) => {
		paidCopy = parseInt(paidCopy);
		setPaidCopy(paidCopy + transaction.applied);
		setTransaction({
			...transaction,
			applied: 0,
			balance: bill.balance,
		});

		const idsCopy = Object.assign([], billIds);
		idsCopy.splice(index, 1);
		setBillIds(idsCopy);
		setIsChecked(false);
	};

	const onChange = (e) => {
		var index = getIndexFromBillIds(bill.id);
		console.log("index of billid " + index);
		console.log("bill id " + bill.id);
		if (index === -1) {
			// console.log("we here!");
			fillPayment(bill.id);
			setIsChecked(true);
		} else {
			reset(index);
		}
	};

	useEffect(() => {
		reset(bill.id);
	}, [paid]);

	return (
		<Fragment>
			<tr style={{ cursor: "pointer" }}>
				<td>
					<input
						type="checkbox"
						id={`billno.${bill.id}`}
						onChange={onChange}
						checked={isChecked}
					/>
					<label for={`billno.${bill.id}`} />
				</td>
				<td className="is-size-6">
					{Moment(bill.date).format("DD MMM, YYYY")}
				</td>
				<td className="is-size-6">maintenance</td>
				<td className="is-size-6">{Math.abs(bill.amount)}</td>
				<td className="is-size-6">{Math.abs(bill.balance)}</td>
				<td className="is-size-6">
					{Math.abs(bill.applied + transaction.applied)}
				</td>
				<td className="is-size-6">{Math.abs(transaction.balance)}</td>
			</tr>
		</Fragment>
	);
};

export default PaymentRow;
