import { render } from "@testing-library/react";
import React, { useState, useEffect, useContext, Fragment } from "react";
import BillContext from "../../context/bills/BillContext";
import DueContext from "../../context/dues/DueContext";

const DueItem = ({ dueItem, setModalData, flatIds, setFlatIds }) => {
	const dueContext = useContext(DueContext);
	const { id, flat_no, owner_name } = dueItem;

	//   check if month-year already selected
	const getIndex = (id) => {
		return flatIds.findIndex((item) => {
			return item === id;
		});
	};
	console.log(flatIds);

	//   add/remove month-year from array
	const onChange = () => {
		var index = getIndex(id);
		console.log("index of flatid " + index);
		if (index === -1) {
			setFlatIds([...flatIds, id]);
		} else {
			const idsCopy = Object.assign([], flatIds);
			idsCopy.splice(index, 1);
			setFlatIds(idsCopy);
		}
	};
	return (
		<Fragment>
			<tr className="">
				<td>
					<input
						type="checkbox"
						id={`flatno.${id}`}
						onClick={onChange}
						checked={getIndex(id) !== -1 ? true : false}
					/>
					<label for={`flatno.${id}`} />
				</td>
				<div
					className="container-small"
					style={{ cursor: "pointer" }}
					onClick={() => {
						setModalData(dueItem);
					}}
				>
					<td className="">{flat_no}</td>
					<td className="pl-6">{owner_name}</td>
				</div>
			</tr>
		</Fragment>
	);
};

export default DueItem;
