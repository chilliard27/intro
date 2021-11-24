function weightOnX(accOnX, weightOnEarth){

let mass = weightOnEarth / 9.8 

if (weightOnEarth > 0 ) {
return (mass * accOnX)
}
else {
    return "Object has no mass and can't be negative"
}


}
console.log(weightOnX(111,600))