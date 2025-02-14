import Students from "./Students";

const Studentcard = ({ obj }) => {
  return (
    <div className="imgdiv">
      <img src="/images/newdp.jpeg" alt="" className="img" />
      <Students name={obj.name} age={obj.age} country={obj.country} />
    </div>
  );
};
export default Studentcard;
