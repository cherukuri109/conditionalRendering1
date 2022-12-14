import React from "react";
import Login from "./Login";

var isloggedIn = false;

function App() {
  return (
    <div className="container">
      {isloggedIn === true ? <h1>Hello</h1> : <Login />}
    </div>
  );
}

export default App;
