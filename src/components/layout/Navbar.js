import React from "react";
import Fragment from "react";
import PropTypes from "prop-types";
import amcmLogoNew from "./amcmLogoNew.png";

const Navbar = ({ title }) => {
  return (
    <nav className="navbar has-background-black-bis has-shadow">
      <div className="level">
        <div className="level-item">
          <img src={amcmLogoNew} alt="" style={{}} />
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
