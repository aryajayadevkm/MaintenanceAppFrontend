import React from "react";
import Fragment from "react";
import PropTypes from "prop-types";

const Navbar = ({ title }) => {
  return (
    <nav className="navbar has-background-black-bis has-shadow">
      <div className="column left">
        <h1 className="title is-4 has-text-primary">{title}</h1>
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
