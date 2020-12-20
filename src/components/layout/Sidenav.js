import React, { Fragment } from "react";
import { Link } from "react-router-dom";

export const Sidenav = () => {
	return (
		<div className="container">
			<div className="section"></div>
			<div className="hero is-fullheight ">
				<div className="container">
					<ul className="menu-list">
						<li>
							<Link to="/">
								<div className="body has-text-light">Home</div>
							</Link>
						</li>
						<li>
							<Link to="/dues">
								<div className="body has-text-light">Dues</div>
							</Link>
						</li>

						<li>
							<Link to="/flats">
								<div className="body has-text-light">Flats</div>
							</Link>
						</li>

						<li>
							<a href="/">
								<div className="body has-text-light">Residents</div>
							</a>
						</li>

						<li>
							<a href="/">
								<div className="body has-text-light">Payment History</div>
							</a>
						</li>
						<li>
							<a href="/">
								<div className="body has-text-light">Administration</div>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Sidenav;
