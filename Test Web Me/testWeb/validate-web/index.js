import React from "react";
import ReactDOM from "react-dom";
import "./styles.css"; 
import ValidatedLoginForm from "./ValidatedLoginForm";

function App() {
  return (
    <div className="App">
      <h1>Validated Login Form</h1>
      <ValidatedLoginForm />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);