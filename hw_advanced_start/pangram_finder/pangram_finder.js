const PangramFinder = function (phrase) {
  this.pangram = 'qwertyuiopasdfghjklzxcvbnm'.split('')
  this.alphabet = phrase.toLowerCase().split('').filter(eachAlphabet=>{return eachAlphabet != " " || this.pangram.includes(eachAlphabet) })
  
}

PangramFinder.prototype.isPangram = function () {

  return this.pangram.every(eachAlphabet =>this.alphabet.includes(eachAlphabet))
}

module.exports = PangramFinder;
