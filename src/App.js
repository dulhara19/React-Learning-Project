import React, { useState } from "react";
import "./App.css";
import Studentcard from "./components/StudentCard";
import Studentcard2 from "./components/Dynamic-stu-card";
import Counter from "./components/Counter";
import SearchBar from "./components/SearchBar";

function App() {
  const obj = { name: "dulhara", age: "23", country: "srilanka" };

  //list of array to dynamic-stu-card
  const studentList = [
    { lastname: " Anne", age: 25, hometown: "colombo" },
    { lastname: " Borer", age: 20, hometown: "gampaha" },
    { lastname: " Alex", age: 24, hometown: "kandy" },
  ];
  // const searchStudent = (event) => {
  //   studentList.filter((student) => {
  //     if (student.lastname.includes(event.target.value)) {
  //       console.log(student);
  //     }
  //   });
  // };
  // const input = document.getElementById("text2");
  // input.addEventListener("input", function () {
  //   console.log(input.value);
  // });

  const [searchtext, setText] = useState("");

  //usestate and print passed data from a child component
  const searchChange = (event) => {
    console.log(event.target.value);
    setText(event.target.value);
  };

  //directly accessing dom. this is not a good practice.
  const returnfunction = (event) => {
    console.log(event.target.value);
    const para = document.getElementById("para");
    para.innerHTML = event.target.value;
  };

  return (
    <div className="containerdiv">
      <h1>my react app</h1>

      <SearchBar onSearch={searchChange} />
      <p>{searchtext}</p>

      <Studentcard obj={obj} />

      {studentList.map((student, index) => {
        return (
          <Studentcard2
            key={index}
            name={student.lastname}
            age={student.age}
            country={student.hometown}
          />
        );
      })}

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
