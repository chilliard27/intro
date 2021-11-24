function alphabetNumb(letter) {

    
    let betArray= [ 'A', 'B', 'C' ,'D' , 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z' ]

    let indexedletter = betArray.indexOf(letter) + 1

    
    return indexedletter
    

    

}
console.log(alphabetNumb('A'))
console.log(alphabetNumb('B'))
console.log(alphabetNumb('C'))