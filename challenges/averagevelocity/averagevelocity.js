function avgVel(posArray, time){

return  ( posArray[posArray.length -1] - posArray[0] ) / time 
/* 
length - 1 allows for any array length for position to be used
could be used for science applications later, also for player inputs on website... interesting
*/

}

console.log(avgVel([0,4,6], 10))