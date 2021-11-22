//Function to find area of right triangle given base width and height with a unit denotation
function righttriangle( base , height , units ) {
 
let area = ( .5 * base * height ) + ' square ' + units

console.log(area)
return area
}
console.log( righttriangle(4,5, 'feet') === '10 square feet' )