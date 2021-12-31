function illegalWord (sentence, word) {

let result = sentence.includes(word)

return result


}

console.log(illegalWord('Hello there' , 'Hello'));
console.log(illegalWord("But I didn't say fudge", 'fudge'));
console.log(illegalWord("But I didn't say fudge", 'Fudge'));