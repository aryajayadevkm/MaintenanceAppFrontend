import React, { useState } from "react";
import { Fragment } from "react";
import axios from "axios";

const PaymentItem = ({
	selectedMonths,
	makeText,
	dues,
	maintenance_charge,
	amount_paid,
}) => {
	const [amount, setAmount] = useState("");
	const dueex = {
		dues: [
			{
				id: 1,
				date: "2020-10-30",
				amount: -1000,
				balance: -1000,
			},
		],
	};

	// const onChange = (e) => {
	// 	setAmount(e.target.value);
	// };
	return dues.map((item) => (
		<Fragment>
			<tr style={{ cursor: "pointer" }}>
				<td>
					<label class="checkbox">
						<input type="checkbox" />
					</label>
				</td>
				<td className="is-size-6">{item["date"]}</td>
				<td className="is-size-6">maintenance</td>
				<td className="is-size-6">{item["amount"]}</td>
				<td className="is-size-6">{item["balance"]}</td>
			</tr>
		</Fragment>
	));
};

export default PaymentItem;
