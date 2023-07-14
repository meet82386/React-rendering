import React from "react";
import Login from "./login";

var isLoggedIn = false;
var time = new Date().getHours();
var isRegistered = false;

function App() {
  return <div className="container">
    {time >= 1 && time <= 7 && <h1>Why you are still here, Go to home.</h1>}
    {isLoggedIn ? <h1>Hello</h1> : <Login isR={isRegistered}/> }   
   </div>;
}

export default App;
