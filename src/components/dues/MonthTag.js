import React from "react";

const MonthTag = ({ month, hideTag }) => {
  return (
    <span>
      <div className={`tag is-info is-light ${hideTag}`}>{month}</div>
    </span>
  );
};
export default MonthTag;
