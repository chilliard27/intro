function toHours(minutes) {
    let hours = Math.round(( minutes / 60 ) * 1000) / 1000
 // let hours = minutes / 60  gives long decimals due to float values, .toFixed didn't work again.
 //There has to be a way to round to certain decimal points.

 //This just seems weird.

console.log(hours)
return hours


}
 
  
    console.log( toHours(45) === 0.75 )
    console.log( toHours(75) === 1.25 )
    console.log( toHours(125) === 2.083)