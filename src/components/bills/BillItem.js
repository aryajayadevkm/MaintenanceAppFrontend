import React from "react";
import Moment from "moment";

const BillItem = ({ bill }) => {
	console.log(bill);

	const { date, flat_no, tr_type, amount, applied, balance } = bill;

	return (
		<tr
		// style={{
		// 	color:
		// 		Math.abs(applied) < Math.abs(amount)
		// 			? tr_type === "payment"
		// 				? "black"
		// 				: "red"
		// 			: "lightgrey",
		// }}
		>
			<td>{Moment(date).format("DD MMM, YYYY")}</td>
			<td>{flat_no}</td>
			<td>{tr_type}</td>
			<td style={{ color: tr_type === "payment" ? "mediumseagreen" : "red" }}>
				{Math.abs(amount)}
			</td>
			<td>{applied}</td>
			<td>{Math.abs(balance)}</td>
		</tr>
	);
};

export default BillItem;
