import React from "react";
import { checkValidity } from "../KeyPadData";
const AccessDisplayUnit = ({ entry }) => {
  const entryCheck = entry && entry.length === 6; // is there an entry ? if yes ,is it 6 characters in length
  const passKeyClass =
    entryCheck && checkValidity(entry) ? "success" : "danger"; // className based on entryCheck and if the entry is valid
  return (
    <div className="displayContainer">
      {/* passKey number and  ACCESS  state display unit */}
      <div className="display-5 access">
        {entry.length < 6 ? ( // when entry is less than 6 characters show this - the passKey being entered
          <span className={`text-${passKeyClass} entry`}>{entry}</span>
        ) : (
          // entry at 6 characters, verify if entry is correct and show info accordingly
          <span className={`text-${passKeyClass} font-weight-bolder`}>
            {entryCheck && checkValidity(entry)
              ? "ACCESS GRANTED"
              : "ACCESS DENIED"}
          </span>
        )}
      </div>
    </div>
  );
};

export default AccessDisplayUnit;
