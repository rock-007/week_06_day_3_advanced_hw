const IsogramFinder = function (word) {
    this.pangram = 'qwertyuiopasdfghjklzxcvbnm'.split('')
    this.alphabet = word.toLowerCase().split('').filter(eachAlphabet=>{return eachAlphabet != " " || this.pangram.includes(eachAlphabet) })
    
}

IsogramFinder.prototype.isIsogram = function () {
    let tempPangram = this.pangram
    return this.alphabet.every((eachAlphabet)=>{
        result =false

        if (tempPangram.includes(eachAlphabet)){
            result =true;
            let alphabetIndex = tempPangram.indexOf(eachAlphabet)
            tempPangram.splice(alphabetIndex,1)
        }
        return result

    })

}

module.exports = IsogramFinder;
