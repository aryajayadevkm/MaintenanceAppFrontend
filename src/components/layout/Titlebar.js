import React, { Fragment } from "react";
import dot from "./dot.png";
import PropTypes from "prop-types";

const Titlebar = ({ building }) => {
  return (
    <h1 className="px-2 pt-3 level-item has-text-light has-background-black-ter">
      <span className="pr-2 pt-1 ">
        <img src={dot} alt="" />
      </span>
      {building}
    </h1>
  );
};

Titlebar.propTypes = {
  building: PropTypes.string.isRequired,
};

Titlebar.defaultProps = {
  building: "Prasanthi Trippadam Apartments",
};
export default Titlebar;
