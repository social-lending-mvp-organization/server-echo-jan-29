const usernameElement = document.getElementById('name');
const buttonElement = document.getElementById('submit');
const outputElement = document.getElementById('result-field');

function clientSideValidation(inputString) {
  if (inputString.length > 0) {
    return inputString;
  }
  return false;
}

function clickHandler() {
  const userName = usernameElement.value;
  const sanitizedString = clientSideValidation(userName);
  console.log(sanitizedString);
}

if (buttonElement !== null) {
  buttonElement.addEventListener('click', clickHandler);
}

if (module) {
  module.exports.usernameElement = usernameElement;
  module.exports.buttonElement = buttonElement;
  module.exports.outputElement = outputElement;

  module.exports.clientSideValidation = clientSideValidation;
  module.exports.clickHandler = clickHandler;
}
