const UpperCaser = function (words) {
    this.words = words
}

UpperCaser.prototype.toUpperCase = function () {
    return this.words.map(eachItem=>eachItem.toUpperCase());
};

module.exports = UpperCaser;
