const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor (isDirectMachine = true) {
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    this.char = ':1234567890!@#$(),./|*-&^% ';
    this.isDirect = isDirect;
  }
  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }
    message.toUpperCase();
    key.toUpperCase();
    let newKeyWord = '';
    for (let i = 0, j = 0; i < message.length; i++) {
      if (message[i] !== ' ') {
        newKeyWord += key[j];
        j += 1;
      } else 
      newKeyWord += ' ';
      if (j === key.length) {
        j = 0;
      }
    }

    let result = '';

    for (let i = 0, j = 0; i < message.length; i += 1) {
      if (this.char.indexOf(message[i]) > -1) {
        result += message[i];
        j++;
        continue;
      } else {
        let a = this.alphabet.indexOf(message[i]);
        let b = this.alphabet.indexOf(newKeyWord[j]);
        let charIndex =  a + b < this.alphabet.length ? a + b : (a + b) - this.alphabet.length;
        result += this.alphabet[charIndex];
      }
      j++;
    }
    if (!this.isDirect) {
      return result.split('').reverse().join('');
    }
    return result;
  }
  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error('Incorrect arguments!');
    }
    message = message.toUpperCase();
    key = key.toUpperCase();
    let newKeyWord = '';
    for (let i = 0, j = 0; i < message.length; i++) {
      if (message[i] !== ' ') {
        newKeyWord += key[j];
        j += 1;
      } else 
      newKeyWord += ' ';
      if (j === key.length) {
        j = 0;
      }
    }
    let result = '';

    for (let i = 0, j = 0; i < message.length; i += 1) {
      if (this.char.indexOf(message[i]) > -1) {
        result += message[i];
        j++;
        continue;
      } else {
        let a = this.alphabet.indexOf(message[i]);
        let b = this.alphabet.indexOf(newKeyWord[j]);
        let charIndex = (a - b) < 0 ? a - b + this.alphabet.length : (a - b);
        result += this.alphabet[charIndex];
      }
      j++;
    }
    if (!this.isDirect) {
      return result.split('').reverse().join('');
    }
    return result;
  }
}

module.exports = {
  VigenereCipheringMachine
};
