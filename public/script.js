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
  const validatedString = clientSideValidation(userName);
  const myObject = {
    userName: validatedString,
  };
  fetch('http://localhost:3000/greet', {
    method: 'post',
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(myObject),
  }).then(res => res.json())
    .then((greetObj) => {
      outputElement.innerHTML = greetObj.greeting;
    });
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
