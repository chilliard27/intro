function hotPotato(numOfturns) {

let student = [2,3,4,0,1]
let potatoplace = 2

if (numOfturns < 5 ) {
    potatoplace = student[numOfturns]
} else {
    let leftoverPotato = numOfturns % 5
    potatoplace = student[leftoverPotato]
}
return potatoplace
}
console.log(hotPotato(0))
console.log(hotPotato(1))
console.log(hotPotato(7))