import React from "react";
import ButtonNumber from "./ButtonNumber";

import { keyPadNo, checkValidity } from "../KeyPadData";
import WelcomeMsg from "./WelcomeMsg";

const checkIndex = (valuesEntered, num, expectedIndex) => {
  return valuesEntered.indexOf(num) !== expectedIndex;
};

function KeyPad({ add, entry, enableButtons }) {
  // StepFeedBack component defined within KeyPad
  const StepFeedBack = () => (
    <div className="text-danger bg-white step-feedBack p-2 text-center font-weight-bolder">
      You will need a retrial, trust me!
      <button
        className="btn btn-block font-weight-bolder text-warning bg-dark p-2"
        onClick={enableButtons}
      >
        Start Afresh.
      </button>
    </div>
  );

  const baseBtnClass = checkValidity(entry)
    ? "bg-success text-white  "
    : "bg-dark text-warning ";

  return (
    <div className="keyPadBtnContainer">
      <div className="keyPad mb-4 ">
        {/* while the entry has not been verified - show the 6 buttons */}
        {!checkValidity(entry) ? (
          keyPadNo.map((num, index) => {
            return (
              <ButtonNumber
                key={`id@${index}Point${num}`}
                buttonValue={num}
                addNumber={add}
                valuesEntered={entry}
                check={
                  entry.length === 2 && checkIndex(entry, num, index)
                    ? () => checkIndex(entry, num, index)
                    : () => {
                        return; // do nothing
                      }
                }
                clearDisplay={enableButtons}
              />
            );
          })
        ) : (
          // after verifying the pass Key as correct - show the welcomeMsg
          <WelcomeMsg />
        )}
      </div>

      {/* Bottom Button : show this button only when EXACTLY 6 numbers have been entered */}
      {entry.length === 6 && (
        <button
          onClick={enableButtons}
          className={`ml - 0 btn ${baseBtnClass}  btn-block font-weight-bolder`}
        >
          {/* if the entry is valid - show */}
          {checkValidity(entry)
            ? "Sign Out"
            : !checkValidity(entry) && entry.length === 6
            ? "Try Again"
            : ""}
        </button>
      )}

      {/* Hint Message/Feedback */}
      <div>
        {entry.length === 2 &&
          (entry.indexOf("5") !== 1 ? (
            <StepFeedBack />
          ) : entry.length === 3 && entry.indexOf("3") !== 2 ? (
            <StepFeedBack />
          ) : entry.length === 4 && entry.indexOf("1") !== 3 ? (
            <StepFeedBack />
          ) : entry.length === 5 && entry.indexOf("4") !== 4 ? (
            <StepFeedBack />
          ) : entry.length === 6 && entry.indexOf("6") !== 5 ? (
            <StepFeedBack />
          ) : (
            ""
          ))}
      </div>
    </div> // End of Keypad Component
  );
}

export default KeyPad;
