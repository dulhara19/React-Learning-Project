<h1> important facts </h1>

```

function App() {

const returnfunction = (event) => {
console.log(event.target.value);}

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
</div>

) }
```

when input feils sent to the html page when it calls the App.js file, it will show you the input field in the web page. and when i create this input, i added
onChange={returnfunction} this is an event handler that triggers a function whenever the value of an input field, textarea, or other form element changes. it calls for {returnfunction}

then this is my {returnfunction},
const returnfunction = (event) => {
console.log(event.target.value);} this will show whatever types on input field, inside the console.

<h1> useState</h1>

```
import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
};
export default Counter;
```

we need to re render actual dom. therefore we need to use this. here i have created counter.jsx file. it imports {useState} from react.

1. useState(0) initializes count with 0.
2. count stores the current counter value.
3. setCount is a function to update count and trigger a re-render.

<h1>callback functions</h1>

```

Since props are one-way (parent → child), we can't directly send data from a child to a parent using props. Instead, we use callback functions (a function passed as a prop from the parent) to send data back to the parent
```
