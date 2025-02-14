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

Studentcard.propTypes = {
  name: PropTypes.string,
  name: PropTypes.number,
  name: PropTypes.string,
};
export default Studentcard;
