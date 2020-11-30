import React, { Fragment, useContext, useState, useEffect } from "react";
import DueContext from "../../context/dues/DueContext";
import DueItem from "./DueItem";
import DueModal from "./DueModal";
import Spinner from "../layout/Spinner";
const DuesTable = () => {
	const dueContext = useContext(DueContext);
	const { dues, getDues, loading, billMatching } = dueContext;
	const [modalData, setModalData] = useState(null);
	const [flatIds, setFlatIds] = useState([]);
	const [selectAll, setSelectAll] = useState(false);
	useEffect(() => {
		getDues();
		// eslint-disable-next-line
	}, []);

	const onCheck = (e) => {
		var arr = dues.map((due) => due.id);
		!selectAll ? setFlatIds(arr) : setFlatIds([]);
		setSelectAll(!selectAll);
	};
	const onClick = (action) => {
		var data = { flat_ids: flatIds, action: action };
		// console.log(data);
		billMatching({ flat_ids: flatIds, action: action });
	};
	return (
		<div className="box">
			{dues !== null && !loading ? (
				<Fragment>
					<div className="content">
						<div className="level">
							<div className="level-item">
								<p className="subtitle is-4 has-text-grey-light has-text-weight-light">
									Record Payment
								</p>
							</div>
							{flatIds && (
								<Fragment>
									<div className="level-item">
										<button
											className="button is-success is-small"
											onClick={() => {
												console.log("button clicked");
												onClick("match");
											}}
										>
											Match
										</button>
									</div>
									<div className="level-item">
										<button
											className="button is-danger is-small"
											onClick={() => onClick("unmatch")}
										>
											Unmatch
										</button>
									</div>
								</Fragment>
							)}
						</div>
						<div className=" dropdown-divider"></div>

						<table className="table is-hoverable">
							<thead>
								<tr>
									<th style={{ width: "5%" }}>
										<input type="checkbox" id="sel_all" onClick={onCheck} />
										<label for="sel_all" />
									</th>
									<div>
										<th>Flat no</th>
										<th className="pl-5">Owner</th>
									</div>
								</tr>
							</thead>
							<tbody>
								{dues.map((due) => (
									<DueItem
										selectAll={selectAll}
										key={due.id}
										dueItem={due}
										setModalData={setModalData}
										flatIds={flatIds}
										setFlatIds={setFlatIds}
									/>
								))}
							</tbody>
						</table>
					</div>
					{modalData && (
						<DueModal modalData={modalData} setModalData={setModalData} />
					)}
				</Fragment>
			) : (
				<Spinner />
			)}
		</div>
	);
};

export default DuesTable;
