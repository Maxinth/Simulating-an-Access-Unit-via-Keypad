let keyPadNo = [2, 4, 6, 5, 1, 3]; // the order property is used to rea-arrange  the buttons mapped from this array (see -flexBox)

const checkValidity = (entry) => {
  if (entry === "252146") {
    return true;
  } else {
    return false;
  }
};

export { keyPadNo, checkValidity };
