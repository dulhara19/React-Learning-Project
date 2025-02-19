import React from "react";

const studentcard2 = (props) => {
  return (
    <div className="stucard-container">
      <h1>Student Card</h1>
      <div className="stucard">
        <h2>{props.name}</h2>
        <p>Age: {props.age}</p>
        <p>Country: {props.country}</p>
      </div>
    </div>
  );
};

export default studentcard2;
