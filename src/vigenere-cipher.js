const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor (name) {
    this.name = name;
  }
  encrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw Error();
    }
  }    
  decrypt(encryptedMessage, key) {
    if (encryptedMessage === undefined || key === undefined) {
      throw Error();
    }

  }
}

module.exports = VigenereCipheringMachine;

//npm run test ./test/vigenere-cipher.test.js
