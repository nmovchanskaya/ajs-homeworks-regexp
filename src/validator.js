export default class Validator {
  constructor() {
    this.allowLatinLetters = '[a-zA-Z]+';
    this.allowThreeNumbers = '\\d{0,3}';
    this.allowLettersUnderscore = '\\w';
    this.allowDashes = '-';
    this.exeptThreeNumbersInRow = '(?!.*\\d{4})';
  }
  
  validateUsername(name) {
    // return /^(?!.*\d{4})[a-zA-Z]+[\w\d{0,3}_-]*[a-zA-Z]$/.test(name);
    const regexpStr = '^' 
        + this.exeptThreeNumbersInRow 
        + this.allowLatinLetters 
        + '['
        + this.allowLettersUnderscore
        + this.allowThreeNumbers
        + this.allowDashes
        + ']*'
        + this.allowLatinLetters
        + '$';
    const regexpObj = new RegExp(regexpStr);
    return regexpObj.test(name); 
  }
}

const v = new Validator();
// console.log(v.validateUsername('abc3_fg-1234a'));
