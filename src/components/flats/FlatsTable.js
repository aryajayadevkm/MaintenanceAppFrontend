import React, { Fragment, useContext, useEffect, useState } from "react";
import FlatContext from "../../context/flats/FlatContext";
import FlatItem from "./FlatItem";
import FlatModal from "./FlatModal";

const FlatsTable = () => {
	const flatContext = useContext(FlatContext);
	const { flats, getFlats } = flatContext;

	const [openFlat, setOpenFlat] = useState(false);

	useEffect(() => {
		getFlats();
		// eslint-disable-next-line
	}, []);
	const onClick = (e) => {
		setOpenFlat(!openFlat);
	};
	return (
		<div className="box">
			{flats !== null && (
				<Fragment>
					<div className="content">
						<div className="level">
							<div className="level-left">
								<p className="pl-4 subtitle is-4 has-text-grey-light has-text-weight-light">
									Flats
								</p>
							</div>
							<div className="level-right">
								<button
									className="button is-success is-small"
									onClick={onClick}
								>
									Add Flat
								</button>
							</div>
						</div>
						<div className=" dropdown-divider"></div>
						<table className="table is-hoverable">
							<thead>
								<tr>
									<th>Flat no</th>
									<th>Owner</th>
									<th>Maintenance Charge</th>
									<th>BHK</th>
									<th>Sq Feet</th>
									<th>Occupants</th>
								</tr>
							</thead>
							<tbody>
								{flats.map((flat) => (
									<FlatItem key={flat.id} flat={flat} />
								))}
							</tbody>
						</table>
					</div>
					<FlatModal openFlat={openFlat} setOpenFlat={setOpenFlat} />
				</Fragment>
			)}
		</div>
	);
};

export default FlatsTable;
