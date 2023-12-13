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
    this.alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  }
  encrypt(message, key) {
    if (!message || !key) {
      throw new NotImplementedError('Incorrect arguments!');
    } else {
      message = message.toUpperCase();
      message = key.toUpperCase();
      let messageIn = [];
      let keyIn = [];
      while (key.length < message.length) {
        key.repeat(2);
      }
      for (let i = 0; i < message.length; i++) {
        if (this.alphabet.includes(message[i])) {
          for (let j = 0; j < this.alphabet.length; j++) {
            if (this.alphabet[j] === message[i]) {
              messageIn.push(j)
            }
          }
        } else {
          messageIn.push(message[i]);
        }
      }
      for (let i = 0; i < key.length; i++) {
        if (this.alphabet.includes(key[i])) {
          for (let j = 0; j < this.alphabet.length; j++) {
            if (this.alphabet[j] === key[i]) {
              keyIn.push(j);
              continue;
            }
          }
        }
      }
      for (let i = 0; i < messageIn; i++) {
        if (typeof messageIn[i] === 'number') {
          messageIn[i] = this.alphabet[messageIn[i] + key[i]];
        }
      }
      return messageIn;
    }
  }
  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new NotImplementedError('Incorrect arguments!');
    }
  }
}

module.exports = {
  VigenereCipheringMachine
};
