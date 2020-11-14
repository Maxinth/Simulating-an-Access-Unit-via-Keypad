import React from "react";
import Pad from "./components/Pad";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Special Agent Verification Unit</h1>
      <h2>Enter your 6 digit password to confirm your status</h2>
      <Pad />
    </div>
  );
}

export default App;
