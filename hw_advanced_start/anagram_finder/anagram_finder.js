const AnagramFinder = function (word) {
    this.word = word.toLowerCase().split("");

}

AnagramFinder.prototype.findAnagrams = function (otherWords) {

    if(otherWords != [''] ){ 

        return otherWords.filter((eachWord)=>{
            let characterArray = this.convertToCharacters(eachWord)
            let result =false

            if (characterArray.length ==this.word.length && !this.replica(eachWord)){
                result = characterArray.every((eachCharacter)=>{
                    return this.word.includes(eachCharacter)
                });
            }; 

            return result;
        })

    };
    return result;

}

AnagramFinder.prototype.convertToCharacters= function (word){

    return word.toLowerCase().split("")
}

AnagramFinder.prototype.replica = function (eachWord){
    return eachWord == this.word.join("")
}

module.exports = AnagramFinder;
