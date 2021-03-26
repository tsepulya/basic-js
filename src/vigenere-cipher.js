const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor (name = true) {
    this.name = name;
  }
  
  encrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw Error();
    }
    message = message.toUpperCase();
    key = key.toUpperCase();
    if (message.length > key.length) {
      let numberRepeat = Math.ceil(message.length/key.length);
      key = key.repeat(numberRepeat).slice(0, message.length);
    }
    let alph = 'ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let array = [];
    let kf = 0;
    for (let i = 0; i < message.length; i++) {
      let m = alph.indexOf(message[i]);
      let k = alph.indexOf(key[i-kf]);
      let resIndex = m + k;
      if (m === -1 || message[i] === ' ') {
        array.push(message[i]);
        kf++;
      } else {
        array.push(alph[resIndex]);
      }
    }
    if (this.name) {
      return array.join('');
    }
    return array.reverse().join('');
    }
   
  decrypt(encryptedMessage, key) {
    if (encryptedMessage === undefined || key === undefined) {
      throw Error();
    }
    encryptedMessage = encryptedMessage.toUpperCase();
    key = key.toUpperCase();
    if (encryptedMessage.length > key.length) {
      let numberRepeat = Math.ceil(encryptedMessage.length/key.length);
      key = key.repeat(numberRepeat).slice(0, encryptedMessage.length);
    }
    let alph = 'ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let array = [];
    let kf = 0;
    for (let i = 0; i < encryptedMessage.length; i++) {
      let c = alph.indexOf(encryptedMessage[i]);
      let k = alph.indexOf(key[i-kf]);
      let resIndex = c + 26 - k;
      if (c === -1 || encryptedMessage[i] === ' ') {
        array.push(encryptedMessage[i]);
        kf++;
      } else {
        array.push(alph[resIndex]);
      }
    }
    if (this.name) {
      return array.join('');
    }
    return array.reverse().join('');
    }
  }

module.exports = VigenereCipheringMachine;

//npm run test ./test/vigenere-cipher.test.js
