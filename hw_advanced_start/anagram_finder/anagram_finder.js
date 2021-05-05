const AnagramFinder = function (word) {
    this.word = word.toLowerCase().split("");

}

AnagramFinder.prototype.findAnagrams = function (otherWords) {
    let result =[]
    let foundAnagram = false

    if(otherWords != [''] ){ 
    for (eachWord of otherWords){
        
        let characterArray = this.convertToCharacters(eachWord)
        console.log(characterArray)
        console.log(this.word)
        if (characterArray.length ==this.word.length && !this.replica(eachWord)){
            
            //console.log(characterArray)
            foundAnagram =characterArray.every((eachCharacter)=>{
                return this.word.includes(eachCharacter)
            })
        if (foundAnagram == true){
            result.push(eachWord)
        }
        }

        



        }
    }
    return result;

}

AnagramFinder.prototype.convertToCharacters= function (word){

    return word.toLowerCase().split("")
}

AnagramFinder.prototype.replica = function (eachWord){
    return eachWord == this.word.join("")
}

module.exports = AnagramFinder;
