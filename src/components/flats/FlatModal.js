import React, { Fragment, useState, useContext, useEffect } from "react";
import FlatContext from "../../context/flats/FlatContext";
import ResidentContext from "../../context/residents/ResidentContext";

const FlatModal = ({ openFlat, setOpenFlat }) => {
	const flatContext = useContext(FlatContext);
	const residentContext = useContext(ResidentContext);

	const { addFlat } = flatContext;
	const { getResidents, residents } = residentContext;

	useEffect(() => {
		getResidents();
		// eslint-disable-next-line
	}, []);
	console.log(residents);
	const [flatDetails, setFlatDetails] = useState({
		flat_no: "",
		maintenance_charge: "",
		bhk: "",
		sq_feet: "",
		occupants: "",
		building: "",
		owner: "",
	});

	const {
		flat_no,
		maintenance_charge,
		bhk,
		sq_feet,
		occupants,
		building,
		owner,
	} = flatDetails;

	const onChange = (e) => {
		e.preventDefault();
		const { name, value } = e.target;
		setFlatDetails({
			...flatDetails,
			[name]: value,
		});
	};
	const onSubmit = (e) => {
		e.preventDefault();
		addFlat(flatDetails);
		setOpenFlat(!openFlat);
	};
	console.log(flatDetails);
	return (
		<Fragment>
			{openFlat && (
				<div className="modal has-overflow is-active">
					<div className="modal-background"></div>
					<div className="modal-card">
						<header className="modal-card-head has-text-centered">
							<p className="modal-card-title has-text-left pl-5 pt-4">
								Add Flat
							</p>
							<div className="pr-4">
								<button
									className="delete"
									aria-label="close"
									onClick={() => {
										setOpenFlat(!openFlat);
									}}
								></button>
							</div>
						</header>
						<form className="modal-card-body" onSubmit={onSubmit}>
							<div className="container px-4 pb-4">
								<div className="columns">
									<div className="column">
										<div className="columns is-gapless">
											<div className="column is-4">
												<p className="pl-2 py-1 pb-4 has-text-weight-semibold">
													Flat no :
												</p>
												<p className="pl-2 pb-4 has-text-weight-semibold">
													Owner :
												</p>
												<p className="pl-2 pb-4 has-text-weight-semibold">
													Maintenance charge :
												</p>
												<p className="pl-2 pb-1 has-text-weight-semibold">
													Sqfeet :
												</p>
											</div>
											<div className="column">
												<input
													className="input"
													type="text"
													name="flat_no"
													placeholder="Enter Flat no."
													value={flat_no}
													onChange={onChange}
												/>
												<div className="field ">
													<div className="control">
														<div className="select py-1">
															<select onChange={onChange} name="owner">
																{residents.map((resident) => (
																	<option
																		key={`res${resident.id}`}
																		value={resident.id}
																	>
																		{resident.name}
																	</option>
																))}
															</select>
														</div>
													</div>
												</div>

												<input
													className="input"
													type="text"
													name="maintenance_charge"
													placeholder="Enter maintenance charge"
													value={maintenance_charge}
													onChange={onChange}
												/>
												<div className="pt-3">
													<input
														className="input"
														type="text"
														name="sq_feet"
														placeholder="Enter Sqfeet"
														value={sq_feet}
														onChange={onChange}
													/>
												</div>
											</div>
										</div>
									</div>
									<div className="column">
										<div className="columns is-gapless">
											<div className="column is-4">
												<p className="pl-2 pb-4 has-text-weight-semibold">
													Building :
												</p>
												<p className="pl-2 pb-4 has-text-weight-semibold">
													BHK :
												</p>
												<p className="pl-2 pb-4 has-text-weight-semibold">
													Occupants :
												</p>
											</div>

											<div className="column">
												<input
													className="input"
													type="text"
													name="building"
													placeholder="Enter building"
													value={building}
													onChange={onChange}
												/>
												<input
													className="input"
													type="text"
													name="bhk"
													placeholder="Enter bhk"
													value={bhk}
													onChange={onChange}
												/>
												<input
													className="input"
													type="text"
													name="occupants"
													placeholder="Enter occupants"
													value={occupants}
													onChange={onChange}
												/>
											</div>
										</div>
									</div>
								</div>
							</div>
							<footer className="modal-card-foot buttons is-right">
								<div className="pr-1 pt-1">
									<button
										className="button is-primary has-text-white-bis"
										type="submit"
									>
										Save changes
									</button>
									<button
										className="button"
										onClick={() => {
											setOpenFlat(!openFlat);
										}}
									>
										Cancel
									</button>
								</div>
							</footer>
						</form>
					</div>
				</div>
			)}
		</Fragment>
	);
};

export default FlatModal;
