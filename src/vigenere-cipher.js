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
  constructor(direct = true) {
    this.direct = direct;
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }
    return this.process(message, key, true);
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error('Incorrect arguments!');
    }
    return this.process(encryptedMessage, key, false);
  }

  process(input, key, encrypting) {
    let result = [];
    let keyIndex = 0;
    key = key.toUpperCase();

    for (let i = 0; i < input.length; i++) {
      let char = input[i].toUpperCase();
      let charIndex = this.alphabet.indexOf(char);

      if (charIndex === -1) {
        result.push(char); // Non-alphabet characters remain unchanged
      } else {
        let shift = this.alphabet.indexOf(key[keyIndex % key.length]);
        let newIndex = encrypting
          ? (charIndex + shift) % 26
          : (charIndex - shift + 26) % 26;

        result.push(this.alphabet[newIndex]);
        keyIndex++;
      }
    }

    let finalResult = result.join('');
    return this.direct ? finalResult : finalResult.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine,
};
