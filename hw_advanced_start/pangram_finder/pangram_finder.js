const PangramFinder = function (phrase) {
  this.pangram = 'qwertyuiopasdfghjklzxcvbnm'.split('')
  this.alphabet = phrase.toLowerCase().split('')
  
}

PangramFinder.prototype.isPangram = function () {
    let onlyAlphabet = this.removeSpacesAndNonAlphabets();

    return this.pangram.every(eachAlphabet =>onlyAlphabet.includes(eachAlphabet))
};

PangramFinder.prototype.removeSpacesAndNonAlphabets = function () {

  return this.alphabet.filter(eachAlphabet=>{return eachAlphabet != " " || this.pangram.includes(eachAlphabet) });

};

module.exports = PangramFinder;
