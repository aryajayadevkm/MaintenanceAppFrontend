import React, { useEffect, useContext, Fragment } from "react";
import Spinner from "../layout/Spinner";
import BillItem from "./BillItem";
import BillContext from "../../context/bills/BillContext";

const BillsTable = () => {
	const billContext = useContext(BillContext);
	const { bills, getBills } = billContext;

	useEffect(() => {
		getBills();
		// eslint-disable-next-line
	}, []);
	return (
		<div className="box">
			{bills !== null && (
				<Fragment>
					<div className="content">
						<p className="subtitle is-4 has-text-grey-light has-text-weight-light">
							Bills
						</p>
						<div className=" dropdown-divider"></div>

						<table className="table is-hoverable">
							<thead>
								<tr>
									<th>Date</th>
									<th>Flat no</th>
									<th>TR Type</th>
									<th>Amount</th>
									<th>Applied</th>
									<th>Balance</th>
								</tr>
							</thead>
							<tbody>
								{bills.map((bill) => (
									<BillItem key={bill.id} bill={bill} />
								))}
							</tbody>
						</table>
					</div>
				</Fragment>
			)}
		</div>
	);
};

export default BillsTable;
