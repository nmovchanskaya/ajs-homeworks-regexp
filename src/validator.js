export default class Validator {
  validateUsername(name) {
    return /^(?!.*\d{4})[a-zA-Z]+[\w\d{0,3}_-]*[a-zA-Z]$/.test(name);
  }
}

const v = new Validator();
