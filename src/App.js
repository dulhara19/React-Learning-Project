import React from "react";
import Studentcard from "./components/StudentCard";
import Counter from "./components/Counter";
import "./App.css";

function App() {
  const obj = { name: "dulhara", age: "23", country: "srilanka" };

  // const input = document.getElementById("text2");
  // input.addEventListener("input", function () {
  //   console.log(input.value);
  // });

  const returnfunction = (event) => {
    console.log(event.target.value);
    const para = document.getElementById("para");
    para.innerHTML = event.target.value;
  };

  return (
    <div className="containerdiv">
      <h1>my react app</h1>
      <Studentcard obj={obj} />
      <input
        type="text"
        id="text2"
        onChange={returnfunction}
        className="inputfield"
      />
      <p id="para"></p>

      <div className="counterdiv">
        <Counter />
      </div>
    </div>
  );
}
export default App;
