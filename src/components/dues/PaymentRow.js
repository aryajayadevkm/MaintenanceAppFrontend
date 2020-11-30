import React, { Fragment, useState, useEffect } from "react";
import Moment from "moment";

const PaymentRow = ({
	due,
	paid,
	paidCopy,
	billIds,
	setPaidCopy,
	setBillIds,
}) => {
	const [transaction, setTransaction] = useState({
		applied: due.applied,
		balance: due.balance,
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
		console.log("total " + paidCopy + "dif " + dif);
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
		console.log("transaction: qq" + transaction);
	};

	const reset = (index) => {
		paidCopy = parseInt(paidCopy);
		setPaidCopy(paidCopy + transaction.applied);
		setTransaction({ ...transaction, applied: 0, balance: due.amount });

		const idsCopy = Object.assign([], billIds);
		idsCopy.splice(index, 1);
		setBillIds(idsCopy);
		setIsChecked(false);
	};

	const onChange = (e) => {
		var index = getIndexFromBillIds(e.target.id);
		console.log("index" + index);
		if (index === -1) {
			if (paidCopy > 0) {
				fillPayment(e.target.id);
				setIsChecked(true);
			}
		} else {
			reset(index);
		}
	};
	console.log(billIds);
	useEffect(() => {
		reset(due.id);
	}, [paid]);

	return (
		<Fragment>
			<tr style={{ cursor: "pointer" }}>
				<td>
					<input
						type="checkbox"
						id={due.id}
						disabled={paidCopy < 0 ? true : false}
						onChange={onChange}
						checked={isChecked}
					/>
					<label for={due.id} />
				</td>
				<td className="is-size-6">{Moment(due.date).format("DD MMM, YYYY")}</td>
				<td className="is-size-6">maintenance</td>
				<td className="is-size-6">{due.amount}</td>
				<td className="is-size-6">{due.balance}</td>
				<td className="is-size-6">{transaction.applied}</td>
				<td className="is-size-6">{-transaction.balance}</td>
			</tr>
		</Fragment>
	);
};

export default PaymentRow;
