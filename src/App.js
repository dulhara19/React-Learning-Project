import Studentcard from "./components/StudentCard";
import "./App.css";

function App() {
  const obj = { name: "dulhara", age: "23", country: "srilanka" };

  return (
    <div className="containerdiv">
      <h1>my react app</h1>
      <Studentcard obj={obj} />
    </div>
  );
}

export default App;
