const PangramFinder = function (phrase) {
  this.alphabet = phrase.toLowerCase().split('').filter(eachAlphabet=>eachAlphabet != " ")
  this.pangram = 'qwertyuiopasdfghjklzxcvbnm'.split('')
}

PangramFinder.prototype.isPangram = function () {

  return this.pangram.every(eachAlphabet =>this.alphabet.includes(eachAlphabet))
}

module.exports = PangramFinder;
