import React from "react";

const FlatItem = ({ flat }) => {
	const { flat_no, owner, maintenance_charge, bhk, sq_feet, occupants } = flat;
	return (
		<tr>
			<td>{flat.flat_no}</td>
			<td>{flat.owner}</td>
			<td>{flat.maintenance_charge}</td>
			<td>{flat.bhk}</td>
			<td>{flat.sq_feet}</td>
			<td>{flat.occupants}</td>
		</tr>
	);
};

export default FlatItem;
