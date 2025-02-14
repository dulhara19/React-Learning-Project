import React from "react";
import PropTypes from "prop-types";

const Students = ({ ...props }) => {
  return (
    <div className="divcls">
      <h3>{props.name}</h3>
      <h3>{props.age}</h3>
      <h3>{props.country}</h3>
    </div>
  );
};

Studentcard.propTypes = {
  name: PropTypes.string,
  name: PropTypes.number,
  name: PropTypes.string,
};
export default Students;
