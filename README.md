<h3> important facts </h3>

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

when input feils sent to the html page when it calls the App.js file, it will show you the input field in the web page. and when i create this input, i added
onChange={returnfunction} this is an event handler that triggers a function whenever the value of an input field, textarea, or other form element changes. it calls for {returnfunction}

then this is my {returnfunction},
const returnfunction = (event) => {
console.log(event.target.value);} this will show whatever types on input field, inside the console.
```
