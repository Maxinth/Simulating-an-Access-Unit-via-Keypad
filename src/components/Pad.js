import React, { useState } from "react";
import AccessDisplayUnit from "./AccessDisplayUnit";
import KeyPad from "./KeyPad";

const Pad = () => {
  const [passKey, setPassKey] = useState("");
  const addNumber = (num) => {
    setPassKey((passKey) => (passKey += num.toString())); // concatenates each entry unto the end of the string
  };
  const resetCount = () => {
    setPassKey(""); // resets string to an empty value
  };

  return (
    <div className="accessKey">
      <AccessDisplayUnit entry={passKey} />
      <KeyPad add={addNumber} entry={passKey} enableButtons={resetCount} />
    </div>
  );
};

export default Pad;
