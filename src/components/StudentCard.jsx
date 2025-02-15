import React from "react";

import Students from "./Students";
import PropTypes from "prop-types";

const Studentcard = ({ obj }) => {
  return (
    <div className="imgdiv">
      <img src="/images/newdp.jpeg" alt="" className="img" />
      <Students name={obj.name} age={obj.age} country={obj.country} />
    </div>
  );
};

// Studentcard.propTypes = {
//   name: PropTypes.string,
//   age: PropTypes.number,
//   country: PropTypes.string,
// };

Studentcard.propTypes = {
  obj: PropTypes.shape({
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    country: PropTypes.string.isRequired,
  }).isRequired,
};

export default Studentcard;
