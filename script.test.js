const frontEndScript = require('./public/script');
/*
describe('The script should find', () => {
  it('an username field', () => {
    expect(frontEndScript.usernameElement).toBeTruthy();
  });
  it('a button', () => {
    expect(frontEndScript.buttonElement).toBeTruthy();
  });
  it('output div', () => {
    expect(frontEndScript.outputElement).toBeTruthy();
  });
});
*/
describe('The script should validate input', () => {
  it('when empty string it should do nothing', () => {
    expect(frontEndScript.clientSideValidation('')).toBeFalsy();
  });
});
