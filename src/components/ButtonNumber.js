import React from "react";

const ButtonNumber = ({
  buttonValue,
  addNumber,
  valuesEntered,
  check,
  clearDisplay,
}) => {
  const handleClick = () => {
    if (check()) {
      clearDisplay();
    } else {
      addNumber(buttonValue);
    }
  };

  return (
    <input
      type="submit"
      value={buttonValue}
      className={`buttonNumber `}
      onClick={handleClick}
      disabled={valuesEntered.length === 6} // limit entered number to 6 characters
    />
  );
};

export default ButtonNumber;
