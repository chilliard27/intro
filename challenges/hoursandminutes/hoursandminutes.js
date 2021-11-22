function hoursMinutes(minutes) {

    let hours = parseInt( minutes / 60 )
    let notfullhour = ( minutes % 60 )
    
    if (hours == 1  ){
        return `${hours} hour and ${notfullhour} minutes` 
    }
    else{
        return `${hours} hours and ${notfullhour} minutes` 
    }
    

}

console.log( hoursMinutes(100) === '1 hour and 40 minutes')
console.log( hoursMinutes(55) === '0 hours and 55 minutes')
console.log( hoursMinutes(125) === '2 hours and 5 minutes')
console.log( hoursMinutes(175) === '2 hours and 55 minutes')