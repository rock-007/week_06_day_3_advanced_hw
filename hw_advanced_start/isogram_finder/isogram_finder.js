const IsogramFinder = function (word) {
    this.pangram = 'qwertyuiopasdfghjklzxcvbnm'.split('')
    this.alphabet = word.toLowerCase().split('')
    
}

IsogramFinder.prototype.isIsogram = function () {
    let tempPangram = this.pangram
    return this.removeSpacesAndNonAlphabets().every((eachAlphabet)=>{
        let result =false;

        if (tempPangram.includes(eachAlphabet)){
            result =true;
            let alphabetIndex = tempPangram.indexOf(eachAlphabet);
            tempPangram.splice(alphabetIndex,1);
        };
        return result;

    });

};

IsogramFinder.prototype.removeSpacesAndNonAlphabets = function () {

    return this.alphabet.filter(eachAlphabet=>{return eachAlphabet != " " || this.pangram.includes(eachAlphabet) })
  
  };

module.exports = IsogramFinder;
