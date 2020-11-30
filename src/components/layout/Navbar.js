import React from "react";
import Fragment from "react";
import PropTypes from "prop-types";
import new_logo from "./new_logo.png";

const Navbar = ({ title }) => {
	return (
		<nav className="navbar has-background-black-bis has-shadow">
			<div className="level">
				<div className="level-item pl-3 pr-3">
					<img src={new_logo} alt="" />
				</div>
				<div className="level-item">
					<h1 className="title is-4 has-text-primary">{title}</h1>
				</div>
			</div>
		</nav>
	);
};

Navbar.propTypes = {
	title: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
	title: "Maintenance App",
};

export default Navbar;
