import React from "react";
import DuesTable from "../dues/DuesTable";
import BillsTable from "../bills/BillsTable";

const DuesPage = () => {
	return (
		<div>
			<div className="columns">
				<div className="column is-4">
					<DuesTable />
				</div>
				<div className="column is-6">
					<BillsTable />
				</div>
			</div>
		</div>
	);
};

export default DuesPage;
